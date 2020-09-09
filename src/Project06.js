import React, {Component} from 'react';

class Project04 extends Component{

    render(){
        return(
            <div className="projectContainer">
                        <div className="projectName">
							<h2> Space Walk</h2>
							<div className="skills"> 
								<img src="./icon/ai.svg"/>
								<img src="./icon/html.svg"/>
								<img src="./icon/css.svg"/>
								<img src="./icon/js.svg"/>
							</div>
						</div>
						<a href="./PortfolioFinal/index.html" target="blank"><h3 className="highlightLink">Visiter le site</h3></a>
						<br/>
						<p>
                        	Ce projet est mon premier portfolio; l'idée était d'appliquer la phrase "Découvrir mon espace" au premier degré.
							<br/><br/>
							Le scénario est simple : Vos etes un explorateur parti découvrir la galaxie. Cette galaxie contient plusieurs planètes, chaque planète contient des projets que j'ai réalisés.
							<br/><br/>
							Pour ce projet, J'ai voulu utiliser l'étendue de mes compétences. Une fois l'UX décidé et les wireframes finit, j'ai réalisé les différents éléments graphiques à l'aide d'<span className="highlight">ILLUSTRATOR</span>. 
							<br/>
							Pour le développement du site, j'ai utilisé le <span className="highlight">HTML</span>, <span className="highlight">CSS</span> et surtout le <span className="highlight">JavaScript</span> pour réaliser la plupart des animations
                        </p>

						

						<div className="projectImgContainer"> 
							<img src="./space1.png"/>
							<img src="./space2.png"/>
							<img src="./space3.png"/>
							<img src="./space4.png"/>
						</div>
            </div>
        );
    }

}
export default Project04;