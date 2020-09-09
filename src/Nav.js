import React, {Component} from 'react';

class Nav extends Component{
    render(){
        return(

            <nav>
                <ul>
                    <li> Home </li>
                    <li> Ux - Ui<br/>Project</li>
                    <li>Graphic Design<br/> Project</li>
                    <li>Developer<br/> Project</li>
                    <a href="mailto:irvin.debruyne@gmail.com"><li> Contact Me </li> </a>
                    <a href="https://www.linkedin.com/in/irvin-de-bruyne-280824109" target="_blank"> <li>Linkedin</li></a>
                </ul>
            </nav>

        );
    }
}

export default Nav;