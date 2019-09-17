/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const img = document.getElementsByTagName('img')[0]; /* on sélectionne la première image qui le tag img */

    img.addEventListener('mouseover', functionMouseOver); /* on ajoute un événement au survol, "mouseover" = nom de l'événement et functionMouseOver = nom de la fonction appelée lors de l'évnement */
    img.addEventListener('mouseout', functionMouseOut);

    let firstImg = img.src;

    function functionMouseOver() {
        img.src = img.getAttribute('data-hover')
    }

    function functionMouseOut() {
        img.src = firstImg;
    }
})();