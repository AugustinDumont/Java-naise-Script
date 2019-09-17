/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let target = document.getElementById('target');
    let source = document.getElementById('source');
    let link = source.getAttribute('data-image');
    let img = document.createElement('img');
    img.src = link;
    target.appendChild(img); /* = document.getElementById("target").appendChild(img) */
    source.parentNode.removeChild(source); /* on se situe sur l'élément parent grâce à l'id source et on supprime le noeud enfant du noeud qui contient l'id source */
})();

/* const element = document.getElementById("source");

  // Create img element
  const img = document.createElement("img");     /* on crée la nouvelle image */
/* img.src = element.dataset.image;      */
/* on attribue comme source à l'image l'attribut data-image grâce à data-set */

// Add img on dom
/* document.getElementById("target").appendChild(img); */
/* on ajoute un noeud avec notre constante img au noeud qui contient la balise "target" */

// Remove element
/* element.remove(); */