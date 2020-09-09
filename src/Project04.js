import React, {Component} from 'react';

class Project04 extends Component{

    render(){
        return(
            <div className="projectContainer">
                        <div className="projectName">
							<h2> Secafi <br/> Portail DSI</h2>
							<div className="skills"> 
								<img src="./icon/ai.svg"/>
								<img src="./icon/ps.svg"/>
								<img src="./icon/html.svg"/>
								<img src="./icon/sass.svg"/>
								<img src="./icon/php.svg"/>
								<img src="./icon/js.svg"/>
								<img className="iconBack" src="./icon/iconWord.svg"/>
							</div>
						</div>
						<p>
                        	Durant mon alternance, l'une de mes principales tâches a été de créer un portail pour la direction des systèmes d'information.
							<br/><br/>
							Le but étant de créer un espace regroupant les informations importantes de l'entreprise (tutoriel, webinaire, procédure), le tout de manière rapide et accessible pour l'utilisateur; tout en simplifiant la gestion de contenus pour la DSI.
							<br/><br/>
							Pour ce projet, j'ai utilisé <span className="highlight">PHOTOSHOP</span> ainsi qu'<span className="highlight">ILLUSTRATOR</span> pour réaliser le design.
							<br/><br/>
							Pour le développement du site, j'ai préféré <span className="highlight">WORDPRESS</span> afin de profiter d'un back-office facile à utiliser, et j'ai dû créer un thème (<span className="highlight">HTML</span>, <span className="highlight">PHP</span>, <span className="highlight">JAVA-SCRIPT</span>) pour intégrer mon design.
							
                        </p>
						<div className="projectImgContainer"> 
							<img src="./portailDsi.png"/>
						</div>
            </div>
        );
    }

}
export default Project04;