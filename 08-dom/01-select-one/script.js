/* becode/javascript
 *
 * /08-dom/01-select-one/script.js - 8.1: sélection par id
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



/* Sélectionne la balise dont l'id est "target": remplace son contenu par "owned". */

(() => {

    document.getElementById("target").innerHTML = "owned";
    /* document.getElementById("target").innerText = "owned"; */
    /* Peut être plus approprié si il ne s'agit que du texte */

})();