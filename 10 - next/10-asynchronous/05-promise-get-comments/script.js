/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* Tu as dû remarquer, dans l'exercice précédent, que les articles reçus via la fonction window.lib.getPosts comprennaient une propriété id.

La fonction window.lib.getComments() est disponible dans le script. Elle doit recevoir un id d'article comme paramètre, et retourne une Promise qui sera résolue, après un petit délai, avec le tableau des commentaires de l'article.

Au clic sur le bouton, appelle la fonction getPosts. Pour chaque article récupéré, appelle la fonction getComments et ajoute les commentaires obtenus dans une propriété comments de l'article. Affiche les articles dans la console (les fonctions getPosts et getComments seront toujours résolues sans erreur). */

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib
            .getPosts()
            .then(posts => {
                Promise.all(
                    posts.map(post => window.lib.getComments(post.id)),
                ).then(postComments => {
                    postComments.forEach((comment, i) => {
                        posts[i].comments = comments;
                    });
                    console.log(posts);
                });
            })
            .catch(error => {
                console.error(error);
            });
    });
})();


// (() => {

//     document.getElementById("run").addEventListener("click", () => {
//         let articles = []; /* oblige de déclarer le tableau articles au début*/

//         window.lib.getPosts().then(function (articles) {
//             /* J'appelle getPost et le resolve de la promesse qui lui est associé. Quand getPost ok, promesse resolve articles = générer le tableau avec articles */
//             let remaining = articles.length;
//             articles.forEach(function (item, i) {
//                 /* Dans le tableau articles obtenu, je fais un forEach et m'intéresse aux index */
//                 let id = articles[i].id; /* Je définis id, chaque id de chaque article. id = numéro précis se référent à chaque article*/
//                 window.lib.getComments(id).then(function (comments) {
//                     /* Comme dans l'énoncé de l'exercice, getComment prends un id d'article comme paramètre */
//                     /* j'obtiens le commentaire de chaque id grâce au resolve de la promesse associé à getComment */
//                     articles[id].comment = comments; /* J'ajoute dans l'objet article les comments associés aux id, grâce au .comment */
//                     remaining--;
//                     if (remaining == 0) {
//                         console.table(articles);
//                     }
//                 });
//             });

//             /*  différence avec console.table()??? */

//             /* QUESTION, si je le sors dans ma boucle, mes comments s'affiche de le tableau, mais ici, en dehors, mes comments ne s'affichent pas le table, mais bien dans l'id */
//         });
//     });

// })();


/*  REMAINING = UTILITE !!!!!!!!!

Dans le tableau pour chaque article.id je boucle le tableau comment. Le probmème est qu'une fois que le premier then est executé, le programme considère que la promesse est tenue et
qu'il peut passer à la suite. C'est pourquoi l'utilisation du remaining, permet de n'afficher le console.log que lorsque le tableau a été bouclé */