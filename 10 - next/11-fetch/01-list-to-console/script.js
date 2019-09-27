/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* fetch prends deux types de méthodes (entrée et init) */

(() => {
    const getHeroes = async function () {
        try {
            const response = await fetch('http://localhost:3000/heroes') /* fetch + paramètre url renvoie une promesse */
            if (response.ok) {
                /* si répond un retour de type 200 à 299 = rép au problème, quel que soit le type de retour, si il y a retour, la promesse est tenue. Il faut donc préciser le type de retour que l'on souhaite */
                const data = await response.json() /* response.json = deuxième promesse */
                console.log(data)
            } else {
                console.error('error', response.status)
            }
        } catch (e) {
            console.log(e)
        }
    }

    document.getElementById('run').addEventListener('click', () => {

        getHeroes();
    });
})();


/* 

fetch ('http://localhost:3000/heroes')
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
})


Je lance un fetch avec l'url en question
si je reçois une response, alors je ne m'intéresse qu'au type .json (et reçoit seconde promesse)
Quans je recois le .json, je demande les data de .json

Promesse dans une promesse = 2 x .then
    
    
    */