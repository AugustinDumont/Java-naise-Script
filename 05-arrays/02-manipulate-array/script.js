/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
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
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise"
  ];

  fruits.shift(); /* supprime le premier élément du tableau */
  console.log(fruits);
  fruits.pop(); /* supprime le dernier élément du tableau */
  console.log(fruits);
  fruits.unshift("banane"); /* ajoute un élément au début du tableau */
  console.log(fruits);
  fruits.push("kiwi"); /* ajoute un élément à la fin du tableau */
  console.log(fruits);
  fruits.splice(1, 5); /* supprime 5 éléments à partir de l'index 1 */
  console.log(fruits);
  let newFruits = fruits.slice(); /* fonction qui crée un nouveau tableau qui contient les éléments frutis */
  console.log(newFruits);


  function laTotal(e) {
    e.shift();
    e.pop();
    e.unshift("gâteau");
    return e;
  }

  console.log(laTotal(newFruits));






})();