import {
  PassThrough
} from "stream";

/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// new Promise( /* exécuteur */ function(resolve, reject) { ... } );

/* La méthode then() renvoie un objet Promise. Elle peut prendre jusqu'à deux arguments qui sont deux fonctions callback à utiliser en cas de complétion ou d'échec de la Promise. */
/* getPost() retourne une prommesse dont les paramètres sont resolve et reject. Pour résolve, on rentre le paramètre articles, car le fichier promises.js on foit que resolve est associé à un tableau d'articles */
/* (la fonction getPosts sera toujours résolue sans erreur, en effet il n'y a que le paramètre " resolve" pris en compte.). */

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    window.lib.getPosts().then(articles => {
      /* Méthode then() renvoi à l'objet Promise.*/
      console.table(articles);
    }); /* null = convention qui se rapporte au deuxième paramètre de la fonction promesse qui ici n existe pas */
  });

})();

/* graĉe au .then, je viens directement rechercher la paramètre résolve de la promesse qui return de la méthode getPost
Grossièrement, quand la méthode getPost aura chargé, la promesse et son .then me donne accès au paramètre résolve = articles = tableau.  */