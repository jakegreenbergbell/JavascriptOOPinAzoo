class Animal {

    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;

    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }

    eat(food) {
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!! " + this.name + " wants more " + this.favoriteFood) : this.sleep();
    }

    static getPopulation() {
        return animalPopulation;
    }

}

class Tiger extends Animal{
    constructor(name) {
        super(name, "meat");
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }
}

class Bear extends Animal{
    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");

    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name, "marshmallow");
    }
    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super(name, "leaves");
    }

    eat(food) {
        if (food == this.favoriteFood) {
            super.eat("leaves");
            this.sleep();
        } else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

class Bee extends Animal {
    constructor(name) {
        super(name, "pollen");
    }

    sleep() {
        console.log(this.name + " never sleeps");
    }


    eat(food) {
        if (food == this.favoriteFood) {
            console.log(this.name + " eats " + food);
            console.log("YUM!! " + this.name + " wants more " + this.favoriteFood);
        } else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

class Zookeeper {
    constructor(name){
        this.name = name;
    }

    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length +" of " + animalPopulation + " total animals");
        for(var i =0; i<animals.length; i++){
            animals[i].eat(food);
        }
        console.log(animalPopulation);
    }
}

animalPopulation = 0;

let run = () =>{
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallow");
    rarity.sleep();
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    var stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    stinger.sleep();
    var animals = [tigger, pooh, rarity, gemma, stinger];
    var zoebot = new Zookeeper("Zoebot");
    zoebot.feedAnimals(animals, "Gordo's suuuper burrrito");
};






// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }
//
// class Polygon extends Shape{
//
//     constructor(height, width) {
//         super('Polygon');
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//
//     //method #1
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     //method #2
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }
// let sleep = (name) => {
//     console.log(name + " sleeps for 8 hours");
// };
//
//
// let eat = (name, food) => {
//     console.log(name + " eats " + food);
//     favoriteFood == food ? console.log("YUM!! " + name + " wants more" + food) : sleep(name);
// };
//
// eat("Tigger", "meat");
// eat("Tigger", "bacon");

//
// let p1 = new Polygon(20, 40);
// let p2 = new Polygon(100, 200);
// p1.sayName();
// p2.sayHistory();
//
// let favoriteFood = "bacon";