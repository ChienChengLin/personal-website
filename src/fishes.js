// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'
import Fish1 from './img/svg/fish1.svg';
import Fish2 from './img/svg/fish2.svg';
import Fish3 from './img/svg/fish3.svg';
import Fish4 from './img/svg/fish4.svg';
import Fish5 from './img/svg/fish5.svg';
import Fish6 from './img/svg/fish6.svg';
import Fish7 from './img/svg/fish7.svg';
import Fish8 from './img/svg/fish8.svg';
import Fish9 from './img/svg/fish9.svg';
import Fish10 from './img/svg/fish10.svg';
import Fish11 from './img/svg/fish11.svg';
import Fish12 from './img/svg/fish12.svg';
import Fish13 from './img/svg/fish13.svg';
import Fish14 from './img/svg/fish14.svg';
import Fish15 from './img/svg/fish15.svg';
import Fish16 from './img/svg/fish16.svg';
import Fish17 from './img/svg/fish17.svg';
import Fish18 from './img/svg/fish18.svg';
import Fish19 from './img/svg/fish19.svg';

export default class Fishes extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			fish1: {mount: false, type: Fish1, size: 0},
			fish2: {mount: false, type: Fish2, size: 0},
			fish3: {mount: false, type: Fish3, size: 0},
			fish4: {mount: false, type: Fish4, size: 0},
			fish5: {mount: false, type: Fish5, size: 0},
			fish6: {mount: false, type: Fish6, size: 0},
			fish7: {mount: false, type: Fish7, size: 0},
			fish8: {mount: false, type: Fish8, size: 0},
			fish9: {mount: false, type: Fish9, size: 0},
			fish10: {mount: false, type: Fish10, size: 0},
		};

		this.mountFish = this.mountFish.bind(this);
		this.randomFishType = this.randomFishType.bind(this);
		this.randomFishSize = this.randomFishSize.bind(this);
	}

	mountFish(fishNum){
		let fishSpeedArray = [30000, 35000, 10000, 40000, 25000, 27000, 32000, 8000, 30000, 12000];
		let fishNumInt = Number(fishNum.slice(4, )) - 1;

		let max = 100;
		let min = 1;
		let randomNum = Math.floor(Math.random()*(max-min+1)+min); // generate random number from 1 to 100

		// 100% probability to mount fish
		if(randomNum >= 1) {
			this.setState({
				[fishNum]: {mount: true, type: this.randomFishType(), size: this.randomFishSize()}
			});



			setTimeout(() => {
				this.setState({
					[fishNum]: {mount: false, type: null, size: 0}
				});

				this.mountFish(fishNum);

			}, fishSpeedArray[fishNumInt] + 2000);
		}
	}

	randomFishType(){
		let max = 19;
		let min = 1;
		let randomFishNum = Math.floor(Math.random()*(max-min+1)+min);
		let randomFishType;
		// choose fish type
		if(randomFishNum == 1){
			randomFishType = Fish1;
		}
		else if(randomFishNum == 2){
			randomFishType = Fish2;
		}
		else if(randomFishNum == 3){
			randomFishType = Fish3;
		} 
		else if(randomFishNum == 4){
			randomFishType = Fish4;
		}
		else if(randomFishNum == 5){
			randomFishType = Fish5;
		}
		else if(randomFishNum == 6){
			randomFishType = Fish6;
		}
		else if(randomFishNum == 7){
			randomFishType = Fish7;
		}
		else if(randomFishNum == 8){
			randomFishType = Fish8;
		}
		else if(randomFishNum == 9){
			randomFishType = Fish9;
		}
		else if(randomFishNum == 10){
			randomFishType = Fish10;
		}
		else if(randomFishNum == 11){
			randomFishType = Fish11;
		}
		else if(randomFishNum == 12){
			randomFishType = Fish12;
		}
		else if(randomFishNum == 13){
			randomFishType = Fish13;
		}
		else if(randomFishNum == 14){
			randomFishType = Fish14;
		}
		else if(randomFishNum == 15){
			randomFishType = Fish15;
		}
		else if(randomFishNum == 16){
			randomFishType = Fish16;
		}
		else if(randomFishNum == 17){
			randomFishType = Fish17;
		}
		else if(randomFishNum == 18){
			randomFishType = Fish18;
		}
		else if(randomFishNum == 19){
			randomFishType = Fish19;
		}

		return randomFishType;
	}

	randomFishSize(){
		let max = 100;
		let min = 1;
		let randomNum = Math.floor(Math.random()*(max-min+1)+min);

		if(randomNum >= 1 && randomNum <= 70){ //normal size
			max = 120;
			min = 100;
		}
		else if(randomNum >= 71 && randomNum <= 90){ //big size
			max = 250;
			min = 200;
		}
		else { //small size
			max = 60;
			min = 40;
		}

		let size = Math.floor(Math.random()*(max-min+1)+min);
		return size;
	}

	componentDidMount(){
		this.mountFish('fish1');
		this.mountFish('fish2');
		this.mountFish('fish3');
		this.mountFish('fish4');
		this.mountFish('fish5');
		this.mountFish('fish6');
		this.mountFish('fish7');
		this.mountFish('fish8');
		this.mountFish('fish9');
		this.mountFish('fish10');

	}


	render(){
		return(
			<div id='fishes-container'>
				{this.state.fish1.mount &&
				<ReactCSSTransitionGroup
			      transitionName="fish1"
			      transitionEnter={true}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={30000}
			      transitionEnterTimeout={30000}
			      transitionLeaveTimeout={0}>
						<object data={this.state.fish1.type} id='fish1' className='fish left-fish' key='fish1' style={{width: this.state.fish1.size}}></object>
				</ReactCSSTransitionGroup>}
				{this.state.fish2.mount &&
				<ReactCSSTransitionGroup
			      transitionName="fish2"
			      transitionEnter={true}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={35000}
			      transitionEnterTimeout={35000}
			      transitionLeaveTimeout={0}>
						<object data={this.state.fish2.type} id='fish2' className='fish left-fish' key='fish2' style={{width: this.state.fish2.size}}></object>
				</ReactCSSTransitionGroup>}	
				{this.state.fish3.mount &&
				<ReactCSSTransitionGroup
			      transitionName="fish3"
			      transitionEnter={true}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={10000}
			      transitionEnterTimeout={10000}
			      transitionLeaveTimeout={0}>
						<object data={this.state.fish3.type} id='fish3' className='fish left-fish' key='fish3' style={{width: this.state.fish3.size}}></object>
				</ReactCSSTransitionGroup>}
				{this.state.fish4.mount &&
				<ReactCSSTransitionGroup
			      transitionName="fish4"
			      transitionEnter={true}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={40000}
			      transitionEnterTimeout={40000}
			      transitionLeaveTimeout={0}>
						<object data={this.state.fish4.type} id='fish4' className='fish left-fish' key='fish4' style={{width: this.state.fish4.size}}></object>
				</ReactCSSTransitionGroup>}	
				{this.state.fish5.mount &&
				<ReactCSSTransitionGroup
			      transitionName="fish5"
			      transitionEnter={true}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={25000}
			      transitionEnterTimeout={25000}
			      transitionLeaveTimeout={0}>
						<object data={this.state.fish5.type} id='fish5' className='fish left-fish' key='fish5' style={{width: this.state.fish5.size}}></object>
				</ReactCSSTransitionGroup>}
				{this.state.fish6.mount &&
				<ReactCSSTransitionGroup
			      transitionName="fish6"
			      transitionEnter={true}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={27000}
			      transitionEnterTimeout={27000}
			      transitionLeaveTimeout={0}>
						<object data={this.state.fish6.type} id='fish6' className='fish right-fish' key='fish6' style={{width: this.state.fish6.size}}></object>
				</ReactCSSTransitionGroup>}
				{this.state.fish7.mount &&
				<ReactCSSTransitionGroup
			      transitionName="fish7"
			      transitionEnter={true}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={32000}
			      transitionEnterTimeout={32000}
			      transitionLeaveTimeout={0}>
						<object data={this.state.fish7.type} id='fish7' className='fish right-fish' key='fish7' style={{width: this.state.fish7.size}}></object>
				</ReactCSSTransitionGroup>}
				{this.state.fish8.mount &&
				<ReactCSSTransitionGroup
			      transitionName="fish8"
			      transitionEnter={true}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={8000}
			      transitionEnterTimeout={8000}
			      transitionLeaveTimeout={0}>
						<object data={this.state.fish8.type} id='fish8' className='fish right-fish' key='fish8' style={{width: this.state.fish8.size}}></object>
				</ReactCSSTransitionGroup>}	
				{this.state.fish9.mount &&
				<ReactCSSTransitionGroup
			      transitionName="fish9"
			      transitionEnter={true}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={30000}
			      transitionEnterTimeout={30000}
			      transitionLeaveTimeout={0}>
						<object data={this.state.fish9.type} id='fish9' className='fish right-fish' key='fish9' style={{width: this.state.fish9.size}}></object>
				</ReactCSSTransitionGroup>}
				{this.state.fish10.mount &&
				<ReactCSSTransitionGroup
			      transitionName="fish10"
			      transitionEnter={true}
			      transitionLeave={false}
			      transitionAppear={true}
			      transitionAppearTimeout={12000}
			      transitionEnterTimeout={12000}
			      transitionLeaveTimeout={0}>
						<object data={this.state.fish10.type} id='fish10' className='fish right-fish' key='fish10' style={{width: this.state.fish10.size}}></object>
				</ReactCSSTransitionGroup>}						
			</div>
			
		);		
	}
}
