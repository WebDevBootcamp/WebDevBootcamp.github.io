  var words = wordlists.filter(function(word){ 
    if(word.length > 6 && word.length < 14) return true; 
    else return false 
  });
   
$(function(){

  var game = new Hangman();
  
  $('#new_game').on('click', function(){
      game.play();
  })
  
  
})      
      

function Hangman(){

  this.message = $('#moves h4');
  this.turns_el = $('#turns');
  this.letters_el = $('#letters');
  this.guesses = $('#guesses');
  
  this.attach();
}

Hangman.prototype = {
  
  play: function(){
    this.reset();
    this.generate();
  },
  
  attach: function(){
    var self = this;
    
    this.guesses.on('click', '.letter', function(){
      var element = $(this);
      if(element.hasClass('selected')) return;
      self.guess(element.data('letter'));
      element.addClass('selected');
    })
    
  },
  
  reset: function(){
    this.turns = 6;
    this.message.html('Turns Left');
    this.turns_el.text(this.turns);
    this.letters_el.empty();
    this.guesses.empty();
  },
  
  generate: function(){
    var self = this;
    this.word = words[Math.floor(Math.random() * words.length)];
    
    this.word = "score";
    
    var letters = this.word.split('');
    
    this.letters = letters.map(function(letter){
      return new Letter(letter, self.letter_el);
    });
    
    
    for(var i=97; i <= 122; i++){
      var letter = String.fromCharCode(i);
      $('<span data-letter="'+letter+'">'+ letter + '</span>')
        .addClass('letter')
        .appendTo(this.guesses);
    }
    
  },
  
  guess: function(letter){

    if(this.letters.some(function(l){
      if(l.letter != letter) return false;
      l.found();
      return true
    })) {
      if(this.letters.every(function(l){
        return l.matched
      })) {
        this.message.html("You Win");
        this.turns_el.text("");
      }
    } else {
      this.turns--;
      if(this.turns <= 0) return this.gameover();
      
      this.turns_el.text(this.turns); 
    }
  },
  
  gameover: function(){
    this.message.html("Game Over");
    this.turns_el.text("");
    
    this.letters.forEach(function(letter){
      letter.found();
    })
  }
  
}


function Letter(letter, parent){
  this.letter = letter;
  this.matched = false;
  
  this.el = $('<span>&nbsp;</span>')
    .addClass('letter')
    .appendTo('#letters');
}

Letter.prototype.found = function(){
  this.matched = true;
  this.el.text(this.letter);
}

