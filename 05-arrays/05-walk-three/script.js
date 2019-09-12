/* becode/javascript
 *
 * /05-arrays/05-walk-three/script.js - 5.5: parcours de tableau (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = [{
            firstname: "Garald",
            lastname: "Freschi",
            email: "gfreschi0@discuz.net",
        },
        {
            firstname: "Bendicty",
            lastname: "Foster-Smith",
            email: "bfostersmith1@mysql.com",
        },
        {
            firstname: "Michelle",
            lastname: "Draude",
            email: "mdraude2@csmonitor.com",
        },
        {
            firstname: "Cathee",
            lastname: "Meineck",
            email: "cmeineck3@t-online.de",
        },
        {
            firstname: "Marianna",
            lastname: "Coal",
            email: "mcoal4@creativecommons.org",
        },
    ];

    document.getElementById("run").addEventListener("click", () => {


        people.forEach((d) => {
                                            /* Dans cet exercce, j'utilise une fonction fléchée, je ne suis pas obligé de réécrire "function". Le paramètre "d" pourrait être remplacé par n'importe quelle autre appellation. Il se réfère au "people.forEach"  */
            console.log(d.lastname);        /*   et permettra de le réutiliser" */
        });


    });



})();