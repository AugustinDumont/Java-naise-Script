/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const getXmens = async function () {
        try {
            const response = await fetch(
                "http://localhost:3000/heroes"
            ); /* fetch + paramètre url renvoie une promesse */
            if (response.ok) {
                /* ou if (response.status > 200 && response.status < 300) */

                /* si répond un retour de type 200 à 299 = rép au problème, quel que soit le type de retour, si il y a retour, la promesse est tenue. Il faut donc préciser le type de retour que l'on souhaite */
                const data = await response.json();
                /* response.json = deuxième promesse */

                if ("content" in document.createElement("template")) {
                    // 1)  On vérifie si le navigateur prend en charge l'élément HTML template en vérifiant la présence de l'attribut content pour l'élément template.
                    let template = document.querySelector("#tpl-hero"); /* 2) on déclare le template que l'on va cloner par la suite */
                    let target = document.querySelector("#target"); /* 3) on déclare le target sur lequel faire appenChild du Clone */

                    data.forEach((xmen, i) => {
                        let clone = document.importNode(template.content, true);
                        /* let clone = template.cloneNode(true).content = meme chose que importNode*/
                        let name = clone.querySelector(".name");
                        let alterEgo = clone.querySelector(".alter-ego");
                        let powers = clone.querySelector(".powers");
                        name.innerHTML = xmen.name;
                        alterEgo.innerHTML = xmen.alterEgo;
                        powers.innerHTML = xmen.abilities.join(", ");
                        target.appendChild(clone);
                    });
                }
            } else {
                console.error("error", response.status);
            }
        } catch (e) {
            console.log(e);
        }
    };

    document.getElementById("run").addEventListener("click", () => {
        getXmens();
    });
})();