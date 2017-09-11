
import Vue from 'vue'
import { shallow } from 'avoriaz'

import Question from '@/components/Question'

describe('Answer.vue', () => {
  let QuestionComponent = null
  let QuestionShallow = null
  let question = null

  beforeEach(() => {
    const Constructor = Vue.extend(Question)

    question = {
      question: 'Moi j’encule toute la famille en brochette, même le Labrador et le poisson rouge y passent pas de jaloux...',
      response_id: 2,
      answers: []
    }

    const state = {
      responses: [],
      isQuizEnded: false,
      nbQuestions: 0,
      easyModeEnabled: false
    }

    const data = {
      isCorrect: null,
      question
    }

    QuestionComponent = new Constructor({
      data,
      store: state
    }).$mount()

    QuestionShallow = shallow(Question, {data})
  })

  it('should render correct contents', () => {
    expect(QuestionComponent.$el.classList.contains('question')).to.be.truthy
  })

  it('should display one question', () => {
    expect(QuestionShallow.is('section')).to.equal(true)
    expect(
      QuestionShallow.first('.quote').text()
    ).to.includes(question.question)
    expect(QuestionComponent.$el.querySelector('.answers')).to.be.truthy
    expect(QuestionShallow.find('.result')).to.have.length(0)
  })
})
