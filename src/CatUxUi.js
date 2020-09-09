import React, {Component} from 'react';
import ProjectOpenInner from './ProjectOpenInner';

class ArticleMain extends Component{
    render(){
        return(

            <div className="articleMain">
				<div className="logo">
					<h1> Irvin De Bruyne</h1>
					<p> Ux - Ui Desginer / Front-end Developer</p>
				</div>
				<article className="articleClosed" id="art1">
					
				</article>
				<article className="articleOpen " id="art3">
					<ProjectOpenInner category="Ux - Ui Project" />
				</article>
				<article className="articleClosed articleClosedMarginLeft" id="art2">
					
				</article>
				<article className=" articleClosed articleClosedMarginLeft" id="art4">

				</article>
				<article className=" articleClosed articleClosedMarginLeft " id="art5">

				</article>
				
			</div>

        );
    }
}

export default ArticleMain;

            