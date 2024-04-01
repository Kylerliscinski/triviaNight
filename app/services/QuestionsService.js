import { AppState } from "../AppState.js";
import { Question } from "../models/Questions.js";





class QuestionsService {

  async getQuestions() {
    console.log('🙋‍♂️');
    const response = await fetch('https://opentdb.com/api.php?amount=1&category=27&difficulty=medium&type=multiple')
    console.log('🙋‍♂️🛰️', response);
    const pojos = await response.json()
    console.log('🙋POJOS', pojos);
    const questions = pojos.results.map(pojo => new Question(pojo))
    console.log('🙋Questions', questions);
    AppState.questions = questions
  }
}


export const questionsService = new QuestionsService()