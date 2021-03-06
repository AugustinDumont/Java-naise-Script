/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let target = document.getElementById('target');
    let tableau = document.createElement('table');

    tableau.setAttribute("style", "border:2px");

    target.appendChild(tableau);


    for (let i = 1; i <= 10; i++) {
        /* boucle for de 10 */
        let row = document.createElement('tr'); /* on déclare la variable row = création de rangée */
        row.innerHTML = 10 * (i); /*à chaque tour de boucle on ajoute une rangée qu'on modifie directement par la multiplication *10  */
        tableau.appendChild(row); /* on attribue la "noeud" rangée ajouté dans le html au "noeud" tableau */
    }
})();

/* Il existe aussi l'utilsation de la fonction "insertRow() et "insertCell() */

