import Vue from 'vue'

import Answer from '@/components/Answer'
import Question from '@/components/Question'
// import store from '@/store'

describe('Answer.vue', () => {
  let AnswerComponent = null
  let QuestionComponent = null

  beforeEach(() => {
    const Constructor = Vue.extend(Answer)
    const answerContent = {
      title: 'LWHISKAS',
      id: 9
    }

    const state = {
      responses: [],
      isQuizEnded: false,
      nbQuestions: 0,
      easyModeEnabled: false
    }

    QuestionComponent = new Vue(Question).$mount()
    AnswerComponent = new Constructor({propsData: {answer: answerContent, store: state}}).$mount()
  })

  it('should render correct contents', () => {
    expect(AnswerComponent.$el.classList.contains('answer')).to.be.truthy
  })

  it('should display result screen', () => {
    const clickEvent = new window.Event('click')
    AnswerComponent.$el.querySelector('button').dispatchEvent(clickEvent)
    AnswerComponent._watcher.run()

    expect(AnswerComponent.$el.querySelector('.answer', 'hides question')).to.be.null
    expect(QuestionComponent.$el.querySelector('.result'), 'and display result screen').to.be.truthy
  })
})
