import Vue from 'vue'

import Score from '@/components/Score'
import store from '@/store'

describe('Score.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Score)
    const vm = new Constructor({ store }).$mount()

    expect(vm.$el.classList.contains('score')).to.be.truthy
  })

  it('score a perfect', () => {
    const Constructor = Vue.extend(Score)
    const mockStore = {...store, ...{state: {responses: [true, true]}}}

    const vm = new Constructor({
      store: mockStore
    }).$mount()
    expect(vm.$el.querySelector('.score h3').textContent).to.equal('100 %')
  })
})
