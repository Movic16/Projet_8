import React from "react";
import '../Materiel/materiel.css';
import CardOutil from "../CardOutil/cardsOutil"
import TabOutil from "../../Data/outils.json"

//Cette partie permet de realiser la partie a propos
function materiel() 
{
    const recupOutils = TabOutil.find(element => element);
    console.log("recupOutils", recupOutils);

    return (
        <section className="materiel">
            <h2>Les outils et les technologies</h2>
            <aside className="materiel-aside">
                <CardOutil icone={recupOutils.langage.imgIcone}/>
                <CardOutil icone={recupOutils.outils.imgIcone}/>
            </aside>

        </section>
    );
}

export default materiel;