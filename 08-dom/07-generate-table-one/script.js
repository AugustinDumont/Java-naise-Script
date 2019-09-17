/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let target = document.getElementById('target');
    let tableau = document.createElement('table');
    target.appendChild(tableau);


    for (let i = 1; i <= 10; i++) {
        /* boucle for de 10 */
        let row = document.createElement('tr'); /* on déclare la variable row = création de rangée */
        row.innerHTML = 'row ' + (i); /*à chaque tour de boucle on ajoute une rangée qu'on modifie directement par l'appellation row +(i)" */
        tableau.appendChild(row); /* on attribue la "noeud" rangée ajouté dans le html au "noeud" tableau */
    }
})();