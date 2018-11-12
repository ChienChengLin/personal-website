// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
library.add(faCodepen);
library.add(faFacebook);
library.add(faInstagram);


export default function Navbar(props) {
	return(
		<div id='navbar'>
			<ul>
				<li><a herf='#'>
					<FontAwesomeIcon icon={["fab", "github"]} className='navbar-icon' />
				</a></li>
				<li><a herf='#'>
					<FontAwesomeIcon icon={["fab", "codepen"]} className='navbar-icon' />
				</a></li>
				<li><a herf='#'>
					<FontAwesomeIcon icon={["fab", "facebook"]} className='navbar-icon' />
				</a></li>
				<li><a herf='#'>
					<FontAwesomeIcon icon={["fab", "instagram"]} className='navbar-icon' />
				</a></li>
			</ul>
			<h1>Copyright © Colin Lin 2018. All Rights Reserved</h1>
		</div>
	);
}