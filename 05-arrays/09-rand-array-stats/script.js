/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  SOURYA


(() => {
    document.getElementById("run").addEventListener("click", () => {
    let tableau = [];
    for (let i = 1; i <= 10; i++) {
    nombre = Math.floor(Math.random() * 100);
    document.getElementById("n-" + i).innerHTML = nombre;
    tableau.push(nombre);
    }
    
    document.getElementById("min").innerHTML = Math.min(...tableau);
    document.getElementById("max").innerHTML = Math.max(...tableau);
    document.getElementById("sum").innerHTML = tableau.reduce((a, b) => a + b,0);
    document.getElementById("average").innerHTML =tableau.reduce((a, b) => a + b, 0) / tableau.length;
    }); 
    
    })(); */







/*  ALESS


(() => {
      const run = () => {
        const table = Array.from(document.querySelectorAll("table td"));
    
        let numbers = [],
          sum = 0;
    
        // GET RANDOM ARRAY
        for (let i = 0; i < table.length; i++) {
          const number = Math.floor(Math.random() * 100);
          numbers.push(number);
          sum += number;                  Somme générée lors de la création du tableau. A chaque nombre aléatoires créés, ils sont ajoutés dans la variable sum. 
        }
    
        // Add numbers to table
        for (let i = 0; i < table.length; i++) {   Ajout dans le HTML = 10 tables du HTML se transforme par les 10 nombres
          table[i].innerHTML = numbers[i];
        }
    
        // AVG, MIN, MAX, SUM
        document.getElementById("min").innerHTML = Math.min(...numbers);
        document.getElementById("max").innerHTML = Math.max(...numbers);
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = sum / numbers.length;
      };
    
      document
        .getElementById("run")
        .addEventListener("click", () => (run(), false));
    })(); */


(() => {


  document.getElementById('run').addEventListener("click", () => {

    let arr = randomNumbersArray();
    insertNumberIntoHtml(arr);
    document.getElementById('min').innerHTML = nbrMin(arr);
    document.getElementById('max').innerHTML = nbrMax(arr);
    let sum = nbrSum(arr);
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('average').innerHTML = nbrAvg(arr, sum);
  });


  /* 1 */

  const randomNumbersArray = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
  };

  /* 2 */


  /* Ancienne écriture où Math.min doit être retourné */
  const nbrMin = (arr) => {
    return Math.min(...arr);
  };



  /* Nouvelle écriture où Math.max est directement retourné */
  const nbrMax = (arr) => Math.max(...arr);



  /* Nouvelle écriture où Math.max est directement retourné */
  const nbrSum = (arr) => arr.reduce((a, b) => a + b, 0)


  /* Ancienne écriture où Math.min doit être retourné
      const nbrSum = (arr) => {
      return arr.reduce((a, b) => a + b, 0)
  }; */



  /* Nouvelle écriture où Math.max est directement retourné */
  const nbrAvg = (arr, sum) => sum / arr.length;

  /* Dans fonction nbrAvg, j'utilise les paramètres retournés arr et la valeur sum pour las diviser par le nombre de nombres dans le tableau */






  /* 3.  */

  /* const insertNbrIntoHtml = arr => {

        for (let i = 1; i <= arr.length; i++) {

            document.getElementById("n-" + i).innerHTML = arr[i - 1];
        }

    }
 */


  const insertNumberIntoHtml = arr => {

    let id = document.querySelectorAll(".material td"); /* node list (noeuds du domaine) récupérée avec tous les td   (.material, car classe)  (td car type de balise) */
    let i = 0; /* Création d'un incrément à utiliser pour parcourir les différents td */
    Array.from(id) /* transformation de la node list en tableau array */
      .map(td => {
        /* .map = forEach = boucle for    .map suivi de fonction   td = paramètre   */
        td.innerText = arr[i++]; /* on remplace 1 à 1 les éléments td de html par les valeurs du tableau arr */
      });

  }




})();





/* 
1) Création du tableau randomNumbersArray = création de fonction. 

a) On va d'abbor créer un tableau : let arr = [];

b) Grâce à une boucle, on va pusher 10 nombres aléatoires entre 0 et 99 dans ce tableau arr.

Pour ce faire, on va utiliser un boucle for, car on sait qu'on va répéter un nombre délimité de 10 fois. 
 for(let i = O; i < 10; i++ ). 


 c) Ensuite on va pusher grâce à la fonction push() des nombres randoms : 

 Math.random() always returns a number lower than 1.
 Math.floor(Math.random() * 10); returns a random integer from 0 to 9
 Math.floor(Math.random() * 11); returns a random integer from 0 to 10
 Math.floor(Math.random() * 100); returns a random integer from 0 to 99
 Math.floor(Math.random() * 101);     // returns a random integer from 0 to 100

 la fonction qui nous intéresse est donc : 

arr.push(Math.floor(Math.random() * 100));

RESUME : 

let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 100));
        }
        return arr;

        Dans le tableau arr, répéter 10x l'insertion d'un nombre aléatoire en 0 et 100. 
        Attention : let arr et déclarer dans la fonction, il ne peut être utilisé quand dans la fonction tant qu'il n y a pas de return. 
        Le return arr = output de la fonction. Il faut l'insérer pour pouvoir réutiliser le tableau arr remplit des 10 nombres aléatoires par la suite. 

*/




/* 2)  

Je prépare les différentes fonctions à savoir : 

- Trouver le plus grand nombre
            var array1 = [2, 3, 1];
            var array2 = [5, 4, ...array1];
            console.log(array2); // Array [5, 4, 2, 3, 1];

- Trouver le plus petit nombre

- Trouver la somme de tous les nombres
            var total = [0, 1, 2, 3].reduce((a, b)=> a + b,0);    total == 6

            reduce suivi de la fonction avec les paramètre a et b
            a + b = acumulateur... = addition = reduce ajoute la valeur de b (objet) à a, qui au départ = 0.  
            O = valeur initiale

- Trouver la moyenne de tous les nombres
*/