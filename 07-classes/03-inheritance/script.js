/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
            /* Obligation du return pour pouvoir utiliser la fonction sayHello dans les instaces */
        }
        constructor(name) {
            /* Tous les animaux ont un nom */
            this.name = name;
        }
    }

    class Cat extends Animal {
        static greeting = "Miaaaaaaaouw mia miaouuuuw"; /* Tous les Cat sont des Animal. Static greeting, tous les Cat ont un greeting, et quel que soit le cat, c'est toujorus mia mia miaou. Le greeting est static */
        constructor(name, raceCat) {
            super(name);
            /* super() renvoi aux constructeurs de la class Animal */
            /* Tous les chats ont un nom, mais un nom différent */
            this.raceCat = raceCat; /* receCat n'appartient que à Cat */
        }
    }

    class Dog extends Animal {
        static greeting = "Wouf wouf wouf ahouuuuuuu";
        constructor(name) {
            super(name);

        }
    }

    document.getElementById("run").addEventListener("click", () => {
        const subCat = new Cat("Philipine");
        const subDog = new Dog("Saky");

        console.log(subCat.sayHello());
        console.log(subDog.sayHello());
    });


})();