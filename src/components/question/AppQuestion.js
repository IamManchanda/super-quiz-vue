const MODE_ADDITION = 1;
const MODE_SUBTRACTION = 2;

export default{
  data() {
    return {
      question: 'Oops, an error ocurred :/',
      buttonData: [
        {correct: true, answer: 0},
        {correct: false, answer: 0},
        {correct: false, answer: 0},
        {correct: false, answer: 0}
      ]
    };
  },
  methods: {
    generateQuestion() {
      const firstNumber = this.generateRandomNumber(1, 100);
      const secondNumber = this.generateRandomNumber(1, 100);
      const modeNumber = this.generateRandomNumber(1, 2);

      let correctAnswer = 0;

      switch (modeNumber) {
        case MODE_ADDITION:
          correctAnswer = firstNumber + secondNumber;
          this.question = `What's ${firstNumber} + ${secondNumber}?`;
          break;
        case MODE_SUBTRACTION:
          correctAnswer = firstNumber - secondNumber;
          this.question = `What's ${firstNumber} - ${secondNumber}?`;
          break;
        default:
          correctAnswer = 0;
          this.question = 'Oops, an Error occurred :/';
      }

      this.buttonData[0].answer = this.generateRandomNumber(
        correctAnswer - 10, correctAnswer + 10, correctAnswer);
      this.buttonData[0].correct = false;

      this.buttonData[1].answer = this.generateRandomNumber(
        correctAnswer - 10, correctAnswer + 10, correctAnswer);
      this.buttonData[1].correct = false;
      
      this.buttonData[2].answer = this.generateRandomNumber(
        correctAnswer - 10, correctAnswer + 10, correctAnswer);
      this.buttonData[2].correct = false;
      
      this.buttonData[3].answer = this.generateRandomNumber(
        correctAnswer - 10, correctAnswer + 10, correctAnswer);
      this.buttonData[3].correct = false;

      const correctButton = this.generateRandomNumber(0, 3);
      this.buttonData[correctButton].correct = true;
      this.buttonData[correctButton].answer = correctAnswer;
    },
    generateRandomNumber(min, max, except) {
      const rndNumber = Math.round(Math.random() * (max - min)) + min;
      console.log(min, max, rndNumber);
      if (rndNumber == except) {
        return this.generateRandomNumber(min, max, except);
      }
      return rndNumber;
    },
    onAnswer(isCorrect) {
      this.$emit('answered', isCorrect);
    }
  },
  created() {
    this.generateQuestion();
  }
};
