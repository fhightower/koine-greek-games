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
      q: 'ὁ',
      a: 'nominative',
      successMessage: 'Correct! This definite article is masculine, singular, and nominative.'
    }, {
      q: 'οἱ',
      a: 'nominative',
      successMessage: 'Correct! This definite article is masculine, plural, nominative.'
    }, {
      q: 'τό',
      a: 'nominative',
      successMessage: 'Correct! This definite article is neuter, singular, and nominative.'
    }, {
      q: 'τά',
      a: 'nominative',
      successMessage: 'Correct! This definite article is neuter, plural, and nominative.'
    }, {
      q: 'ἡ',
      a: 'nominative',
      successMessage: 'Correct! This definite article is feminine, singular, and nominative.'
    }, {
      q: 'αἱ',
      a: 'nominative',
      successMessage: 'Correct! This definite article is feminine, plural, and nominative.'
    }, {
      q: 'τοῦ',
      a: 'genitive',
      successMessage: 'Correct! This definite article is masculine, singular, and genitive.'
    }, {
      q: 'τῶν',
      a: 'genitive',
      successMessage: 'Correct! This definite article is masculine, plural, and genitive.'
    }, {
      q: 'τῆς',
      a: 'genitive',
      successMessage: 'Correct! This definite article is feminine, singular, and genitive.'
    }, {
      q: 'τῶν',
      a: 'genitive',
      successMessage: 'Correct! This definite article is feminine, plural, and genitive.'
    }, {
      q: 'τοῦ',
      a: 'genitive',
      successMessage: 'Correct! This definite article is neuter, singular, and genitive.'
    }, {
      q: 'τῶν',
      a: 'genitive',
      successMessage: 'Correct! This definite article is neuter, plural, and genitive.'
    }, {
      q: 'τῷ',
      a: 'dative',
      successMessage: 'Correct! This definite article is masculine, singular, and dative.'
    }, {
      q: 'τοῖς',
      a: 'dative',
      successMessage: 'Correct! This definite article is masculine, plural, and dative.'
    }, {
      q: 'τῇ',
      a: 'dative',
      successMessage: 'Correct! This definite article is feminine, singular, and dative.'
    }, {
      q: 'ταῖς',
      a: 'dative',
      successMessage: 'Correct! This definite article is feminine, plural, and dative.'
    }, {
      q: 'τῷ',
      a: 'dative',
      successMessage: 'Correct! This definite article is neuter, singular, and dative.'
    }, {
      q: 'τοῖς',
      a: 'dative',
      successMessage: 'Correct! This definite article is neuter, plural, and dative.'
    }, {
      q: 'τόν',
      a: 'accusative',
      successMessage: 'Correct! This definite article is masculine, singular, and accusative.'
    }, {
      q: 'τούς',
      a: 'accusative',
      successMessage: 'Correct! This definite article is masculine, plural, and accusative.'
    }, {
      q: 'τήν',
      a: 'accusative',
      successMessage: 'Correct! This definite article is feminine, singular, and accusative.'
    }, {
      q: 'τάς',
      a: 'accusative',
      successMessage: 'Correct! This definite article is feminine, plural, and accusative.'
    }, {
      q: 'τό',
      a: 'accusative',
      successMessage: 'Correct! This definite article is neuter, singular, and accusative.'
    }, {
      q: 'τά',
      a: 'accusative',
      successMessage: 'Correct! This definite article is neuter, plural, and accusative.'
    }],
    possibleAnswers: ['nominative', 'genitive', 'dative', 'accusative'],
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
