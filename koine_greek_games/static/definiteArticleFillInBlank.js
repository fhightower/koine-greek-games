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
    // TODO: τό and τά need to be changed to accept both nominative and accusative as answers
    questions: [{
      q: '',
      a: 'ὁ',
      successMessage: 'Correct! This definite article is masculine, singular, and nominative.'
    }, {
      q: '',
      a: 'οἱ',
      successMessage: 'Nice! This definite article is masculine, plural, nominative.'
    }, {
      q: '',
      a: 'τό',
      successMessage: 'Nice! This definite article is neuter, singular, and nominative.'
    }, {
      q: '',
      a: 'τά',
      successMessage: 'Great Work! This definite article is neuter, plural, and nominative.'
    }, {
      q: '',
      a: 'ἡ',
      successMessage: 'Great Work! This definite article is feminine, singular, and nominative.'
    }, {
      q: '',
      a: 'αἱ',
      successMessage: 'Right! This definite article is feminine, plural, and nominative.'
    }, {
      q: '',
      a: 'τοῦ',
      successMessage: 'Correct! This definite article is masculine, singular, and genitive.'
    }, {
      q: '',
      a: 'τῶν',
      successMessage: 'Correct! This definite article is masculine, plural, and genitive.'
    }, {
      q: '',
      a: 'τῆς',
      successMessage: 'Correct! This definite article is feminine, singular, and genitive.'
    }, {
      q: '',
      a: 'τῶν',
      successMessage: 'Correct! This definite article is feminine, plural, and genitive.'
    }, {
      q: '',
      a: 'τοῦ',
      successMessage: 'Correct! This definite article is neuter, singular, and genitive.'
    }, {
      q: '',
      a: 'τῶν',
      successMessage: 'Bingo! This definite article is neuter, plural, and genitive.'
    }, {
      q: '',
      a: 'τῷ',
      successMessage: 'Bingo! This definite article is masculine, singular, and dative.'
    }, {
      q: '',
      a: 'τοῖς',
      successMessage: 'Bingo! This definite article is masculine, plural, and dative.'
    }, {
      q: '',
      a: 'τῇ',
      successMessage: 'Correct! This definite article is feminine, singular, and dative.'
    }, {
      q: '',
      a: 'ταῖς',
      successMessage: 'Correct! This definite article is feminine, plural, and dative.'
    }, {
      q: '',
      a: 'τῷ',
      successMessage: 'Correct! This definite article is neuter, singular, and dative.'
    }, {
      q: '',
      a: 'τοῖς',
      successMessage: 'Correct! This definite article is neuter, plural, and dative.'
    }, {
      q: '',
      a: 'τόν',
      successMessage: 'Correct! This definite article is masculine, singular, and accusative.'
    }, {
      q: '',
      a: 'τούς',
      successMessage: 'Correct! This definite article is masculine, plural, and accusative.'
    }, {
      q: '',
      a: 'τήν',
      successMessage: 'Correct! This definite article is feminine, singular, and accusative.'
    }, {
      q: '',
      a: 'τάς',
      successMessage: 'Correct! This definite article is feminine, plural, and accusative.'
    }, {
      q: '',
      a: 'τό',
      successMessage: 'Correct! This definite article is neuter, singular, and accusative.'
    }, {
      q: '',
      a: 'τά',
      successMessage: 'Correct! This definite article is neuter, plural, and accusative.'
    }],
    possibleAnswers: ['ὁ', 'οἱ', 'τό', 'τά', 'ἡ', 'αἱ', 'τοῦ', 'τῶν', 'τῆς', 'τῶν', 'τοῦ', 'τῶν', 'τῷ', 'τοῖς', 'τῇ', 'ταῖς', 'τῷ', 'τοῖς', 'τόν', 'τούς', 'τήν', 'τάς', 'τό', 'τά']
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
