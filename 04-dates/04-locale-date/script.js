/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let date = new Date();
    let heures = date.getHours();
    let minutes = date.getMinutes();
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    document.getElementById("target").innerHTML = date.toLocaleDateString('fr-CA', options) + ", " + heures + "h" + minutes;
})();