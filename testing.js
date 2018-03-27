// const deck = require('./deckOfCards.js')
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.deck = [];
        this.resetDeck = function () {
            let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
            let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
            for (let suit in suits) {
                for (let val in values) {
                    this.deck.push(new Card(suits[suit], values[val]))
                }
            }
        }
        this.resetDeck();
    }

    shuffle() {
        for (let card in this.deck) {
            let num = Math.floor(Math.random() * this.deck.length);
            let temp = this.deck[card];
            this.deck[card] = this.deck[num];
            this.deck[num] = temp;

        }
    }

    deal() {
        let num = Math.floor(Math.random() * this.deck.length);
        let card = this.deck[num];
        this.deck.splice(num, 1);
        return card;
    }

}

class Person {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    add(card) {
        this.hand.push(card)
    }

    discard(card) {
        var idx = this.hand.indexOf(card);
        if(idx != -1){
            this.splice(idx, 1);
        }
    }

    empty(){
        this.hand = [];
    }

    checkWin(game, value){
        return game.checkWin(this.name, value)

    }

    askPlayer(player, rank, game){
        let found = false;
        for(var i = 0;i < player.hand.length; i++){
            if(player.hand[i].value == rank){
                found = true;
                this.hand.push(player.hand.splice(i,1)[0]);
                i--;
            }
        }
        if(found === false){
            this.hand.push(game.dealOne());
            console.log("GO FISH");
        }else{
            console.log("HERE YOU GO :(");
        }
    }

}

class GoFish{
    constructor(){
        this.players = [];
        this.deck = new Deck();
        this.deck.shuffle();
    }

    restart(){
        this.players = [];
        this.deck = new Deck();
        this.deck.shuffle();
    }

    add(player){
        this.players.push(player);
    }

    deal(){
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < this.players.length; j++){
                this.players[j].add(this.deck.deal());
            }
        }
    }

    dealOne(){
        return this.deck.deal();
    }

    restartWithPlayers(){
        this.deck = new Deck();
        this.deck.shuffle();
        for (let j = 0; j < this.players.length; j++) {
            this.players[j].empty();
        }
        this.deal();
    }

    checkWin(name, value){
        console.log(name);
        var idx;
        for(var i =0; i < this.players.length; i++){
            if(this.players[i].name = name){
                idx = i;
            }
        }
        console.log(this.players[idx])
        let count = 0;
        for(var j =0; j < this.players[idx].hand.length; j++){
            if(this.players[idx].hand[j].value == value){
                count ++;
                
            }
        }
        console.log(count);
        if(count > 3){
            console.log("Winner");
            return this.players[idx];
        }else{
            console.log("False winner. Try again.")
            return false;
        }
    }

}

var p1 = new Person('bob');
var p2 = new Person('joe');

var g = new GoFish();

g.add(p1);
g.add(p2);
g.deal();

// console.log(g1.deck, g1.players);

// console.log(p1.hand);
// console.log(p2.hand);

// p1.checkWin(g1, '9')

// p2.askPlayer(p1, 'A', g1);

// console.log('First player has', p1.hand);
// console.log('Second player has', p2.hand);