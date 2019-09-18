/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {




    /* Création de la classe Error avec le constructeur message et le getter errorMessage (à utiliser par les incendances en tant que simple propriété et non une fonction) */

    const passwordOne = document.getElementById('pass-one'); /* on décalre le getElementby ic, pour éviter de le charger à chaque clic*/
    const passwordTwo = document.getElementById('pass-two');

    document.getElementById('run').addEventListener("click", () => {



        /* Par défaut, on attribue un remove de la class error dans le html. Si l'élément, n'a pas de classe Error, on ne lui retire donc rien. Cela permet à l'utilisateur que lorsqu'il se trompe et se reconnecte ensuite, l'élément n'est plus attribué à la classe Error
        Par la suite, il suffit d'attribuer un code en CSS à la class .error */


        if ((passwordOne.value === '' && passwordTwo.value === '') || passwordOne.value !== passwordTwo.value) {  /* on utilise le value seulement ici */
            passwordOne.classList.add("error");
            passwordTwo.classList.add("error");

        } else {
            passwordOne.classList.remove("error");
            passwordTwo.classList.remove("error");
        }

    });

})();