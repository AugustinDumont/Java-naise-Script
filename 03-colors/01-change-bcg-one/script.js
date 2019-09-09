/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("red").addEventListener("click", () => {
        document.body.style.backgroundColor = "red";
    });

    document.getElementById("green").addEventListener("click", () => {
        document.body.style.backgroundColor = "green";
    });

    document.getElementById("yellow").addEventListener("click", () => {
        /* Dans cet exemple, au click on apelle la fonction qui est directement définie = fonction flechée */
        document.body.style.backgroundColor = "yellow";
    });

    document.getElementById("blue").addEventListener("click", () => {
        document.body.style.backgroundColor = "blue";
    });


})();

/* Pour cet exercice, utiliser le document.getElementById(" ").addEventListener("click",()=>{});  

Il faut regarder la doc sur ce addEventListener et fonction flechée

exemple :

let p1 = document.querySelector('p');
p1.addEventListener('click', changeTexte);   Dans cet exemple, au click, on appelle la fonction "changeTexte qu'on définit après"

function changeTexte(){
    this.innerHTML ='<strong>Bravo !</strong>';
    this.style.color = 'orange';
}


*/