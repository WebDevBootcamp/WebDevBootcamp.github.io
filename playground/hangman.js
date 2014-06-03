    
      

function Hangman(options){
  
  this.options = $.extend({
    words: 'enable2k.txt'
  }, options);

  this.message = $(this.options.message);
  this.turns_el = $(this.options.turns);
  this.turns_settings = $(this.options.turn_count);
  this.letters_el = $(this.options.letters);
  this.guesses = $(this.options.guesses);
  
  this._getWords();
  this.attach();
}

Hangman.prototype = {
  
  play: function(){
    this.reset();
    this.generate();
  },
  
  _getWords: function(){
    var self = this;
    
    if(Array.isArray(this.options.words)){
      this._filter(this.options.words)
    } else {
      $.get(this.options.words, function(data){
        self._filter(Array.isArray(data) ? data : data.split("\n"));
      })
    }
  },
  
  _filter: function(words){
    var self = this;
    
    this.words = words;
    
    // custom filter function
    if(typeof this.options.filter === 'function'){
      this.words = this.words.filter(this.options.filter);
    }
    
    // min word length filter
    if(typeof this.options.min_len === 'number') {
      this.words = this.words.filter(function(word){
        return (word.length >= self.options.min_len)
      })
    }
    
    // max word length filter
    if(typeof this.options.max_len === 'number'){
      this.words = this.words.filter(function(word){
        return (word.length <= self.options.max_len)
      })
    }
  },
  
  attach: function(){
    var self = this;
    
    this.guesses.on('click', '.letter', function(){
      if(self.over) return;
      var element = $(this);
      if(element.hasClass('selected')) return;
      self.guess(element.data('letter'));
      element.addClass('selected');
    })
    
  },
  
  reset: function(){
    this.over = false;
    this.turns = parseInt(this.turns_settings.val());
    this.message.html('Turns Left');
    this.turns_el.text(this.turns);
    this.letters_el.empty();
    this.guesses.empty();
  },
  
  generate: function(){
    var self = this;
    
    this.word = this.words[Math.floor(Math.random() * this.words.length)];

    this.letters = this.word.split('').map(function(letter){
      return new Letter(letter, self.letter_el);
    });
    
    for(var i=97; i <= 122; i++){
      var letter = String.fromCharCode(i);
      $('<span data-letter="'+letter+'">'+ letter + '</span>')
        .addClass('letter')
        .appendTo(this.guesses);
    }
    
  },
  
  guess: function(char){

    var match = 0
      , total = 0;
    
    // look for matches and handle
    this.letters.forEach(function(letter){
      if(letter.char == char){
        letter.found();
        match++;
      }
      if(letter.matched) total++;
    });
    
    if(total == this.letters.length){
      this.won();
    } else if(!match) {
      if(--this.turns <= 0) return this.gameover();
      this.turns_el.text(this.turns);
    }
    
  },
  
  won: function(){
    this.over = true;
    this.message.html("You Win");
    this.turns_el.text("");
  },
  
  gameover: function(){
    this.over = true;
    this.message.html("Game Over");
    this.turns_el.text("");
    
    this.letters.forEach(function(letter){
      if(!letter.matched) letter.found("missed");
    })
  }
  
}


function Letter(letter, parent){
  this.char = letter;
  this.matched = false;
  
  this.el = $('<span>&nbsp;</span>')
    .addClass('letter')
    .appendTo('#letters');
}

Letter.prototype.found = function(cls){
  this.matched = true;
  this.el.text(this.char);
  if(cls) this.el.addClass(cls);
}

