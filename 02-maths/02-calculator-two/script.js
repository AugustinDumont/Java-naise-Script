/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }*/




(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let premierNbre = parseFloat(document.getElementById("op-one").value);
        let deuxiemeNbre = parseFloat(document.getElementById("op-two").value);
        /* parseFloat est approprié, car prend même les nombres décimaux */
        let resultat;

        switch (operation) {
            case "addition":
                resultat = (premierNbre) + (deuxiemeNbre);
                break;
            case "soustraction":
                resultat = (premierNbre) - (deuxiemeNbre);
                break;
            case "multiplication":
                resultat = (premierNbre) * (deuxiemeNbre);
                break;
            case "division":
                resultat = (premierNbre) / (deuxiemeNbre);
                break;
        }
        alert(resultat);
    };



    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();