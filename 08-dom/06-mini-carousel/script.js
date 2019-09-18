/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];



    let img = document.getElementsByTagName('img')[0]; /* variable img = première img dont le tag est img */
    let i = 0;

    // au clic, on augmente l'incrémenteur de 1. 

    document.getElementById('next').addEventListener("click", () => {


        // revenir première photo une fois qu'elles ont toutes défilé

        if (i >= gallery.length) {
            i = 0;
        }
        i++;

        // faire varier les sources de l'image en fonction du tableau gallery
        img.src = gallery[i];
    });

})();