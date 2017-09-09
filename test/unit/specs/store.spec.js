import { mutations } from '@/store'

describe('mutations', () => {
  let state = {}
  beforeEach(() => {
    state = {
      responses: [],
      isQuizEnded: false,
      nbQuestions: 0,
      easyModeEnabled: false
    }
  })

  it('ends quiz', () => {
    mutations.isQuizEnded(state, true)
    expect(state.isQuizEnded).to.be.truthy
  })

  it('doesn\'t ends quiz', () => {
    mutations.isQuizEnded(state)
    expect(state.isQuizEnded).to.be.falsy
  })

  it('disable easymode', () => {
    mutations.toggleEasyMode(state)
    expect(state.easyModeEnabled).to.be.falsy
  })

  it('enable easymode', () => {
    mutations.toggleEasyMode(state, true)
    expect(state.easyModeEnabled).to.be.truthy
  })

  it('creates a 7 questions quiz', () => {
    mutations.setQuestionsNumber(state, 7)
    expect(state.nbQuestions).to.equal(7)
    // expect(vm.$el.querySelectorAll('svg .wrong')).to.have.length(2)
  })

  it('answers good for first question', () => {
    mutations.setQuestionsNumber(state, 7)
    mutations.setResponse(state, { response: true, index: 0 })
    expect(state.responses[0]).to.be.truthy
  })
})
