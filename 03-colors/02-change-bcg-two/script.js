/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const body = document.querySelector("body"); /* On donne un nom "body" à l'élément HTML "body" afin de pouvoir l'utiliser */
    const changeColor = (X) => {   /*  On crée la fonction changeColor avec le paramètre X qu'on appellera plus tard. X sert à créer la fonction, rien de plus" */
        body.style.backgroundColor = X;
    };


    document.getElementById("run").addEventListener("click", () => {  /* Lorsqu'on click sur le run */
        let color = document.getElementById("color").value; /* la couleur de l'input */
        changeColor(color); /* la couleur de l'input est appelée dans la fonction changeColor. Elle remplace le "X". */ 
    });
})();