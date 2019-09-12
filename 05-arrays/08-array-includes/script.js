/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById('run').addEventListener("click", () => {
        console.log("Le fruits pomme " + (fruits.includes('pomme') ? 'est ' : ' n est pas') + "dans la liste. ");
    });
})();

/* La fonction "includes" se rapporte à une valeur de type boléen : true ; false que l'on peut remplacer par ce que l'on souhaite. 
Il suffit de rajouter les deux propositions antagonistes à la suite de la fonction.  */


/*  AUTRE EXEMPLE 

var sentence = 'The quick brown fox jumps over the lazy dog.';

var word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence" */