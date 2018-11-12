// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'
// import source modules
import Content1 from './content1';
import Content2 from './content2';

export default function Container(props) {
	return(
		<div id="container" className='page'>
			<Content1 />
			<Content2 />
		</div>
	);
}