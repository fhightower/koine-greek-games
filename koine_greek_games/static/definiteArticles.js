function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var app = new Vue({
  el: '#app',
  delimiters: ['${','}'],
  data: {
    status: '',
    currentQuestionIndex: 0,
    questions: [{
      q: 'ὁ',
      a: 'nominative'
    }, {
      q: 'τὸν',
      a: 'accusative'
    }, {
      q: 'ἡ',
      a: 'nominative'
    }, {
      q: 'τοῦ',
      a: 'genitive'
    }],
    possibleAnswers: ['nominative', 'accusative', 'genitive', 'dative'],
  },
  methods: {
    getQuestion: function() {
      return this.questions[this.currentQuestionIndex];
    },
    nextQuestion: function() {
      newIndex = getRandomInt(this.questions.length);

      // avoid repetition of the same index
      if (newIndex === this.currentQuestionIndex) {
        this.nextQuestion();
      } else {
        this.status = '';
        this.currentQuestionIndex = newIndex;
      }
    },
    checkAnswer: function(answer) {
      if (answer == this.questions[this.currentQuestionIndex].a) {
        this.status = 'correct';
      } else {
        this.status = 'incorrect';
      }
    }
  },
});
