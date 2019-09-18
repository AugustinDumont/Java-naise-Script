/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* (() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        name() {
            return `${this.firstname} ${this.lastname}`
        }
    };

    document.getElementById("run").addEventListener("click", () => {

        let gus = new Person("Augustin", "Dumont");
        console.log(gus.name());
    });
})(); */



/* Résultat : Augustin Dumont

Problème, on ne peut pas ajouter de valeur à l'objet (from the outside) de cette manière. 
Exemple, on ne peut pas écrire gus.name = "Augustin Dumont"

Problème, on fait appelle à une méthode, alors que l'objectif de parvenir à appeler une propriété qui agira comme une méthode
l'objectif est d'obtenir console.log(gus.name) au lieu de console.log(gus.name());

*/




(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            /* get (from the inside) permet d'utiliser la methode name() comme une propriété */
            return `${this.firstname} ${this.lastname}`
        }

        set name(value) {
            /* set (from the outside) va permettre d'envoyer vers l'objet. Nous sommes obligés d'utiliser un paramètre, que nous avons ici appeler "value". Value correspond à un "string" et à ce qui sera à droite de gus.fullName =("Augustin", "Dumont") */
            const fullName = value.split(" "); /* value.split va retourner un array qu'on appelle fullName dans lequel on retrouve deux éléments : firstname et lastname */
            this.firstname = fullName[0];
            this.lastname = fullName[1];
        }
    };

    document.getElementById("run").addEventListener("click", () => {

        /* GETTER */
        let gus = new Person("Augustin", "Dumont");
        console.log(gus.name); /* Grâce au GETTER, j'attribue directement firstname et latname à ma variable gus */

        /* SETTER */
        gus.name = "Gustave Dumont"; /* Grâce à SETTER, je modifie directement ma variable gus au niveau de l'objet */
        console.log(gus);
    });


})();





/* (() => {
 

  const run = () => {
    const person = new Person("Alessandro", "Aloisio");

    // GETTER
    console.log(person);
    console.log(person.name);

    // SETTER
    person.name = "Alicia Halleux";
    console.log(person);
    console.log(person.name);
  };

  document
    .getElementById("run")
    .addEventListener("click", () => (run(), false)); */