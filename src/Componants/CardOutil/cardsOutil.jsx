import React from "react";
import '../CardOutil/cardsOutil.css';

//Cette partie permet de realiser la partie a propos
function cardsOutil({icone, title, content}) 
{
    const getImgUrl = (img) => {
        //console.log("img", img);
        const image = require("../../Images"+img);
        //console.log("image", image);
        return image;
    }

    return (
        
        <div className="boite-materiel">
            <div className="materiel-outil">
                <div className="card-pict">
                    <img src={getImgUrl(icone)} alt="" />
                </div>
                <div className="outil-info">
                    <h3>{title}</h3>
                    <ul>
                        {content}
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

export default cardsOutil;