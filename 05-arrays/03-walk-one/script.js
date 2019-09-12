/* becode/javascript
 *
 * /05-arrays/03-walk-one/script.js - 5.3: parcours de tableau (1)
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

    let x = 0;   /* Je crée une variable pour référencer mon index x = 0 = premier élément de mon tableau */

    function boucleFor() {
        for (let i = 0; i < fruits.length - 1; i++) {   /* Ma boucle ne sert qu'à dire que je parcours le tableau */
            console.log(fruits[x]);  /*  je réutilise ma variable x pour dire que j'affiche le premier élément et ensuite j'incrémente  */
            x++;
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        boucleFor();
    })
})();