import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import '../Projects/projectPlus.css';

import Main from '../../Layout/Main/main';
import Header from '../../Layout/Header/Header';
import Navig from '../../Componants/Navig/navig';
import PageError from '../Error/PageError';

import projets from '../../Data/projets.json';
import Carrousel from '../../Componants/Carrousel/carrousel';

function ProjetPlus()
{
    //recuperer l'id de l'url
    const [searchPrams] = useSearchParams();
    const [idProjet, setIdProjet] = useState(searchPrams.get('_id'));
    //console.log("searchPrams", searchPrams);
    //console.log("setIdProjet", setIdProjet);
    console.log("idProjet", idProjet);

    //Rechercher l'id dans le fichier de projet.json
    const Idprojet_OK = projets.find(element => element.id === idProjet);
    console.log("Idprojet_OK", Idprojet_OK);

    //Si l'url est modifie manuellement, redirection la page error
    if(!Idprojet_OK) return(<PageError />)

    return(
        <>
            <Header>
                <Navig />
            </Header>

            <Main>
                {/**Reenvoie l'image a la fonction Carousel */}
                <Carrousel pictures={Idprojet_OK.pictures} titre={Idprojet_OK.title}/>

                {/*Affichage des titres, ville, tag et profil*/}
                <div className="Detail-projet">
                    <div className="Title-Infos">
                        <div className="Log-Title">
                            <h1>{Idprojet_OK.title}</h1>
                        </div>

                        {/**Affichage des lien */}
                        <div className="Div-lien">
                            <p><Link to={Idprojet_OK.lien.lienSite}>Lien du site web</Link></p>
                            <p><Link to={Idprojet_OK.lien.lienCode}>Lien du code</Link></p>
                        </div>
                    </div>
                </div>

            </Main>
        </>
    )
}

export default ProjetPlus;