// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'

export default class Container extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentColor: 0,
			flyingTextMount1: true,
			flyingTextMount2: false
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
		// color transition
		setInterval(() => {
			this.colorTransition();
		}, 5000);


		// flying text
		let currentFlyingText = 1;

		setTimeout(() => {
			this.setState({
				flyingTextMount1: false,
				flyingTextMount2: false
			});
		}, 7000);
		
		setInterval(() => {
			if(currentFlyingText == 1){
				this.setState({
					flyingTextMount1: false,
					flyingTextMount2: true
				});
				currentFlyingText = 2;
			}
			else{
				this.setState({
					flyingTextMount1: true,
					flyingTextMount2: false
				});
				currentFlyingText = 1;
			}


			setTimeout(() => {
				this.setState({
					flyingTextMount1: false,
					flyingTextMount2: false,
				});
			}, 7000);
		}, 11000);
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
					<FlyingText flyingTextMount1 = {this.state.flyingTextMount1} flyingTextMount2 = {this.state.flyingTextMount2} />
				</div>
			</div>
		);		
	}
}

function FlyingText(props) {	
	return(
		<ul>
			<ReactCSSTransitionGroup
		      transitionName="text1"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={4000}
		      transitionEnterTimeout={4000}
		      transitionLeaveTimeout={4000}>		
				{props.flyingTextMount1 && <li key='1'>A</li>}
			</ReactCSSTransitionGroup>		
				{props.flyingTextMount1 && <li key='2'>  </li>}
			<ReactCSSTransitionGroup
		      transitionName="text2"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={3700}
		      transitionEnterTimeout={3700}
		      transitionLeaveTimeout={3700}>		
				{props.flyingTextMount1 && <li key='3'>W</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text3"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={3400}
		      transitionEnterTimeout={3400}
		      transitionLeaveTimeout={3400}>		
				{props.flyingTextMount1 && <li key='4'>e</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text4"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={3100}
		      transitionEnterTimeout={3100}
		      transitionLeaveTimeout={3100}>		
				{props.flyingTextMount1 && <li key='5'>b</li>}
			</ReactCSSTransitionGroup>
				{props.flyingTextMount1 && <li>  </li>}
			<ReactCSSTransitionGroup
		      transitionName="text5"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={2800}
		      transitionEnterTimeout={2800}
		      transitionLeaveTimeout={2800}>		
				{props.flyingTextMount1 && <li key='6'>D</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text6"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={2500}
		      transitionEnterTimeout={2500}
		      transitionLeaveTimeout={2500}>		
				{props.flyingTextMount1 && <li key='7'>e</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text7"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={2200}
		      transitionEnterTimeout={2200}
		      transitionLeaveTimeout={2200}>		
				{props.flyingTextMount1 && <li key='8'>v</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text8"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={1900}
		      transitionEnterTimeout={1900}
		      transitionLeaveTimeout={1900}>		
				{props.flyingTextMount1 && <li key='9'>e</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text9"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={1600}
		      transitionEnterTimeout={1600}
		      transitionLeaveTimeout={1600}>		
				{props.flyingTextMount1 && <li key='10'>l</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text10"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={1300}
		      transitionEnterTimeout={1300}
		      transitionLeaveTimeout={1300}>		
				{props.flyingTextMount1 && <li key='11'>o</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text11"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={1000}
		      transitionEnterTimeout={1000}
		      transitionLeaveTimeout={1000}>		
				{props.flyingTextMount1 && <li key='12'>p</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text12"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={700}
		      transitionEnterTimeout={700}
		      transitionLeaveTimeout={700}>		
				{props.flyingTextMount1 && <li key='13'>e</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text13"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={400}
		      transitionEnterTimeout={400}
		      transitionLeaveTimeout={400}>		
				{props.flyingTextMount1 && <li key='14'>r</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text14"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={4000}
		      transitionEnterTimeout={4000}
		      transitionLeaveTimeout={4000}>		
				{props.flyingTextMount2 && <li key='15'>M</li>}
			</ReactCSSTransitionGroup>		
			<ReactCSSTransitionGroup
		      transitionName="text15"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={3700}
		      transitionEnterTimeout={3700}
		      transitionLeaveTimeout={3700}>		
				{props.flyingTextMount2 && <li key='16'>a</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text16"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={3400}
		      transitionEnterTimeout={3400}
		      transitionLeaveTimeout={3400}>		
				{props.flyingTextMount2 && <li key='17'>k</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text17"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={3100}
		      transitionEnterTimeout={3100}
		      transitionLeaveTimeout={3100}>		
				{props.flyingTextMount2 && <li key='18'>e</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text18"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={2800}
		      transitionEnterTimeout={2800}
		      transitionLeaveTimeout={2800}>		
				{props.flyingTextMount2 && <li key='19'>s</li>}
			</ReactCSSTransitionGroup>
				{props.flyingTextMount2 && <li key='20'>  </li>}
			<ReactCSSTransitionGroup
		      transitionName="text19"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={2500}
		      transitionEnterTimeout={2500}
		      transitionLeaveTimeout={2500}>		
				{props.flyingTextMount2 && <li key='21'>W</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text20"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={2200}
		      transitionEnterTimeout={2200}
		      transitionLeaveTimeout={2200}>		
				{props.flyingTextMount2 && <li key='22'>e</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text21"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={1900}
		      transitionEnterTimeout={1900}
		      transitionLeaveTimeout={1900}>		
				{props.flyingTextMount2 && <li key='23'>b</li>}
			</ReactCSSTransitionGroup>
				{props.flyingTextMount2 && <li key='24'>  </li>}
			<ReactCSSTransitionGroup
		      transitionName="text22"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={1600}
		      transitionEnterTimeout={1600}
		      transitionLeaveTimeout={1600}>		
				{props.flyingTextMount2 && <li key='25'>B</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text23"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={1300}
		      transitionEnterTimeout={1300}
		      transitionLeaveTimeout={1300}>		
				{props.flyingTextMount2 && <li key='26'>e</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text24"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={1000}
		      transitionEnterTimeout={1000}
		      transitionLeaveTimeout={1000}>		
				{props.flyingTextMount2 && <li key='27'>t</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text25"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={700}
		      transitionEnterTimeout={700}
		      transitionLeaveTimeout={700}>		
				{props.flyingTextMount2 && <li key='28'>t</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text26"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={400}
		      transitionEnterTimeout={400}
		      transitionLeaveTimeout={400}>		
				{props.flyingTextMount2 && <li key='29'>e</li>}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
		      transitionName="text27"
		      transitionEnter={true}
		      transitionLeave={true}
		      transitionAppear={true}
		      transitionAppearTimeout={100}
		      transitionEnterTimeout={100}
		      transitionLeaveTimeout={100}>		
				{props.flyingTextMount2 && <li key='30'>r</li>}
			</ReactCSSTransitionGroup>
		</ul>				
	);
}