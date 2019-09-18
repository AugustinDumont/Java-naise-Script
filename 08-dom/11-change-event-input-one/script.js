/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let input = document.getElementById("pass-one");

  input.oninput = () => {
    document.getElementById("counter").innerHTML = input.value.length + "/10";
    input.value = input.value.substr(0, 9);
  };
})();

/* problème : la fonction est appelée à chaque input...  = perte d'efficience */