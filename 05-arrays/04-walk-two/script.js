/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: parcours de tableau (2)
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

    document.getElementById("run").addEventListener("click", () => {
        fruits.forEach(function (item, index, array) {
                                                /* forEach(function(item,index,array{console.log(item, index, array))) càd, on fait tourner la boucler dans les items, les index et le array */
            console.log(item, index, array);    /* item = nom du fruits / index = numéro / array = tout le tableau auquel il appartient */
        });

    })
})();

/* ou

document.getElementById("run").addEventListener("click", () => {
    fruits.forEach(function (fruit) {    /* je fais passer ma boucle dans chaque élement du tableau que je nomme fruit et je fais le console.log de fruit */                         
 /*        console.log(fruit);    
    });

}) */ 