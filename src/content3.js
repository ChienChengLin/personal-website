// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'


export default function Menu(props) {
	return(
		<div id='menu'>
			<div id='scroll-to-resume' className='subject'></div>
			<div id='scroll-to-projects' className='subject'></div>
			<div id='scroll-to-interests' className='subject'></div>
			<div id='scroll-to-contact' className='subject'></div>
		</div>
	);
}