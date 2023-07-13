import React from "react";
import '../Project/project.css';

import RectProjet from "../CadreProject/rectProjet";


//Cette partie permet de realiser la partie a propos
function project() 
{
    return (
        <section className="project mt-5">
            <h4 id="projet"> Mes Projets</h4>
                <RectProjet />
        </section>
    );
}

export default project;