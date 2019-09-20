/* becode/javascript
 *
 * /10-asynchronous/00-example/script.js - 10.0: exemple d'asynchronicité
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {
    const setupIntervalMessage = (label, delay) => {
        let count = 0;

        return setInterval(() => console.log(`${label}:`, ++count), delay);
    };

    let intervals = [];

    document.getElementById("run").addEventListener("click", () => {
        if (intervals.length) {
            /* condition sans condition = permet de faire tourner en boucle jusqu'à rencontrer un clearInterval??? */
            intervals = intervals.filter(clearInterval);
            console.clear();
        }

        intervals.push(setupIntervalMessage("one", 1000)); /* va appeler le label "one" toute les secondes jusqu'à réinitialisation */
        intervals.push(setupIntervalMessage("two", 1333));
        intervals.push(setupIntervalMessage("three", 2500));
        intervals.push(setupIntervalMessage("four", 5000));
        intervals.push(setupIntervalMessage("five", 10000));
    });
})();




/* 
Afficher l'heure et bloquer l'heure grâce à la fonction clearInterval(myVar);

<script>
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
  clearInterval(myVar);
}
</script> */


{
    /*
        Bar qui progresse : https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval_progressbar
        

        <script>
    function move() {
      var elem = document.getElementById("myBar");   
      var width = 10;
      var id = setInterval(frame, 100);
      function frame() {
        if (width == 100) {
          clearInterval(id);
        } else {
          width++; 
          elem.style.width = width + '%'; 
        }
      }
    }
    </script> */
}