function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var app = new Vue({
  el: '#app',
  delimiters: ['${','}'],
  data: {
    status: '',
    currentQuestionIndex: 0,
    gameStarted: false,
    questions: [{
      q: 'ὁ',
      a: 'masculine',
      successMessage: 'Correct! This definite article is masculine, singular, and nominative.'
    }, {
      q: 'οἱ',
      a: 'masculine',
      successMessage: 'Correct! This definite article is masculine, plural, nominative.'
    }, {
      q: 'τό',
      a: 'neuter',
      successMessage: 'Correct! This definite article is neuter, singular, and nominative.'
    }, {
      q: 'τά',
      a: 'neuter',
      successMessage: 'Correct! This definite article is neuter, plural, and nominative.'
    }, {
      q: 'ἡ',
      a: 'feminine',
      successMessage: 'Correct! This definite article is feminine, singular, and nominative.'
    }, {
      q: 'αἱ',
      a: 'feminine',
      successMessage: 'Correct! This definite article is feminine, plural, and nominative.'
    }, {
      q: 'τοῦ',
      a: 'masculine',
      successMessage: 'Correct! This definite article is masculine, singular, and genitive.'
    }, {
      q: 'τῶν',
      a: 'masculine',
      successMessage: 'Correct! This definite article is masculine, plural, and genitive.'
    }, {
      q: 'τῆς',
      a: 'feminine',
      successMessage: 'Correct! This definite article is feminine, singular, and genitive.'
    }, {
      q: 'τῶν',
      a: 'feminine',
      successMessage: 'Correct! This definite article is feminine, plural, and genitive.'
    }, {
      q: 'τοῦ',
      a: 'neuter',
      successMessage: 'Correct! This definite article is neuter, singular, and genitive.'
    }, {
      q: 'τῶν',
      a: 'neuter',
      successMessage: 'Correct! This definite article is neuter, plural, and genitive.'
    }, {
      q: 'τῷ',
      a: 'masculine',
      successMessage: 'Correct! This definite article is masculine, singular, and dative.'
    }, {
      q: 'τοῖς',
      a: 'masculine',
      successMessage: 'Correct! This definite article is masculine, plural, and dative.'
    }, {
      q: 'τῇ',
      a: 'feminine',
      successMessage: 'Correct! This definite article is feminine, singular, and dative.'
    }, {
      q: 'ταῖς',
      a: 'feminine',
      successMessage: 'Correct! This definite article is feminine, plural, and dative.'
    }, {
      q: 'τῷ',
      a: 'neuter',
      successMessage: 'Correct! This definite article is neuter, singular, and dative.'
    }, {
      q: 'τοῖς',
      a: 'neuter',
      successMessage: 'Correct! This definite article is neuter, plural, and dative.'
    }, {
      q: 'τόν',
      a: 'masculine',
      successMessage: 'Correct! This definite article is masculine, singular, and accusative.'
    }, {
      q: 'τούς',
      a: 'masculine',
      successMessage: 'Correct! This definite article is masculine, plural, and accusative.'
    }, {
      q: 'τήν',
      a: 'feminine',
      successMessage: 'Correct! This definite article is feminine, singular, and accusative.'
    }, {
      q: 'τάς',
      a: 'feminine',
      successMessage: 'Correct! This definite article is feminine, plural, and accusative.'
    }, {
      q: 'τό',
      a: 'neuter',
      successMessage: 'Correct! This definite article is neuter, singular, and accusative.'
    }, {
      q: 'τά',
      a: 'neuter',
      successMessage: 'Correct! This definite article is neuter, plural, and accusative.'
    }],
    possibleAnswers: ['masculine', 'feminine', 'neuter'],
  },
  methods: {
    getQuestion: function() {
      return this.questions[this.currentQuestionIndex].q;
    },
    getSuccessMessage: function() {
      return this.questions[this.currentQuestionIndex].successMessage;
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
  filters: {
    titleCase: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
});
