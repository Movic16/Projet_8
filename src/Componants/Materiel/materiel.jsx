import React from "react";
import '../Materiel/materiel.css';
import CardOutil from "../CardOutil/cardsOutil"

//Cette partie permet de realiser la partie a propos
function materiel() 
{
    return (
        <section className="materiel">
            <h2>Les outils et les technologies</h2>
            <aside className="materiel-aside">
                <CardOutil />
            </aside>

        </section>
    );
}

export default materiel;