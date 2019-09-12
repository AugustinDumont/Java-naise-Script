/* becode/javascript
 *
 * /05-arrays/06-find-in-array/script.js - 5.6: recherche dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = [{
            firstname: "Bradford",
            lastname: "Coldbath",
            email: "bcoldbath0@wired.com",
        },
        {
            firstname: "Nadiya",
            lastname: "Stendell",
            email: "nstendell1@nsw.gov.au",
        },
        {
            firstname: "Auroora",
            lastname: "Stapford",
            email: "astapford2@wsj.com",
        },
        {
            firstname: "Berkley",
            lastname: "McKall",
            email: "bmckall3@about.me",
        },
        {
            firstname: "Wolf",
            lastname: "McCurley",
            email: "wmccurley4@yale.edu",
        },
        {
            firstname: "Jorrie",
            lastname: "Canedo",
            email: "jcanedo5@engadget.com",
        },
        {
            firstname: "Bethanne",
            lastname: "Ackred",
            email: "backred6@imgur.com",
        },
        {
            firstname: "Zorah",
            lastname: "Whild",
            email: "zwhild7@sogou.com",
        },
        {
            firstname: "Jean",
            lastname: "Dupont",
            email: "jdupont@elpais.com",
        },
        {
            firstname: "Zulema",
            lastname: "Ericsson",
            email: "zericsson9@ed.gov",
        },
        {
            firstname: "Brady",
            lastname: "Scrannage",
            email: "bscrannagea@google.fr",
        },
        {
            firstname: "Isidore",
            lastname: "Korf",
            email: "ikorfb@google.com",
        },
        {
            firstname: "Bartholomew",
            lastname: "Stockbridge",
            email: "bstockbridgec@is.gd",
        },
        {
            firstname: "Laney",
            lastname: "O' Mara",
            email: "lomarad@forbes.com",
        },
        {
            firstname: "Gabe",
            lastname: "Keatch",
            email: "gkeatche@google.fr",
        },
    ];

    document.getElementById("run").addEventListener("click", () => {
        console.log("click");

        people.forEach((person, index) => {
            /*  Je lance ma fonction people.forEach avec les paramètres "person" (que je crée) et "index" (qui existe de base). */
            if (
                person.firstname.toLowerCase() === "jean" && person.lastname.toLowerCase() === "dupont" /* je lance ma condition en réutilisant le paramètre person pour rechercher .firstname et .lastname. J'utilise toLowercase pour éviter tout problème de synthaxe.  */
            ) {
                console.log(person.email);
                console.log(index);
            }
        });
    });
})();




/* for (let i = 0; i < people.length; i++) {                Je lance une boucle qui démare de l'index 0 jusqu'à la la fin du tableau. Un élement = people[i] = premeir index du tableau people = à chaque fois 3 valeurs.
    if (
      people[i].firstname.toLowerCase() === 'jean' &&       J'ajoute ma condition en atteignant en désignant les . firstname et lastname de chaque élément par people[i] ou i = index. 
      people[i].lastname.toLowerCase() === 'dupont'
    ) {
      console.log(people[i].email);
      console.log(i);
    }
  } */