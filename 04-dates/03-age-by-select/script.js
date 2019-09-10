/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

/* Définir la date du jour */

    let date = new Date();

    let todayYear = date.getFullYear();
    console.log(todayYear);
    let todayMonth = date.getMonth();
    console.log(todayMonth);
    let todayDay = date.getDay();
    console.log(todayDay);

  /*   Définir la date de l'utilisateur */

    let annees = document.getElementById("dob-year").value;
    console.log(annees);
    let mois = document.getElementById("dob-month").value;
    console.log(mois);
    let jours = document.getElementById("dob-day").value;
    console.log(jours);


    document.getElementById("run").addEventListener("click", () => {
        alert("Vous avez " + (todayYear - annees) + " ans; " + (todayMonth - mois) + "mois; " + (todayDay - jours) + " jours.");
    });

})();