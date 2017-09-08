import Vue from 'vue'

import Score from '@/components/Score'

describe('Score.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Score)
    const vm = new Constructor().$mount()
    expect(vm.$el.classList.contains('score')).to.be.truthy
  })

  // it('should display correct vue', () => {
  //   const Constructor = Vue.extend(Score)
  //   const vm = new Constructor({propsData: { score: 23 }}).$mount()
  //   expect(vm.$el.querySelector('.score h3').textContent).to.equal('23 %')
  //   // expect(vm.$el.querySelectorAll('svg .correct').length).to.have.length(1)
  // })
})
