import React, {Component} from 'react';

class Project04 extends Component{

    render(){
        return(
            <div className="projectContainer">
                        <div className="projectName">
							<h2> Portfolio</h2>
							<div className="skills"> 
								<img src="./icon/ai.svg"/>
								<img src="./icon/sass.svg"/>
								<img src="./icon/react.svg"/>
							</div>
						</div>
						
						<p>
                        	Après mon <a href="./FullProject" className="highlightLink"> premier portfolio </a> j'ai voulu réitérer l'expérience, les nouveaux maitres mots étant la sobriété et l'efficacité.
							<br/><br/>
							La navigation est simplifiée pour mettre les différents projets en avant.
							<br/><br/>
							Pour ce projet, j'ai utilisé <span className="highlight">ILLUSTRATOR</span> afin de réaliser le design ainsi que <span className="highlight">REACT</span> et <span className="highlight">SASS</span> pour le developper.
                        </p>

						
            </div>
        );
    }

}
export default Project04;