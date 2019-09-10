import { DH_NOT_SUITABLE_GENERATOR } from "constants";

/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];

    function getFriday() {
        let year = document.getElementById("year").value;

        let lesfriday = []; /* ou new Array() */

        for (let i = 0; i < 12; i++) {
            let date = new Date(year, i, 13);
            console.log(date);
            if (date.getDay() == 5) {
                lesfriday.push(mois[i]);
                console.log(i + 1);
            }
        }
        console.log(lesfriday);

        alert("L'année " + year + " contient des vendredi 13 durant les mois de " + lesfriday.join("-"));

    }

    document.getElementById("run").addEventListener("click", () => {
        getFriday();
    });


})();

/* 1. Je reprends mon élément "run" que j'active au Clic. 
2. Je lui attache la fonction getFrifay, que je vais appeler et définir par la suite  .
3. Je définis ma fonction getFriday
4. Je définis let year, qui va correspondre à l'année qui sera encodée avant d'être transmise. 

Raisonnement

Je vais sortir tous les 13 de chaque mois de l'année en question, il y en aura 12. 

5. Je crée une boucle qui va tourner 12 fois avec i = le mois comme variable. 
Je la fais tourner dans ma fonction new Date à laquelle j'ai attaché les paramètres "year", i (mois) et 13. Ces paremètres s'inscrivent dans cet ordre  . 

Ensuite je dois savoir s'il 'agit d'un vendredi. 

6. J'utilise la fonction getDay(). Elle transforme chaque jour de la semaine par un numéro et vendredi est le 5. 

Donc , 

'ai tous les 13 de chaque mois qui sortent, et si le 13 de chaque mois tombe un 5, on le met de coté. 

7. Je crée un tableau const mois (avec tout les mois en français). Chaque mois correspond au i qu'on a introduit dans la boucle précédemment. 
Je push dans le teableau lesFriday les mois qui sortent suite aux conditions de la boucle. Cependant, ils auront une valeur index que je peux
traduire en valeur string, grâce à la fonction .join("-").  */