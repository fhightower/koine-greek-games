function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var app = new Vue({
  el: '#app',
  delimiters: ['${','}'],
  data: {
    status: '',
    currentPassageIndex: 0,
    currentQuestionIndex: 0,
    gameStarted: false,
    selectedWords: [],
    errorMessage: '',
    passages: [{
      passage: 'Οὕτως γὰρ ἠγάπησεν ὁ Θεὸς τὸν κόσμον , ὥστε τὸν Υἱὸν τὸν μονογενῆ ἔδωκεν , ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον.',
      questions: ['Find all <span class="nominative">nominative</span> nouns (and their articles) in the text', 'Find all <span class="accusative">accusative</span> nouns (and their articles) in the text'],
      answers: [['ὁ', 'Θεὸς', 'ὁ'], ['τὸν', 'κόσμον', 'τὸν', 'Υἱὸν', 'ζωὴν']]
    }]
  },
  methods: {
    getPassage: function() {
      return this.passages[this.currentPassageIndex].passage.split(' ');
    },
    getQuestion: function() {
      return this.passages[this.currentPassageIndex].questions[this.currentQuestionIndex];
    },
    getAnswers: function() {
      return this.passages[this.currentPassageIndex].answers[this.currentQuestionIndex];
    },
    nextQuestion: function() {
      this.status = '';
      this.errorMessage = '';
      this.selectedWords = [];
      if (this.passages[this.currentPassageIndex].questions.length === this.currentQuestionIndex) {
        this.nextPassage();
      } else {
        this.currentQuestionIndex++;
      }
    },
    nextPassage: function() {
      this.currentQuestionIndex = 0;
      this.currentPassageIndex++;
    },
    checkAnswers: function() {
      answers = this.getAnswers().slice(0);
      for (var i = this.selectedWords.length - 1; i >= 0; i--) {
        if (answers.indexOf(this.selectedWords[i]) !== -1) {
          answers.splice(answers.indexOf(this.selectedWords[i]), 1);
        } else {
          this.status = 'incorrect';
          this.errorMessage = 'The word "' + this.selectedWords[i] + '" is not one of the answers.';
          return;
        }
      }

      if (answers.length > 0) {
        this.status = 'incorrect';
        this.errorMessage = 'You are missing ' + answers.length + ' word(s).';
      } else {
        this.status = 'correct';
      }
    },
    removeWord: function(word) {
      if (this.selectedWords.indexOf(word) !== -1) {
        this.selectedWords.splice(this.selectedWords.indexOf(word), 1);
      }
    },
  },
  filters: {
    titleCase: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
});
