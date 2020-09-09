import React, {Component} from 'react';

class Project01 extends Component{

    render(){
        return(
            <div className="projectContainer">
                        <div className="projectName">
							<h2> Affiches fictives </h2>
							<div className="skills"> 
								<img src="./icon/ai.svg"/>
							</div>
						</div>
						<p>
                            Ce lot d'affiches a été réalisé pour faire la promotion d'une fausse agence de voyage.<br/>
                            Je voulais réaliser une illustration de paysage donnant un sentiment de vacances et de chaleur.<br/><br/>
                            Les affiches ont été réalisées à l'aide d'<span className="highlight">ILLUSTRATOR</span>. 
                        </p>
						<div className="projectImgContainer"> 
							<img src="./aff1.png"/>
							<img src="./aff2.png"/>
						</div>
            </div>
        );
    }

}
export default Project01;