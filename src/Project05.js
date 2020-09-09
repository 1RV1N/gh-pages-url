import React, {Component} from 'react';

class Project05 extends Component{

    render(){
        return(
            <div className="projectContainer">
                        <div className="projectName">
							<h2> Secafi <br/>Communication graphique</h2>
							<div className="skills"> 
								<img src="./icon/ai.svg"/>
								<img src="./icon/ps.svg"/>
							</div>
						</div>
						<p>
						L'une de mes principales tâches était la communication graphique à travers différents médias et plateformes.
						<br/><br/>
						Je devais réaliser différentes bannières pour le site de la DSI, des affiches pour les événements de l'entreprise, des illustrations pour la newsletter. Vous pouvez voir ici un petit aperçu de mes créations.
                        </p>
						<div className="projectImgContainer"> 
							<img src="./comm1.png"/>
							<img src="./comm4.png"/>
							<img src="./comm2.png"/>
							{/* <img src="./comm3.png"/> */}
							
						</div>
            </div>
        );
    }

}
export default Project05;