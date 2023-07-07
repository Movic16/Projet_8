import React from "react";
import {Link } from "react-router-dom";
import './PageError.css';

import Header from "../../Layout/Header/Header";
import Navig from "../../Componants/Navig/navig";
import Main from "../../Layout/Main/main";




function PageError() {
    return(
        <div className="Page-Error">
            <Header>
                <Navig />
            </Header>

            <Main>
                <div className="Error">
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/"><span>Retourner sur la page d'accueil</span></Link>
                </div>
            </Main>
        </div>
    )
}

export default PageError;