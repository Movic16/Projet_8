import React from "react";
import '../Materiel/materiel.css';
import CardOutil from "../CardOutil/cardsOutil"
import TabOutil from "../../Data/outils.json"

//Cette partie permet de realiser la partie a propos
function materiel() 
{
    const recupOutils = TabOutil.find(element => element);
    console.log("recupOutils", recupOutils);

    //recuperer la liste des langage
    const TousLangage = recupOutils.langage.lag.map((element, index) =>(
        <li className="Descrip-outils" key={'equipOutils'+index.toString()}>{element}</li>
    ));

    //recuperer la liste des outils
    const TousOutils = recupOutils.outils.outil.map((element, index) =>(
        <li className="Descrip-outils" key={'equipOutils'+index.toString()}>{element}</li>
    ));

    return (
        <section className="materiel mt-5">
            <h2>Les outils et les technologies</h2>
            <aside className="materiel-aside">
                <CardOutil title='Langage' content={TousLangage} icone={recupOutils.langage.imgIcone}/>
                <CardOutil title='Outils' content={TousOutils} icone={recupOutils.outils.imgIcone}/>
            </aside>

        </section>
    );
}

export default materiel;