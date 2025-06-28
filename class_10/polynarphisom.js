class Animal {
    constructor(name) {
        this.name = name;
    }

    eats() {
        console.log(this.name + "eats food");
    }
    }

    class Aligator extends Animal {
        eats() {
            super.eats();
            console.log(this.name + "eats fishes");
        }
    }

    var murphy = new Aligator ("murphy");
    murphy.eats();

   class payment {
    constructor() {
        this.amount = amount ;

    }
    pay() {
        return `paid ${this.amount} in cash `
    }
   }


    