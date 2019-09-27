/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

        const inputs = Array.from(document.querySelector("input"));

        (() => {

            document.getElementById('run').addEventListener('click', () => {
                const [name, alterEgo, powers] = inputs.map(({
                    value
                }) => value.trim());

                if (values.some(val => val-- - "")) {
                    /* if(values.every(val => !!=val)) */
                    console.error("There's an empty input");
                    return;
                }


                const [name, alterEgo, powers] = values;

                const response = await fetch("//localhost:3000/heroes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        alterEgo,
                        abilities: powers.split(",").map(str => str.trim()),
                    }),

                });

                const freshHero = await response.json();

                console.log("hero", freshHero);

            })

        })();


        // (() => {

        //     const inputName = document.getElementById("hero-name");
        //     const inputAlterEgo = document.getElementById("hero-alter-ego");
        //     const inputPowers = document.getElementById("hero-powers");

        //     /* 
        //     const [inputName, inputAlterEgo, inputPowers] = Array.from(document.querySelectorAll("input"),);

        //     */
        //     let url = "http://localhost:3000/heroes";



        //     const addNewHero = async function () {

        //         let newHero = {
        //             name: inputName.value,
        //             alterEgo: inputAlterEgo.value,
        //             abilities: inputPowers.value.split(",").map(power => power.trim())   /* .trim() permet de supprimer les blancs avant et après les virgules */
        //         };
        //         console.log(newHero);

        //         try {
        //             let data = await fetch(url, {
        //                 method: "POST",
        //                 body: JSON.stringify(newHero),
        //                 headers: new Headers({
        //                     "Content-type": "application/json"
        //                 })
        //             });

        //             if (data.ok) {
        //                 const response = await fetch("http://localhost:3000/heroes");
        //                 const respResp = response.json();
        //                 console.log(JSON.stringify(respResp));

        //             } else {
        //                 console.log("erreur" + data.status);
        //             }


        //         } catch (e) {
        //             console.log(e);
        //         }
        //     }
        //     document.getElementById('run').addEventListener('click', () => {
        //         addNewHero();
        //     })
        // })();




        // le JSON.stringify de l'objet le transforme de la manière suivante : 

        // {name: "SuperGus", alterEgo: "Je suis moi", abilities: Array(1)}
        // abilities: ["vole aime coeur"]
        // alterEgo: "Je suis moi"
        // name: "SuperGus" 