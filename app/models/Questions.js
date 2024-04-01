export class Question {
  constructor(data) {
    this.difficulty = data.difficulty
    this.type = data.type
    this.category = data.category
    this.question = data.question
    this.answer = data.correct_answer
    this.wrong1 = data.incorrect_answers[0]
    this.wrong2 = data.incorrect_answers[1]
    this.wrong3 = data.incorrect_answers[2]
    this.options = [this.answer, this.wrong1, this.wrong2, this.wrong3]
  }

  get QuestionCard() {
    return `
  <div class="row text-center border border-dark rounded mt-5 justify-content-center bg-white shadow p-4">
    <div class="col-10">
      <h1>${this.question}</h1>
    </div>
  </div>

  <div class="row m-5 justify-content-center">
    <div class="col-4 g-2 border border-dark rounded p-2 mx-4 bg-white shadow selectable type="button">
      <h4>a. ${this.answer}</h4>
    </div>
    <div class="col-4 g-2 border border-dark rounded p-2 mx-4 bg-white shadow selectable type="button">
      <h4>b. ${this.wrong1}</h4>
    </div>
    <div class="col-4 g-2 border border-dark rounded p-2 mx-4 bg-white shadow selectable type="button">
      <h4>c. ${this.wrong2}</h4>
    </div>
    <div class="col-4 g-2 border border-dark rounded p-2 mx-4 bg-white shadow selectable type="button">
      <h4>d. ${this.wrong3}</h4>
    </div>
  </div>
    `
  }
}
