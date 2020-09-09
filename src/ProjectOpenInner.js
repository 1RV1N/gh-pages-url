import React, {Component} from 'react';
import Project01 from './Project01';
import Project02 from './Project02';
import Virtwol from './Project03';
import PortailDSI from './Project04';
import Comgraph from './Project05';
import Project06 from './Project06';
import Project07 from './Project07';
import Project08 from './Project08';

// class ProjectMenu extends Component{
//     constructor(props){
//         super(props);
//     }

//     render(){ 
//         // console.log('log test ='+this.props.category)
//         return(

//                 <div className="projectMenu"> 
//                     <ul>
//                         <li onClick={this.handleProject01} > <span>Project 01</span> </li>
//                         <li onClick={this.handleProject02} > <span>Project 02</span> </li>
//                         <li> <span>Project 03</span> </li>
//                         <li> <span>Project 04</span> </li>
//                         <li> <span>Project 05</span> </li>
//                     </ul>
//                 </div>

//         );
//     }
// }

class ProjectOpenInner extends Component{

    constructor(props){
        super(props);
        this.handleProject01 = this.handleProject01.bind(this);
        this.handleProject02 = this.handleProject02.bind(this);
        this.handleProject03 = this.handleProject03.bind(this);
        // this.handleProjectNum = this.handleProjectNum.bind(this);
        this.state = {handleProjectNum:'project01'};
    }

    handleProject01(){
        this.setState({handleProjectNum:'project01'})
        console.log(this.state.handleProjectNum)
    }
    handleProject02(){
        this.setState({handleProjectNum:'project02'})
        console.log(this.state.handleProjectNum)
    }
    handleProject03(){
        this.setState({handleProjectNum:'project03'})
        console.log(this.state.handleProjectNum)
    }

    render(){

        console.log('log 1 ='+this.props.category)

        if(this.props.category==="Home"){

            console.log('log home ='+this.props.category)
            return(    
                <React.Fragment>
                    <div className="projectInfo">
                        <div className="ariane"> {this.props.category} <hr/> </div>
                    </div>
                    <img src="./portfolio/home.svg"/>
                </React.Fragment>
            );
            
        } else if(this.props.category==="Ux - Ui Project"){

            if (this.state.handleProjectNum==='project01'){
                return(
                    <div>
                        <div className="projectInfo">
                            <div className="ariane"> {this.props.category} <hr/> </div>
    
                            <div className="projectMenu"> 
                                <ul>                            
                                    <li onClick={this.handleProject01} > <span>CP 2077 Fansite</span> </li>
                                </ul>
                            </div>
                        </div>
                        <Project08/>
                    </div>
                );
                
            } 

        } else if(this.props.category==="Graphic design"){

            if (this.state.handleProjectNum==='project01'){
                return(
                    <div>
                        <div className="projectInfo">
                            <div className="ariane"> {this.props.category} <hr/> </div>
    
                            <div className="projectMenu"> 
                                <ul>                            
                                    <li onClick={this.handleProject01} > <span>Affiches </span> </li>
                                    <li onClick={this.handleProject02} > <span>Brochures </span> </li>
                                    <li onClick={this.handleProject03} > <span>Secafi - Comm </span> </li>
                                </ul>
                            </div>
                        </div>
                        <Project01/>
                    </div>
                );
                
            } else if (this.state.handleProjectNum==='project02'){
                return(
                    <div>
                        <div className="projectInfo">
                            <div className="ariane"> {this.props.category} <hr/> </div>
    
                            <div className="projectMenu"> 
                                <ul>                            
                                    <li onClick={this.handleProject01} > <span>Affiches </span> </li>
                                    <li onClick={this.handleProject02} > <span>Brochures </span> </li>
                                    <li onClick={this.handleProject03} > <span>Secafi - Comm </span> </li>
                                </ul>
                            </div>
                        </div>
                        <Project02/>
                    </div>
                );
            } else if (this.state.handleProjectNum==='project03'){
                return(
                    <div>
                        <div className="projectInfo">
                            <div className="ariane"> {this.props.category} <hr/> </div>
    
                            <div className="projectMenu"> 
                                <ul>                            
                                    <li onClick={this.handleProject01} > <span>Affiches </span> </li>
                                    <li onClick={this.handleProject02} > <span>Brochures </span> </li>
                                    <li onClick={this.handleProject03} > <span>Secafi - Comm </span> </li>
                                </ul>
                            </div>
                        </div>
                        <Comgraph/>
                    </div>
                );
            }
            
        } else if(this.props.category==="Full Project"){

            if (this.state.handleProjectNum==='project01'){
                return(
                    <div>
                        <div className="projectInfo">
                            <div className="ariane"> {this.props.category} <hr/> </div>
    
                            <div className="projectMenu"> 
                                <ul>                            
                                    <li onClick={this.handleProject01} > <span>Space Walk</span> </li>
                                    <li onClick={this.handleProject02} > <span> Secafi - Portail DSI </span> </li>
                                    <li onClick={this.handleProject03} > <span>Portfolio</span> </li>
                                </ul>
                            </div>
                        </div>
                        <Project06/>
                    </div>
                );
                
            } else if (this.state.handleProjectNum==='project02'){
                return(
                    <div>
                        <div className="projectInfo">
                            <div className="ariane"> {this.props.category} <hr/> </div>
    
                            <div className="projectMenu"> 
                                <ul>                            
                                    <li onClick={this.handleProject01} > <span>Space Walk</span> </li>
                                    <li onClick={this.handleProject02} > <span>Secafi - Portail DSI</span> </li>
                                    <li onClick={this.handleProject03} > <span>Portfolio</span> </li>
                                </ul>
                            </div>
                        </div>
                        
                        <PortailDSI/>
                    </div>
                );
            } else if (this.state.handleProjectNum==='project03'){
                return(
                    <div>
                        <div className="projectInfo">
                            <div className="ariane"> {this.props.category} <hr/> </div>
    
                            <div className="projectMenu"> 
                                <ul>                            
                                    <li onClick={this.handleProject01} > <span>Space Walk</span> </li>
                                    <li onClick={this.handleProject02} > <span>Secafi - Portail DSI</span> </li>
                                    <li onClick={this.handleProject03} > <span>Portfolio</span> </li>
                                </ul>
                            </div>
                        </div>
                        
                        <Project07/>
                    </div>
                );
            }

        } else{

            if (this.state.handleProjectNum==='project01'){
                return(
                    <div>
                        <div className="projectInfo">
                            <div className="ariane"> {this.props.category} <hr/> </div>
    
                            <div className="projectMenu"> 
                                <ul>                            
                                    <li onClick={this.handleProject01} > <span>Virtowl</span> </li>
                                    {/* <li onClick={this.handleProject02} > <span>Project 02</span> </li> */}
                                </ul>
                            </div>
                        </div>
                        <Virtwol/>
                    </div>
                );
                
            } else if (this.state.handleProjectNum==='project02'){
                return(
                    <div>
                        <div className="projectInfo">
                            <div className="ariane"> {this.props.category} <hr/> </div>
    
                            <div className="projectMenu"> 
                                <ul>                            
                                    <li onClick={this.handleProject01} > <span>Virtowl</span> </li>
                                    <li onClick={this.handleProject02} > <span>Project 02</span> </li>
                                </ul>
                            </div>
                        </div>
                        <Project02/>
                    </div>
                );
            }

        }
    }
}

export default ProjectOpenInner;
