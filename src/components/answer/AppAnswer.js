export default{
  methods: {
    onNextQuestion() {
        this.$emit('confirmed');
    }
  }
};