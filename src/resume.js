// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'
import Colin from './img/Colin.jpg';
import Colin2 from './img/Colin_transparent.png';
import Taiwan from './img/Taiwan.png';

export default class Resume extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentQuote: '',
			quoteMount: false,
			quoteCounter: 0
		};

		this.quoteMarquee = this.quoteMarquee.bind(this);

	}

	quoteMarquee(){
		const quoteArray = [
			'Never a failure, Always a lesson.',
			'It\'s hard sailing when there is no wind.',
			'Wasting time is robbing oneself.',
			'The secret of success is constancy of purpose.',
			'The shortest answer is doing.'
		];

		this.setState({
			currentQuote: quoteArray[this.state.quoteCounter],
			quoteMount: true
		}, () => {
			if(this.state.quoteCounter >= 4){
				this.setState({
					quoteCounter: 0
				});				
			}
			else{
				this.setState({
					quoteCounter: this.state.quoteCounter + 1
				});
			}

		});

		setTimeout(() => {
			this.setState({
				quoteMount: false
			});
			this.quoteMarquee();
		}, 15000);



	}

	componentDidMount(){
		this.quoteMarquee();
	}	

	render(){
		return(
			<div id='resume' className='page'>
				<div id='img-and-information'>
					<div id='img'>
						<div id='img-wrapper'>
							<img src={Colin2} id='my-img' />
						</div>
						<h1>Colin Lin</h1>					
					</div>
					<div id='information'>
						<p id='info'>
							bightm80144@gmail.com • +886-952-991-023 • Taiwan <img src={Taiwan} id='taiwan-img'/>
						</p>
						{this.state.quoteMount &&
							<ReactCSSTransitionGroup
								transitionName="quote"
								transitionEnter={true}
								transitionLeave={false}
								transitionAppear={true}
								transitionAppearTimeout={15000}
								transitionEnterTimeout={15000}
								transitionLeaveTimeout={0}>
								<p id='quote' className='quote-position' key='quote'>
									{this.state.currentQuote}
								</p>
							</ReactCSSTransitionGroup>
						}
						<p id='quote-space'>{'space'}</p>
						
					</div>
				</div>

				<div id='education'>
					<h2>Education</h2>
					<hr/>
					<div className='education-content'>
						<div className='education-term'>
							<h3>2013.9 - 2018.1</h3>
						</div>
						<div className='education-information'>	
							<h4>National Cheng Kung University,</h4>
							<h4>Computer Science</h4>
							<h4>國立成功大學 資訊工程學系</h4>
						</div>
					</div>
					<div className='education-content'>
						<div className='education-term'>
							<h3>2010.9 - 2013.6</h3>
						</div>
						<div className='education-information'>
							<h4>Tainan First Senior High School</h4>
							<h4>國立台南一中</h4>
						</div>
					</div>
				</div>

				<div id='skill'>
					<h2>Skill</h2>
					<hr/>
					<div id='skill-content-wrapper'>
						<div id='skill-content-left' className='skill-content'>
							<h5>Web Design</h5>
							<div id='skill-information-wrapper'>
								<div id='skill-information-left' className='skill-information'>
									<h6>Front-end</h6>
									<ul>
										<li><span>HTML / CSS / JavaScript</span></li>
										<li><span>Responsive Web Design</span></li>
										<li><span>React / Redux</span></li>
										<li><span>d3 / Bootstrap / jQuery</span></li>
										<li><span>Sass / SCSS</span></li>
										<li><span>npm / Webpack / Github</span></li>
									</ul>
								</div>
								<div id='skill-information-right' className='skill-information'>
								<h6>Back-end</h6>
									<ul>
										<li><span>Python</span></li>
										<li><span>Python Django</span></li>
									</ul>
								</div>	
							</div>		
						</div>
						<div id='skill-content-right' className='skill-content'>
							<h5>Data Analysis</h5>
							<div id='skill-information-wrapper'>
								<div className='skill-information'>
									<h6>Text Mining</h6>
									<ul>
										<li><span>Python</span></li>
										<li><span>Gensim / Scikit-Learn</span></li>
										<li><span>Crawler (Scrapy)</span></li>
									</ul>
								</div>
							</div>					
						</div>
					</div>
				</div>
			</div>
		);		
	}

}