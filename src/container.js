// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'

export default class Container extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentColor: 0
		};

		this.colorTransition = this.colorTransition.bind(this);
	}	



	colorTransition(){
		let colorArray = [
			'rgba(248, 248, 248, 0.7)',
			'rgba(26, 69, 79, 0.7)',
			'rgba(168, 164, 114, 0.7)',
			'rgba(47, 83, 122, 0.7)'	
		];
		let content = document.getElementById('content');
		let nextColor = this.state.currentColor + 1;
		
		if(nextColor > 3) nextColor = 0;
		this.setState({
			currentColor: nextColor
		});
		content.style.backgroundColor = colorArray[nextColor];

	}

	componentDidMount(){
		setInterval(() => {
			this.colorTransition();
		}, 5000);
	}

	render(){
		return(
			<div id="container" className='page'>
				<div id='content'>
					<ReactCSSTransitionGroup
				      transitionName="text"
				      transitionEnter={false}
				      transitionLeave={false}
				      transitionAppear={true}
				      transitionAppearTimeout={3000}>
				      	<h2>Hey, I'm</h2>
				    </ReactCSSTransitionGroup> 	
					<ReactCSSTransitionGroup
				      transitionName="text0"
				      transitionEnter={false}
				      transitionLeave={false}
				      transitionAppear={true}
				      transitionAppearTimeout={3000}>					
						<h1>Colin</h1>
				    </ReactCSSTransitionGroup>		
						<ul>
						<ReactCSSTransitionGroup
					      transitionName="text1"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={4000}
					      transitionLeaveTimeout={4000}>		
							<li key='1'>A</li>
						</ReactCSSTransitionGroup>		
							<li key='2'>  </li>
						<ReactCSSTransitionGroup
					      transitionName="text2"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={3700}
					      transitionLeaveTimeout={3700}>		
							<li key='3'>W</li>
						</ReactCSSTransitionGroup>
						<ReactCSSTransitionGroup
					      transitionName="text3"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={3400}
					      transitionLeaveTimeout={3400}>		
							<li key='4'>e</li>
						</ReactCSSTransitionGroup>
						<ReactCSSTransitionGroup
					      transitionName="text4"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={3100}
					      transitionLeaveTimeout={3100}>		
							<li key='5'>b</li>
						</ReactCSSTransitionGroup>
							<li>  </li>
						<ReactCSSTransitionGroup
					      transitionName="text5"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={2800}
					      transitionLeaveTimeout={2800}>		
							<li key='6'>D</li>
						</ReactCSSTransitionGroup>
						<ReactCSSTransitionGroup
					      transitionName="text6"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={2500}
					      transitionLeaveTimeout={2500}>		
							<li key='7'>e</li>
						</ReactCSSTransitionGroup>
						<ReactCSSTransitionGroup
					      transitionName="text7"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={2200}
					      transitionLeaveTimeout={2200}>		
							<li key='8'>v</li>
						</ReactCSSTransitionGroup>
						<ReactCSSTransitionGroup
					      transitionName="text8"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={1900}
					      transitionLeaveTimeout={1900}>		
							<li key='9'>e</li>
						</ReactCSSTransitionGroup>
						<ReactCSSTransitionGroup
					      transitionName="text9"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={1600}
					      transitionLeaveTimeout={1600}>		
							<li key='10'>l</li>
						</ReactCSSTransitionGroup>
						<ReactCSSTransitionGroup
					      transitionName="text10"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={1300}
					      transitionLeaveTimeout={1300}>		
							<li key='11'>o</li>
						</ReactCSSTransitionGroup>
						<ReactCSSTransitionGroup
					      transitionName="text11"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={1000}
					      transitionLeaveTimeout={1000}>		
							<li key='12'>p</li>
						</ReactCSSTransitionGroup>
						<ReactCSSTransitionGroup
					      transitionName="text12"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={700}
					      transitionLeaveTimeout={700}>		
							<li key='13'>e</li>
						</ReactCSSTransitionGroup>
						<ReactCSSTransitionGroup
					      transitionName="text13"
					      transitionEnter={false}
					      transitionLeave={true}
					      transitionAppear={true}
					      transitionAppearTimeout={400}
					      transitionLeaveTimeout={400}>		
							<li key='14'>r</li>
						</ReactCSSTransitionGroup>					
					</ul>
				</div>
			</div>
		);		
	}

}