// set the stage by initializing a list of all suits and card names:
const cardList = ['Ace',"Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
const suitList = ['Hearts','Diamonds','Spades','Clubs'];

class Card {
    constructor(suit, value) {

        // assign suit with validation
        this.suit = suit.charAt(0).toUpperCase() + suit.slice(1);
        console.log((this.suit in suitList))    //<==== don't understand why this does not work
        console.log(typeof this.suit+" - "+this.suit);
        console.log(typeof suitList[2]+" - "+suitList[2]);
        
        if (!(this.suit === "Hearts" || this.suit === "Diamonds" || this.suit === "Spades" || this.suit === "Clubs")) {
            throw "Choose a valid suit, example Hearts, Diamonds, Spades or Clubs"
        }


        
        // assign value with validation
        if (!(value >=0 && value <=13)) {
            console.log('Please enter a numeric value and if you want and if you want an Ace, type 1; for Jack, type 11, for Queen, type 12, for King, type 13.')
        } else 
            this.value = value;
        // assign name with a function
        this.name = this.cardName(value);

    };

    // name card from its value        
    cardName(value) {
        for (let [index,name] of cardList.entries()) {
            if (index + 1 === value) {
                return name
            };
        }; 
    };
    // print card attributes to console
    showCard() {
        // console.log(`${this.name} of ${this.suit}`);
    };
};

const card1 = new Card("spades",4);
card1.showCard();
// const card2 = new Card("Hearts",6)
// card2.showCard();
