/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (() => {
//     document.getElementById("run").addEventListener("click", () => {


//         /* Premièrement, je charge la fonction windox.li.getPosts dont le paramètre est une autre fonction dont les paramètres sont error (pour null) et articles (pour mon tableau) */

//         window.lib.getPosts(function (error, articles) {
//             console.log(articles);

//             /*  Je parcours articles grâce au forEach ou article = paramètre item. Bref, je m'intéresse à chaque item (article) de mon tableau articles accessibles grâce à la fonction getPost*/

//             articles.forEach(article => {

//                 /* Chaque article qui va ressortir le sera sous forme d'objects qui détiennent plusieurs proprités : author, id, content,... */
//                 /* Je fais ressortir tous les id de chaque article grâce à article.id */
//                 console.log(article.id);




//                 /* getComment() est une autre fonction qui permet d'accéder à une autre bibliothèque. Dans cette bibliothèque des commentaires qui possèdent également un id sont présents. Il faut les associer aux id de nos articles obtenus précédemment */
//                 /* je charge ma bibliothèque getComment qui a deux paramètres. "_" et la fonction next */
//                 /* Je remplace le première paramètre "_" par article.id, le second paramètre par une fonction qui elle aussi, détient 2 paramètres : error (pour null) et comment (pour un tableau qui génère des commentaires) */
//                 /* Pour chaque article.id, un commentaire va ressortir*/
//                 /* Pour pusher ce commentaire dans l'object article, j'utilise article.commentaires = comment */
//                 window.lib.getComments(article.id, (error, comments) => {
//                     console.log(comments);
//                     article.commentaires = comments;
//                 });
//             });
//         });


//     });

// REPONSE LENNY !!!!!!!!!!!!!!!!!!!   METTRE UN COMPTEUR !!!!!!!!!!!

// Les articles sont executés dans l'ordre, mais les comments ne prennent pas le meme temps de chargement, donc on ne peut pas savoir si ils seront bien associés, d ou l importance du compteur. 

(() => {

        document.querySelector("#run").addEventListener("click", () => {
                window.lib.getPosts((error, posts) => {
                    let postsProcessed = 0;

                    posts.forEach(post => {
                        windox.lib.getComments(post.id, (err, comments) => {
                            post.comments = comments;

                            if (++postsProcessed === posts.length) {
                                console.log(posts);
                            }
                        });
                    });
                });
        });
})();