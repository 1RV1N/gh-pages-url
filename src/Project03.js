import React, {Component} from 'react';

class Project03 extends Component{

    render(){
        return(
            <div className="projectContainer">
                        <div className="projectName">
							<h2> Virtowl</h2>
							<div className="skills"> 
								<img src="./icon/html.svg"/>
								<img src="./icon/css.svg"/>
								<img src="./icon/jquery.svg"/>
								<img src="./icon/php.svg"/>
							</div>
						</div>
						<p>
                        Projet réalisé en licence.<br/>
                        Virtowl est une agence fictive proposant des voyages à thèmes dans des hotels de luxe à travers le monde.
                        <br/><br/>
                        Lors de ce projet ma principale tâche à été d'intégrer le design créé. En amont de cela, il à fallu définir les technologies à utiliser pour nos besoins. Nous avons opté pour <span className="highlight">HTML</span> , <span className="highlight">CSS</span> , <span className="highlight">JQUERY</span> et <span className="highlight">PHP</span> .
                        </p>
						<div className="projectImgContainer"> 
							<img src="./virt1.PNG"/>
							<img src="./virt2.PNG"/>
                            <img src="./virt3.PNG"/>
							<img src="./virt4.png"/>
						</div>
            </div>
        );
    }

}
export default Project03;