/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let url = "http://localhost:3000/heroes/";
    document.getElementById("run").addEventListener("click", async () => {
        let heroId = document.getElementById("hero-id").value.split(",").map(x => parseInt(x)); /* .split() transforme en tableau et sépare tous les éléments après la "," et parseInt() sur chacun des éléments ne récupère que le nombre entier (efface espace et autres) */
        await deleteHero(heroId); /* on attend que deleteHero soit ok, pour passer au GET */

        /////////////////////// GET
        let response = await fetch(url); /* on attend avoir récupéré les response pour le transformer en json() */
        let respResp = await response.json(); /* on attend d'avoir transformé response avant de le console.loger */
        console.log(respResp);
    });

    let deleteHero = function (heroId) {
        return new Promise((resolve, reject) => {
            /* on attache une promesse à la fonction deleteHero afin de pouvoir y inclure le counter vérifié "resolve" ou "reject" */
            try {
                let counter = 0;
                heroId.forEach(el => {
                    fetch((url + el), {
                        method: "DELETE"
                    }).then(_ => {
                        /* à chaque supression, on incrémente le counter */
                        counter++;
                        if (counter === heroId.length) {
                            /* c'est seulement quand le counter = heroId.length que deleteHero est effectué et qu'on peut passer au GET  */
                            resolve(true)
                        };
                    })
                });
            } catch (e) {
                reject(e);
            }
        });
    }
})();