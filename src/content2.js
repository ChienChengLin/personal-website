// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'

import Coding from './img/Coding.jpg';

export default function Content2(props) {	
	return(
		<div id='content2'>
			<ReactCSSTransitionGroup
		      transitionName="img"
		      transitionEnter={false}
		      transitionLeave={false}
		      transitionAppear={true}
		      transitionAppearTimeout={4000}>
				<img src={Coding} className='coding-img' id='coding-img' alt='photo of coding' key='coding-img' />
			</ReactCSSTransitionGroup>
		</div>
	);
}