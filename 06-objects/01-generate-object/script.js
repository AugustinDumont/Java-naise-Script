/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener("click", () => {
        let persona = {
            firstname: "Anita",
            lastname: "Bundanochao",
            age: "31",
            city: "Rio de Janeiro",
            country: "Brasil"
        };
        console.table(persona);
    });

})();

/* On sépare les propriétés de l'objet par des virgules */