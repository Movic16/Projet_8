import React, { useState } from 'react';

import '../Carrousel/carrousel.css';

import chevronGauche from "../../Images/Fleche/ChevronGauche.png";
import chevronDroit from "../../Images/Fleche/ChevronDroit.png";

//Reçois un tableau avec les URL des image
function Carousel({pictures, titre})
{
    console.log("pictures", pictures);
    console.log("titre", titre);

    const [index, setIndex] = useState(0); //Variable de compteur
    const totalPictures = pictures.length; //nombre d'image total
    console.log("totalPictures", totalPictures);

    if(index < 0) setIndex(totalPictures); //si image inferieur a zéro, definir le nombre max
    if(index > totalPictures) setIndex(0); //si image superieur est au max de l'image, alors mise a zéro

    const getImgUrl = (img) => {
        //console.log("img", img);
        const image = require("../../Images"+img);
        console.log("image", image);
        return image;
    }

    return(
        <div className='Carrousel'>

            {/* Affichage la premiere image*/}
            <figure>
                <img src={getImgUrl(pictures[index])} key={"pict"+index} alt={titre} />
            </figure>

            {/* si plus d'une image, alors ce code sera exécuté */}
            {totalPictures > 0 && (
                <div className='buttonChevron'>{/*les bouton pour les chevrons droiy et gauche, servent à navigue tout les images */}
                    <button className='buttonChevronGauche' onClick={() => {
                        if(index == 0) {setIndex(totalPictures-1)} else setIndex(index - 1);
                        // setIndex(index - 1);
                    }}>
                        <img src={chevronGauche} className='chevronGauche' alt="Fleche de gauche pour navigue sur les photos" />
                    </button>

                    <button className='buttonchevronDroit' onClick={() => {
                        if(index == totalPictures-1) {setIndex(0)} else setIndex(index + 1)
                        //setIndex(index +1)
                        }}>{/*index*/}
                        <img src={chevronDroit} className='chevronDroit' alt="Fleche de droit pour navigue sur les photos" />
                    </button>
                </div>
            )}

            {totalPictures > 0 && (
                //Compteur d'image
                <div className='Div-Cpt'>
                    <p className='compteurImg'>{index+1}/{totalPictures}</p>
                    {console.log("index+1", index+1)}
                    {console.log("totalPictures+1", totalPictures+1)}
                </div>
            )}
        </div>
    )
}

export default Carousel