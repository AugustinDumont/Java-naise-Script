/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
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
    heures = 17;

    let minutes = date.getMinutes();
    console.log(minutes);
    minutes = 29;

    if (heures > 16 && minutes > 29) {
        document.getElementById("target").innerHTML = "Bonsoir";
    } else {
        document.getElementById("target").innerHTML = "Bonjour";
    };
})();