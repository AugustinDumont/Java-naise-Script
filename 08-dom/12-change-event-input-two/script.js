/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let input = document.getElementById('pass-one');
    let validity = document.getElementById('validity');
    let minLength = 8;
    let hasTwoDigits = /\d.*\d/; // Expression régulière (RegEx)  MATTER TUTORIEL PHP OPENCLASSROOM SUR RegEX

    input.oninput = () => {
        if (input.value.length >= minLength && hasTwoDigits.test(input.value)) {
            validity.innerHTML = 'ok';
        } else validity.innerHTML = 'Pas ok';
    };
})();

/* aller voir sur RegX Online */