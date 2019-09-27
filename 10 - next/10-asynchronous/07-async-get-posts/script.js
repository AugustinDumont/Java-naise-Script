/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", async () => {
        const articles = await window.lib.getPosts();
        console.log(articles);
    });

})();

/*  Comapraison avec exercice 4

(() => {
    document.getElementById("run").addEventListener("click", function () {
        window.lib.getPosts().then(function (articles) {
            console.table(articles);
        }, null);
    });
})(); */

/* const articles = je récupères mes articles. Action qui demande un certain temps. J'attends de récupérer mes articles avant de passer au reste. */