import React, { useContext, useState } from "react";
import '../Navig/navig.css';
import { NavLink }   from 'react-router-dom';

function Navig() 
{    
    //Affichage les elements du menu
    return (

        <div className="DivNav">
            <nav className="navbar">
                <ul>
                    <li className="lien-accueil"><NavLink to="/">Accueil</NavLink></li>
                    <li className="lien-projet"><NavLink to="#">Mes Projets</NavLink></li>
                    <li className="lien-connect"><NavLink to="#" >Contact</NavLink></li> 
                </ul>
            </nav>
        </div>
    );
}

export default Navig;