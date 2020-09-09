import React, {Component} from 'react';
import Test from './Test';

class SideNav extends Component{

    constructor(props){
        super(props);
        this.state = {optionClick:0 }
    }

    render(){

        const optionClick = this.state.optionClick;
        let genContain;

        genContain = <Test name='jackis'/>;

        // if (optionClick=0){
        //     genContain = <Test name='jackis'/>;
        // }
        // genContain = <Test></Test>

        return(
            <React.Fragment>

                <div class="sideNav">
                    <ul>
                        <li> option 23 </li>
                        <li> option 2</li>
                        <li> option 3</li>
                        <li> option 4</li>
                    </ul>
                </div>

                {genContain}

            </React.Fragment>
        );
    }
}

export default SideNav ;