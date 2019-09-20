/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.






/* Infos présentes dans le fichier callback.js



((ns, utils) => {
    ns.wait = (delay, next) => setTimeout(next, delay);

    ns.getPosts = next =>
        ns.wait(1000, () =>
            next(
                null,
                Array.from(new Array(utils.getRandomInt(5, 10)).keys()).map(
                    id => ({id, ...utils.generatePost()}),
                ),
            ),
        );
        
        Càd : 

        La fonction getPosts à comme paramètre la fonction next. 
        La fonction next à comme paramètres, null et un tableau random.
        
        
        */

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts(callBack);
    });

    function callBack(error, tableau) {
        console.log(tableau);
    }

})();


// ou 

/* document.getElementById("run").addEventListener("click", () => {
    window.lib.getPosts(function(error,tableau));
    console.log(tableau);

    if(error !== null){
        console.log(error)
    };
 */