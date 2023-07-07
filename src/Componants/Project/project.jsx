import React from "react";
import '../Project/project.css';

import RectProjet from "../CadreProject/rectProjet";


//Cette partie permet de realiser la partie a propos
function project() 
{
    return (
        <section className="project">
            <h3> Mes Projets</h3>
                <RectProjet />
        </section>
    );
}

export default project;