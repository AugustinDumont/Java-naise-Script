/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById('run').addEventListener("click", () => {

        /*  console.log(new Set(fruits)); */
        /* valeurs stockées dans Set; on ne peut retrouver plusieurs fois la même valeur dans Set*/
        /*  console.log(Array.from(new Set(fruits))); */
        /*  valeurs stockées dans Array */


        /* The biggest difference between an Array & Set is that Arrays can have duplicate values whereas Sets cannot. The other big difference is that data in an array is ordered by index whereas Sets use keys & the elements are iterable in the order of insertion. */



        let newArray = [...fruits];
        console.log(newArray);

        newArray = fruits.filter((fruit, index) => fruits.indexOf(fruit) >= index);
        console.log(newArray);

        /* la fonction filtre va boucler dans le tableau fruits. On s'intéresse à chacun des items qu'on appelle fruit et à l'index */
        /*  la boucle va agir sur l'indexOf... On va prendre chaque fruit, et comparer l'index de chaque fruit avec l'index du premier même fruit dans le tableau, car indexOf fait ressortir le premier index de l'item en question.*/

    });

})();