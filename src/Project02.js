import React, {Component} from 'react';

class Project02 extends Component{

    render(){
        return(
            <div className="projectContainer">
                        <div className="projectName">
							<h2> Brochures fictives</h2>
							<div className="skills"> 
								<img src="./icon/ai.svg"/>
								<img src="./icon/id.svg"/>
							</div>
						</div>
						<p>
                        Ce lot de brochures fictionnelles à pour but de résumer le déroulé d'un voyage, ainsi que les tarifs pratiqués.<br/>
                        Chaque brochure possède un style différent.<br/><br/>
                        Les Brochures ont été réalisées à l'aide d'<span className="highlight">ILLUSTRATOR</span> et de <span className="highlight">InDesign</span>. 
                        </p>
						<div className="projectImgContainer"> 
							<img src="./Brochure1In.png"/>
							<img src="./Brochure1Out.png"/>
                            <img src="./Brochure2In.png"/>
							<img src="./Brochure2Out.png"/>
						</div>
            </div>
        );
    }

}
export default Project02;