/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let confirmation;

    do {
        let age = prompt("Quel est votre âge?");
        let sexe = prompt("Etes-vous un homme ou une femme?");
        let ville = prompt("De quelle ville provenez-vous?");
        let confirmation = confirm("Vous avez " + age + ". Vous êtes un(e) " + sexe + ". Vous venez de " + ville + ". Confirmez-vous ces informations?");
    }

    while (confirmation === false);

})();