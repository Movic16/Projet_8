import React from "react";
import '../About/about.css';
import Avatar from "../../Images/Profils/AvatarProfil.jpg";

//Cette partie permet de realiser la partie a propos
function about() 
{
    return (
        <section className="about">
            <div className="about-img">
                <img src={Avatar} alt="Avatar de profil" />
                <p>Massulaha Ibrahim</p>
                <p>Développeur Front-end</p>
            </div>

            <div className="about-P">
                <h1>À propos</h1>
                <div className="about-card">
                    <p> 
                        Je suis un Développeur front-end junior, je suis passionné par la création d'applications web et autres applications depuis mon adolescence. 
                        Ce métier me permet de travailler de n'importe où.
                    <br/><br/>
                    Diplômé avec une solide formation et une expérience pratique dans le développement front-end et back-end, 
                    je suis constamment motivé par le désir d'apprendre de nouvelles technologies et de relever d'autres défis. 
                    Mon objectif est de créer des produits numériques qui offrent une expérience utilisateur exceptionnelle 
                    et qui répondent aux besoins spécifiques de mes clients.
                  </p>
                </div>

            </div>

        </section>
    );
}

export default about;