import React, { useState } from "react";
import { useSearchParams, Link, useParams } from "react-router-dom";
import '../Projects/projectPlus.css';

import Header from '../../Layout/Header/Header';
import Main from '../../Layout/Main/main';
import Footer from '../../Layout/Footer/Footer';

import Navig from '../../Componants/Navig/navig';
import PageError from '../Error/PageError';
import Pfooter from '../../Page/Footer/Footer'

import projets from '../../Data/projets.json';
import Carrousel from '../../Componants/Carrousel/carrousel';
import Collapse from '../../Componants/Collapse/collapse';

function ProjetPlus()
{
    let { _id } = useParams();
    console.log("_id", _id);

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
    if(!Idprojet_OK) return(<PageError />);

    //recuperer la liste des langages
    const langage = Idprojet_OK.technologie.langage.map((element, index) =>(
        <li className="Descrip-langage" key={'langage'+index.toString()}>{element}</li>
    ));

    //recuperer la liste des outols
    const equipOutils = Idprojet_OK.technologie.outils.map((element, index) =>(
        <li className="Descrip-outils" key={'equipOutils'+index.toString()}>{element}</li>
    ));

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

                <div className="collapseApp">
                    <Collapse title="Description"  content={Idprojet_OK.mission} />
                    <Collapse title="Langage"  content={langage} />
                    <Collapse title="Outils"  content={equipOutils} />
                </div>

            </Main>

            <Footer>
                <Pfooter />
            </Footer>
        </>
    )

}

export default ProjetPlus;