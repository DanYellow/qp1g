import Vue from 'vue'

import Progression from '@/components/Progression'

import store from '@/store'
// import { mutations } from '@/store'

describe('Intro.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Progression)
    const vm = new Constructor({ store }).$mount()
    expect(vm.$el.classList.contains('progression')).to.be.truthy
  })

  it('should display five crosses', () => {
    const Constructor = Vue.extend(Progression)
    store.commit('setQuestionsNumber')
    const vm = new Constructor({ store }).$mount()
    expect(vm.$el.querySelectorAll('li .empty')).to.have.length(5)
  })

  it('should display wrong-right-right-cross-cross', () => {
    const Constructor = Vue.extend(Progression)
    store.commit('setQuestionsNumber')
    store.commit('setResponse', { response: false, index: 0 })
    store.commit('setResponse', { response: true, index: 1 })
    store.commit('setResponse', { response: true, index: 2 })
    const vm = new Constructor({ store }).$mount()
    expect(vm.$el.querySelectorAll('li .empty')).to.have.length(2)
    expect(vm.$el.querySelectorAll('li .right')).to.have.length(2)
    expect(vm.$el.querySelectorAll('li .wrong')).to.have.length(1)
  })
})

