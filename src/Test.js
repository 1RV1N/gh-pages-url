import React, {Component} from 'react';

class Test extends Component {

    constructor(){
        super();
        this.state={
            count:0
        }
    }

    removeOne(){
        this.setState({
            count:this.state.count-1
        });
    }

    addOne(){
        this.setState({
            count:this.state.count+1
        });
    }

    render(){
        const count = this.state.count;
        
        return(
            <div class="mainContainer">
                <h1> Welcome gros, ton nom c'est : {this.props.name} </h1>
                <p>mon compteur : {count} </p>
                <button onClick={() => this.addOne()}> ajouter 1 </button>
                <button onClick={this.removeOne.bind(this)}> enlever 1</button>
            </div>
            
        );
    }
    
}

export default Test;