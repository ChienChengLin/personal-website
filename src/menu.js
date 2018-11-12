// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserTie, faCode, faKissWinkHeart, faMailBulk } from '@fortawesome/free-solid-svg-icons';

library.add(faHome);
library.add(faUserTie);
library.add(faCode);
library.add(faKissWinkHeart);
library.add(faMailBulk);


export default function Menu(props) {
	return(
		<div id='menu'>
			<div id='scroll-to-container' className='subject' onClick={() => props.onClick('#container')}>
				<div className='side-highlight'>

				</div>
				<div className='icon-and-text'>
					<FontAwesomeIcon icon="home" className='menu-icon' />
					<h1>Home</h1>
				</div>
			</div>
			<div id='scroll-to-resume' className='subject' onClick={() => props.onClick('#resume')}>
				<div className='side-highlight'>

				</div>	
				<div className='icon-and-text'>			
					<FontAwesomeIcon icon="user-tie" className='menu-icon' />
					<h1>Resume</h1>
				</div>
			</div>
			<div id='scroll-to-projects' className='subject' onClick={() => props.onClick('#projects')}>
				<div className='side-highlight'>

				</div>	
				<div className='icon-and-text'>			
					<FontAwesomeIcon icon="code" className='menu-icon' />
					<h1>Projects</h1>
				</div>
			</div>
			<div id='scroll-to-interests' className='subject' onClick={() => props.onClick('#interests')}>
				<div className='side-highlight'>

				</div>
				<div className='icon-and-text'>				
					<FontAwesomeIcon icon="kiss-wink-heart" className='menu-icon' />
					<h1>Interests</h1>
				</div>
			</div>
			<div id='scroll-to-contact' className='subject' onClick={() => props.onClick('#contact')}>
				<div className='side-highlight'>

				</div>
				<div className='icon-and-text'>		
					<FontAwesomeIcon icon="mail-bulk" className='menu-icon' />
					<h1>Contact</h1>
				</div>
			</div>		
		</div>
	);
}