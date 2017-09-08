import Vue from 'vue'
// import { mount } from 'avoriaz'

import Result from '@/components/Result'

describe('Result.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Result)
    const vm = new Constructor().$mount()
    expect(vm.$el.classList.contains('result')).to.be.truthy
  })

  it('should display correct vue', () => {
    const Constructor = Vue.extend(Result)
    const vm = new Constructor({propsData: { isCorrect: true }}).$mount()
    expect(vm.$el.querySelector('.result p').textContent).to.equal('Correct')
    expect(vm.$el.querySelectorAll('svg .correct').length).to.have.length(1)
  })

  it('should display false vue', () => {
    const Constructor = Vue.extend(Result)
    const vm = new Constructor({propsData: { isCorrect: false }}).$mount()
    expect(vm.$el.querySelector('.result p').textContent).to.equal('Faux')
    expect(vm.$el.querySelectorAll('svg .wrong').length).to.have.length(2)
  })
})
