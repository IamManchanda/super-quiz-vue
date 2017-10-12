import AppQuestion from './components/question/AppQuestion.vue';
import AppAnswer from './components/answer/AppAnswer.vue';

export default {
  data() {
    return {
      mode: 'app-question'
    };
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = 'app-answer';
      } else {
        this.mode = 'app-question';
        alert('Wrong, try again!');
      }
    }
  },
  components: {
    AppQuestion, AppAnswer
  }
};