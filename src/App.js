import React, { Component } from 'react';
import CatUxUi from './CatUxUi';
import CatGraph from './CatGraph';
import CatDev from './CatDev';
import CatHome from './CatHome';
import CatFull from './CatFull';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  navSm(){
    var x = window.matchMedia('(max-width:980px)')
    var nav = document.getElementById('nav');
    var section = document.getElementById('section');

    if (x.matches){
      nav.classList.add('navSmClicked');
      section.classList.add('sectionSmClicked');
    } else{
      console.log('NOOOOOOOOOOOOOpp');
    }
  }

  sectionSm(){
    var nav = document.getElementById('nav');
    var section = document.getElementById('section');
    var clicked = section.classList.contains('sectionSmClicked');

    if (clicked){
      nav.classList.remove('navSmClicked');
      section.classList.remove('sectionSmClicked');
    } else{
      console.log('NOOOOOOOOOOOOOpp');
    }
  }


  render(){
    return (
      <Router>
        <div className="main">
          
          <nav onClick={this.navSm} >
              <ul id="nav">
                  <Link to="/" ><li> Home </li></Link>
                  <Link to="/FullProject" ><li>Full<br/> Project</li></Link>
                  <Link to="/GraphicDesign" ><li>Graphic Design<br/> Project</li></Link>
                  <Link to="/Ux-Ui" > <li> Ux - Ui<br/>Project</li> </Link>
                  <Link to="/Developer" ><li>Developer<br/> Project</li></Link>
                  <a href="mailto:irvin.debruyne@gmail.com"><li> Contact Me </li> </a>
                  <a href="https://www.linkedin.com/in/irvin-de-bruyne-280824109" target="_blank"> <li>Linkedin</li></a>
              </ul>
          </nav>

          <section id="section" onClick={this.sectionSm} >
            <Switch>
              
              <Route exact path="/">
                <CatHome/>
              </Route>
              <Route exact path="/Ux-Ui">
                <CatUxUi/>
              </Route>
              <Route exact path="/GraphicDesign">
                <CatGraph/>
              </Route>
              <Route exact path="/Developer">
                <CatDev/>
              </Route>
              <Route exact path="/FullProject">
                <CatFull/>
              </Route>
              
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}


export default App;
