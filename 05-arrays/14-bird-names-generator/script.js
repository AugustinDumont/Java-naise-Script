/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [{
            name: "mouette",
            fem: true
        },
        {
            name: "corbeau"
        },
        {
            name: "mésange",
            fem: true
        },
        {
            name: "hibou"
        },
        {
            name: "buse",
            fem: true
        },
        {
            name: "pigeon"
        },
        {
            name: "pie",
            fem: true
        },
        {
            name: "vautour"
        },
        {
            name: "faucon"
        },
        {
            name: "rouge-gorge"
        },
        {
            name: "tourterelle",
            fem: true
        },
        {
            name: "corneille",
            fem: true
        },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById('run').addEventListener("click", () => {
        let resultat = document.getElementById('target');
        let oiseauX = birds[Math.floor(Math.random() * birds.length)];
        let adjX = getadjX(adjectives);
        if (oiseauX.fem) resultat.innerHTML = "La " + oiseauX.name + " " + adjX + "e";
        else resultat.innerHTML = "Le " + oiseauX.name + " " + adjX;

        /*  avec langage Template String et ancienne écriture de la condition: 

        if (oiseauX.fem){
            resultat.innerHTML = `La ${oiseauX.name} ${adjX}e`;
            else resultat.innerHTML = `Le ${oiseauX} ${adjXj}`;
        }
 */

    });

    function getadjX(adjectives) {
        let adjectifs = Array.from(adjectives);
        return adjectifs[Math.floor(Math.random() * adjectifs.length)];
    }


})();

/* A l'énoncé de cet exercice, de quoi je vais avoir besoin ?  */

/* - Du run = document.getElementById("run").addEventListener("click",()=>{}); */

/* - Du "target", càd, là ou je vais faire apparaître mon résultat dans le HTML, seulement quand mon nom d'oiseau et son adj auront aléatoirement été choisis.
        => resultat = document.getElementById('target')
        => Une fois le nom et l'adj aléatoirement sélectionnés => utilisation de la fonction resultat.innerHTML */

/* Sélection d'un nom d'oiseau aléatoire dans le tableau birds 
        => let oiseauX = birds[Math.floor(Math.random() * birds.length)];    Math.floor s'ajoute à Math.random, car le multiplicateur = taille du tableau > 1*/

/*  Sélection d'un adjectif aléatoire dans le Set adjectives  = création de fonction
        => transformer le Set en Array
        => on remplace le "Set adjectives" par le "Array adjectifs". 
        => on le return; car on le réutilisera par la suite
        => on applique le Math.random comme pour les noms d'oiseau
        => let adjX = getadjX(adjectives);
*/

/*  CONDITION 

Si oiseauX.fem    (.fem = valeur attaché a certains items oiseau) est vérifié vrai alors resultat.innerHTML = accordé au féminin
Si oiseauX alors resultat.innerHTML accordé au masculin  =*/