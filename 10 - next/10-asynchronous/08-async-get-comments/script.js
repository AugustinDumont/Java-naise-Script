/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(() => {
    document.getElementById("run").addEventListener("click", async () => {
        let articles = [];
        await window.lib.getPosts().then(function (articles) {
            articles.forEach(function (item, i) {
                let id = articles[i].id;
                window.lib.getComments(id).then(function (comments) {
                    articles[id].comment = comments;
                });
            });
            console.log(articles);

        });
    });
})();




// (() => {

//     const getPostsComments = () => {
//         return new Promise((resolve) => {
//             let articles = [];

//             window.lib.getPosts().then(function (articles) {
//                 articles.forEach(function (item, i) {
//                     let id = articles[i].id;
//                     window.lib.getComments(id).then(function (comments) {
//                         articles[id].comment = comments;
//                     });
//                 });
//                 resolve(articles);
//             });
//         });
//     }

//     document.getElementById("run").addEventListener("click", async () => {

//         const articles = await getPostsComments();
//         console.table(articles);
//         console.log("test");

//     });

// })();