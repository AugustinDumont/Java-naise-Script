/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const getXmens = async function (heroId) {

        try {
            let response = await fetch(
                "http://localhost:3000/heroes"
            );
            if (response.ok) {
                let data = await response.json();
                if ("content" in document.createElement("template")) {
                    let template = document.querySelector("#tpl-hero");
                    let target = document.querySelector("#target");
                    data.forEach((xmen, i) => {
                        if (data[i].id == heroId) {
                            /* au moment où on boucle, on ne clone que l'.id qui correspond au input heroId */
                            target.innerHTML = "";
                            let clone = document.importNode(template.content, true);
                            let name = clone.querySelector(".name");
                            let alterEgo = clone.querySelector(".alter-ego");
                            let powers = clone.querySelector(".powers");
                            name.innerHTML = xmen.name;
                            alterEgo.innerHTML = xmen.alterEgo;
                            powers.innerHTML = xmen.abilities.join(", ");
                            target.appendChild(clone);  /* replaceChild() permet d'éviter de mettre un target.innerHTML = "" */
                        }
                    });

                }
            } else {
                console.error("erreur serveur" + response.status);
            }
        } catch (e) {
            console.log(e);
        }
    }

    document.getElementById('run').addEventListener('click', () => {
        const heroId = document.getElementById("hero-id").value;
        getXmens(heroId);
    });

})();







// (() => {
//     document.getElementById('run').addEventListener('click', () => {
//         let heroId = document.getElementById("hero-id").value;
//         getXmens(heroId);
//     });

//     const getXmens = async function (heroId) {

//         try {
//             let response = await fetch(
//                 "http://localhost:3000/heroes/" + heroId
//             );
//             if (response.ok) {
//                 let data = await response.json();
//                 if ("content" in document.createElement("template")) {
//                     let template = document.querySelector("#tpl-hero");
//                     let target = document.querySelector("#target");
//                     target.innerHTML = ""; /* doit être placé après la déclaration let targer */
//                     let clone = document.importNode(template.content, true);
//                     let name = clone.querySelector(".name");
//                     let alterEgo = clone.querySelector(".alter-ego");
//                     let powers = clone.querySelector(".powers");
//                     name.innerHTML = data.name;
//                     alterEgo.innerHTML = data.alterEgo;
//                     powers.innerHTML = data.abilities;
//                     target.appendChild(clone);
//                 }
//             } else {
//                 console.error(e, response.status);
//             }
//         } catch (e) {
//             console.log(e);
//         }
//     }

// })();