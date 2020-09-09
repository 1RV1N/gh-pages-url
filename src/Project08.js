import React, {Component} from 'react';

class Project04 extends Component{

    render(){
        return(
            <div className="projectContainer">
                        <div className="projectName">
							<h2> FanSite Cyberpunk 2077</h2>
							<div className="skills"> 
								<img src="./icon/ai.svg"/>
								<img src="./icon/ps.svg"/>
							</div>
						</div>
						<p>
                        	Attendant avec impatience le jeu Cyberpunk 2077, j'ai réalisé un design pour un projet de Fansite/Forum autour du jeu.
							<br/><br/>
							Pour réaliser ce design, je me suis basé sur la charte graphique utilisée pour le site officiel du jeu.
							<br/><br/>
							Pour ce projet, j'ai utilisé <span className="highlight">PHOTOSHOP</span> ainsi qu'<span className="highlight">ILLUSTRATOR</span> pour réaliser le design.
                        </p>
						<div className="projectImgContainer"> 
							<img src="./cp2077/cp2.png"/>
							<img src="./cp2077/cp5.png"/>
							<img src="./cp2077/cp6.png"/>
							<img src="./cp2077/cp9.png"/>
							<img src="./cp2077/cp10.png"/>
							<img src="./cp2077/cp11.png"/>
						</div>
            </div>
        );
    }

}
export default Project04;