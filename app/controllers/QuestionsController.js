import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { setHTML } from "../utils/Writer.js";




export class QuestionsController {
  constructor() {
    console.log('Trivia baby');
    this.getQuestions()
    AppState.on('questions', this.drawQuestions)
  }


  drawQuestions() {
    console.log('✒️🙋‍♂️');
    const questions = AppState.questions
    let questionCards = ''
    questions.forEach(question => questionCards += question.QuestionCard)
    setHTML('question-cards', questionCards)
  }

  getQuestions() {
    questionsService.getQuestions()
  }
}