// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
library.add(faCodepen);
library.add(faFacebook);
library.add(faInstagram);
library.add(faLinkedin);

export default function Navbar(props) {
	return(
		<div id='navbar'>
			<ul>
				<li><a href='https://github.com/ChienChengLin' target='_blank'>
					<FontAwesomeIcon icon={["fab", "github"]} className='navbar-icon' />
				</a></li>
				<li><a href='#'>
					<FontAwesomeIcon icon={["fab", "codepen"]} className='navbar-icon' />
				</a></li>
				<li><a href='https://www.facebook.com/profile.php?id=100000091738792' target='_blank'>
					<FontAwesomeIcon icon={["fab", "facebook"]} className='navbar-icon' />
				</a></li>
				<li><a href='https://www.instagram.com/ccccclooooo/?hl=zh-tw' target='_blank'>
					<FontAwesomeIcon icon={["fab", "instagram"]} className='navbar-icon' />
				</a></li>
			</ul>
			<h1>Copyright © Colin Lin 2018. All Rights Reserved</h1>
		</div>
	);
}