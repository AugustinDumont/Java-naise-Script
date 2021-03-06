/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [{
            id: "0001",
            available: false,
            user: "leny",
            os: "macOS"
        },
        {
            id: "0002",
            available: false,
            user: "Nicolas"
        },
        {
            id: "0003"
        },
        {
            id: "0004",
            os: "Windows"
        },
        {
            id: "0005"
        },
        {
            id: "0006",
            os: "macOS"
        },
        {
            id: "0007"
        },
        {
            id: "0008"
        },
        {
            id: "0009",
            available: false,
            user: "Anthony"
        },
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };

    document.getElementById('run').addEventListener("click", () => {
        for (let i = 0; i < computers.length; i++) {  /* peut être remplacé par for Each */
            if (typeof computers[i].available === 'undefined')
                computers[i].available = defaultProps.available;
            if (typeof computers[i].user === 'undefined')
                computers[i].user = defaultProps.user;
            if (typeof computers[i].os === 'undefined')
                computers[i].os = defaultProps.os;
        }

        console.log(computers);
    });

    /* utiliser la méthode hasownproperty à la place de undefined */

    /* utiliser la fonction "Object.asign().defaultProps, computers[i]"     défaultProps = source   , computers = destinations */

    /* 
    
    Utilisation de typeof
    
    Grâce à la boucle for (let i = 0; i < computers.length; i++)
    
    On va prendre chaque section du tableau une à une
    Type op se réfère à la première propriété qu'il va rencontrer dont la valeur est définie
    
    ex : typeof computer[1].available =  la première "available" de la section 2 de computer
    ex : typeof computer[4].os = le premier os de la section 5 de computer
    
    */
})();