import React from 'react';
import {Link} from "react-router-dom"

import '../CardProjet/cardProjet.css';
import projets from "../../Data/projets.json"

//Cette fonction permet de recuperer les photos{cover} dans le fichier projets.json
const Cards = () => {
    console.log("projets", projets);

    const getImgUrl = (img) => {
        //console.log("img", img);
        const image = require("../../Images"+img);
        //console.log("image", image);
        return image;
    }

    return (
        <div className="projets-Cards">

            {/*Liste de base de donnees du fichier projets.json*/}
            {projets.map((projets) => {
                const {id, cover, title} = projets;
                console.log("projets", projets);
                console.log("id", id);

                //Affichage des image dans l'accueil
                return(
                    <div className="Pict-projets" key={id}>
                        <Link to={{pathname : "/projet", search: "?_id="+id}}>
                            <img src={getImgUrl(cover)} alt={title} />
                            <h2>{title}</h2>
                        </Link>
                    </div>
                )
            })}
        </div>
    )   
}

export default Cards;