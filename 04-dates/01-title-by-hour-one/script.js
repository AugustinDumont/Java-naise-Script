/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let date = new Date();
    /* new Date est une classe à partir de laquelle je peux appeler des méthodes comme date.getHours ou date.getMinutes */
    console.log(date);

    let heures = date.getHours();
    console.log(heures);
    /* heures = 19; */

    if (heures > 17) {
        document.getElementById("target").innerHTML = "Bonsoir";
    } else {
        document.getElementById("target").innerHTML = "Bonjour";
    };




})();



// to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
// your code here