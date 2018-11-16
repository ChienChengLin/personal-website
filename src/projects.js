// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery';

import PersonalWebsite1 from './img/personal-website1.gif';
import PersonalWebsite2 from './img/personal-website2.gif';
import PersonalWebsite3 from './img/personal-website3.gif';
import DraggableMarkdownPreviewer1 from './img/draggable-markdown-previewer1.gif';
import DraggableMarkdownPreviewer2 from './img/draggable-markdown-previewer2.gif';
import DraggableMarkdownPreviewer3 from './img/draggable-markdown-previewer3.gif';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


library.add(faAngleDoubleLeft);
library.add(faAngleDoubleRight);

export default class Projects extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			currentPageNum: 0
		};

		this.changePage = this.changePage.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}


	changePage(direction){
		if(direction == 'prev'){
			let nextPageNum = this.state.currentPageNum - 1;
			if(nextPageNum < 0){
				nextPageNum = 0;
			}
			document.getElementsByClassName('projects-page')[nextPageNum].scrollIntoView({behavior: 'smooth'});			
			this.setState({
				currentPageNum: nextPageNum
			});	
		}
		else {
			let nextPageNum = this.state.currentPageNum + 1;
			if(nextPageNum > 2){
				nextPageNum = 2;
			}
			document.getElementsByClassName('projects-page')[nextPageNum].scrollIntoView({behavior: 'smooth'});			
			this.setState({
				currentPageNum: nextPageNum
			});

			
		}
	}

	handleMouseOver(direction){
		// MouseHover animation only when vw > 1024px
		if(window.innerWidth > 1024){
			let prev = document.getElementById('prev');
			let next = document.getElementById('next');
			let directionIcons = document.getElementsByClassName('direction-icon');

			prev.style.backgroundColor = 'rgba(26, 69, 79, 0.7)';
			next.style.backgroundColor = 'rgba(26, 69, 79, 0.7)';
			
			if(direction == 'prev'){
				prev.style.width = '60px';
				next.style.width = '40px';
				directionIcons[0].style.left = '5px';
				directionIcons[1].style.left = '5px';
			}
			else {
				next.style.width = '60px';
				prev.style.width = '40px';
				directionIcons[0].style.left = '-5px';
				directionIcons[1].style.left = '-5px';			
			}			
		}
	}

	handleMouseOut(){
		// MouseHover animation only when vw > 1024px
		if(window.innerWidth > 1024){
			let prev = document.getElementById('prev');
			let next = document.getElementById('next');
			let directionIcons = document.getElementsByClassName('direction-icon');

			prev.style.backgroundColor = 'rgba(26, 69, 79, 1)';
			next.style.backgroundColor = 'rgba(26, 69, 79, 1)';		
			
			prev.style.width = '50px';
			next.style.width = '50px';
			directionIcons[0].style.left = '0px';
			directionIcons[1].style.left = '0px';			
		}
	}

	render(){
		return(
			<div id='projects' className='page'>			
				<div id='prev' className='direction-btn' onMouseOver={()=> this.handleMouseOver('prev')} onMouseOut={this.handleMouseOut} onClick={() => this.changePage('prev')}>
					<FontAwesomeIcon icon="angle-double-left" className='direction-icon' />
				</div>
				<div id='projects-wrapper'>
					<div className='projects-page'>
						<div className='projects-page-title'><h1>#1 Personal Website</h1></div>
						<div className='projects-page-description'>
							<p>After some courses on <a href='https://www.freecodecamp.org/' target='_blank'>freeCodeCamp.org</a>, I have been trying to build up my personal website with React.js. And I hope that some of my elaborate features will make it an <b>unique personal website</b> in the world.</p>
						</div>
						<div className='projects-page-info'>
							<div className='projects-page-skill'>
								<h2># Programming Language & Skills</h2>
								<ul>
									<li>HTML / CSS / JavaScript</li>
									<li>React.js / Babel / SCSS</li>
									<li>firebase</li>
									<li>Webpack / npm</li>
								</ul>
							</div>
							<div className='projects-page-link'>
								<h2># Links</h2>
								<ul>
									<li><a href='#'>Page</a></li>
									<li><a href='#'>Source Code</a></li>
								</ul>
							</div>
						</div>
						<div className='projects-page-gif'>
							<h2># Snapshot</h2>
							<div className='img-wrapper'>
								<img src={PersonalWebsite1}/>
								<img src={PersonalWebsite2}/>
								<img src={PersonalWebsite3}/>
							</div>
						</div>
					</div>
					<div className='projects-page'>
						<div className='projects-page-title'><h1>#2 Draggable Markdown Previewer</h1></div>
						<div className='projects-page-description'>
							<p>This is one simple React project on <a href='https://www.freecodecamp.org/' target='_blank'>freeCodeCamp.org</a>, and I tried to add some additional features to it. You can <b>drag the bar to resize the Editor/Previewer</b> and <b>click the MARKED/SOURCE button to switch the preview mode</b> between markdown and HTML source.</p>
						</div>
						<div className='projects-page-info'>
							<div className='projects-page-skill'>
								<h2># Programming Language & Skills</h2>
								<ul>
									<li>HTML / CSS / JavaScript</li>
									<li>React.js</li>
									<li>Babel / SCSS</li>
									<li>Webpack / npm</li>
								</ul>
							</div>
							<div className='projects-page-link'>
								<h2># Links</h2>
								<ul>
									<li><a href='#'>Page</a></li>
									<li><a href='#'>Source Code</a></li>
								</ul>
							</div>
						</div>
						<div className='projects-page-gif'>
							<h2># Snapshot</h2>
							<div className='img-wrapper'>
								<img src={DraggableMarkdownPreviewer1}/>
								<img src={DraggableMarkdownPreviewer2}/>
								<img src={DraggableMarkdownPreviewer3}/>
							</div>
						</div>
					</div>
					<div className='projects-page'>
						<div className='projects-page-title'><h1>#3 PTTonitor</h1></div>
						<div className='projects-page-description'>
							<p>This is my graduation project in the college. The main purpose of this project is to build up a Query Platform
of user accounts to <b>find out whether there are some different accounts owned by a single person</b>. By analyzing the data of <b>logging IP address</b>, <b>user online time</b>, <b>high
frequency words</b> using in posts, and <b>interactions between users</b>, PTTonitor finally generates
the <b>visual graphics</b> which provide an interactive way of Querying and Searching.</p>
						</div>
						<div className='projects-page-info'>
							<div className='projects-page-skill'>
								<h2># Programming Language & Skills</h2>
								<ul>
									<li>HTML / CSS / JavaScript / d3.js</li>
									<li>Python / Django / SQLite</li>
									<li>Scrapy / Jieba / Telnetlib</li>
									<li>Gensim / Scikit-Learn</li>
								</ul>
							</div>
							<div className='projects-page-link'>
								<h2># Links</h2>
								<ul>
									<li><a href='#'>Demo Video</a></li>
									<li><a href='#'>Source Code</a></li>
								</ul>
							</div>
						</div>
						<div className='projects-page-gif'>
							<h2># Snapshot</h2>
							<div className='img-wrapper'>
								<img src='https://media.giphy.com/media/l4pM35VGqeuL4pfvG/giphy.gif'/>
								<img src='https://media.giphy.com/media/l4pM35VGqeuL4pfvG/giphy.gif'/>
								<img src='https://media.giphy.com/media/l4pM35VGqeuL4pfvG/giphy.gif'/>
							</div>
						</div>
					</div>
				</div>
				<div id='next' className='direction-btn' onMouseOver={()=> this.handleMouseOver('next')} onMouseOut={this.handleMouseOut} onClick={() => this.changePage('next')}>
					<FontAwesomeIcon icon="angle-double-right" className='direction-icon' />
				</div>
			</div>
		);		
	}

}