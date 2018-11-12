// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'

export default function Content1(props) {
	return(
		<div id='content1'>
			<ReactCSSTransitionGroup
		      transitionName="text0"
		      transitionEnter={false}
		      transitionLeave={false}
		      transitionAppear={true}
		      transitionAppearTimeout={2000}>
		      	<h2>Hey, I'm</h2>
				<h1>Colin</h1>
		    </ReactCSSTransitionGroup>		
				<ul>
				<ReactCSSTransitionGroup
			      transitionName="text1"
			      transitionEnter={false}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={1000}>		
					<li key='1'>A</li>
					<li key='2'> </li>
					<li key='3'>W</li>
					<li key='4'>e</li>
					<li key='5'>b</li>
					<li key='6'> </li>
					<li key='7'>D</li>
					<li key='8'>e</li>
					<li key='9'>v</li>
					<li key='10'>e</li>
					<li key='11'>l</li>
					<li key='12'>o</li>
				</ReactCSSTransitionGroup>	
				<ReactCSSTransitionGroup
			      transitionName="text2"
			      transitionEnter={false}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={1000}>
					<li key='13'>p</li>
				</ReactCSSTransitionGroup>				
				<ReactCSSTransitionGroup
			      transitionName="text3"
			      transitionEnter={false}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={1000}>
					<li key='14'>e</li>
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup
			      transitionName="text4"
			      transitionEnter={false}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={1000}>
					<li key='15'>r</li>
				</ReactCSSTransitionGroup>					
			</ul>
		</div>
	);
}