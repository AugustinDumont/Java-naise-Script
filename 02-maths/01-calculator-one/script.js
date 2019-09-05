/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        let premierNbre = new Number(document.getElementById("op-one").value);
        let deuxiemeNbre = new Number(document.getElementById("op-two").value);
        let addition = premierNbre + deuxiemeNbre;
        alert(addition);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        let premierNbre = new Number(document.getElementById("op-one").value);
        let deuxiemeNbre = new Number(document.getElementById("op-two").value);
        let soustraction = premierNbre - deuxiemeNbre;
        alert(soustraction);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let premierNbre = new Number(document.getElementById("op-one").value);
        let deuxiemeNbre = new Number(document.getElementById("op-two").value);
        let multiplication = premierNbre * deuxiemeNbre;
        alert(multiplication);
    });

    document.getElementById("division").addEventListener("click", () => {
        let premierNbre = new Number(document.getElementById("op-one").value);
        let deuxiemeNbre = new Number(document.getElementById("op-two").value);
        let division = premierNbre / deuxiemeNbre;
        alert(division);
    });
})();