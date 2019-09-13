/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];



    /* 
        let catDescription = []
        for (let i = 0; i < keys.length; i++) {
            catDescription.push([keys[i], values[i]]);
        }
        console.log(catDescription);
     */

    /* Cette première solution est la plus évidente. 
    => Je crée un tableau catDescription et à chaque passage de la boucle, j'y push un tableau comprenant keys[i] et values[i] */



    document.getElementById("run").addEventListener("click", () => {

        console.log(values.map((_, i) => [keys[i], _]));
        console.log(Object.fromEntries(values.map((_, i) => [keys[i], _])));


        /* Cette seconde solution semble tordue, mais elle permet de bien comprendre la fonction .map
        La fonction .map crée un nouveau tableau à partir d'un tableau déjà existant. 
        Elle utilise les paramètres item et index. 

        En français, notre fonction donne donc : 

        Nous allons appliquer la fonction .map au tableau values. 
        .map va boucler dans le tableau values. 
        Ce qui nous intéresse, ce sont les indexs du tableau values, car ils correspondent exactement à ceux du tableau keys. 
        Nous nous intéressons pas aux items, c'est pourquoi nous écrivons (_,i) ou _ remplace le paramère item arr[i] = values[1] 
        
        Nous voulons que notre output corresponde à un array [] avec dedans keys[i] et values[i] qui peut être remplacé par le "_". 

       console.log(values.map((_, i) => [keys[i], _])) /// Résultat ci-dessous : 
       
        (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]

0: (2) ["name", "Skitty"]
1: (2) ["species", "cat"]
2: (2) ["age", 9]
3: (2) ["gender", "female"]
4: (2) ["color", "tabby"]
length: 5
__proto__: Array(0)

    


console.log(Object.fromEntries(values.map((_, i) => [keys[i], _])));

transforme ce tableau avec 5 tableau dedans en 1 objet. 

        )
        
        */



    });

})();