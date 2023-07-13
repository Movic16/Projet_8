import React from "react";
import '../Navig/navig.css';
import { NavLink }   from 'react-router-dom';

function Navig() 
{    
    //Affichage les elements du menu
    return (

        <div className="DivNav">
            <nav className="navbarr">
                <ul>
                    <li className="lien-accueil"><NavLink to="/">Accueil</NavLink></li>
                    <li className="lien-projet"><a href="#projet">Mes Projets</a></li>
                    <li className="lien-connect"><a href="#contact" >Contact</a></li> 
                </ul>
            </nav>
        </div>
    );
}

export default Navig;