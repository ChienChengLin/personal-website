// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'


export default class Interests extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			percent: 0
		}
		this.handleScroll = this.handleScroll.bind(this);
		this.bothEndsTransition = this.bothEndsTransition.bind(this);
		this.linearMapping = this.linearMapping.bind(this);
		this.backgroundImgTransition = this.backgroundImgTransition.bind(this);
		this.introTextTransition = this.introTextTransition.bind(this);
	}

	bothEndsTransition(val, max, min, nth_child, reverse){
		if(reverse){
			let percent = (max - val) / (max - min);
			let div = document.getElementsByClassName('interests-page')[nth_child];
			div.style.backgroundColor = `rgba(0, 0, 0, ${percent})`;

			percent = (val - min) / (max - min);
			div = document.getElementsByClassName('scroll-text')[1];
			div.style.fontSize = `${window.innerWidth * 0.04 * percent}`;
		}		
		else{
			let percent = (val - min) / (max - min);
			let div = document.getElementsByClassName('interests-page')[nth_child];
			div.style.backgroundColor = `rgba(0, 0, 0, ${percent})`;			
		
			percent = (max - val) / (max - min);
			div = document.getElementsByClassName('scroll-text')[0];
			div.style.fontSize = `${window.innerWidth * 0.04 * percent}`;
		}

	}

	linearMapping(val, A, B, a, b){
		return (val - A) * (b - a) / (B - A) + a;
	}

	backgroundImgTransition(val, max, mid, min, nth_child){
		if(val < mid){
			let percent = (val - min) / (mid - min);
			percent = this.linearMapping(percent, 0, 1, 0.6, 1);
			let div = document.getElementsByClassName('interests-page')[nth_child];
			div.style.opacity = `${percent}`;
		}
		else {
			let percent = (max - val) / (max - mid);
			percent = this.linearMapping(percent, 0, 1, 0.6, 1);
			let div = document.getElementsByClassName('interests-page')[nth_child];
			div.style.opacity = `${percent}`;
		}
	}

	introTextTransition(val, max, mid, min, nth_child){
		if(val < mid){
			let percent = (mid - val) / (mid - min);
			let div = document.getElementsByClassName('intro-text')[nth_child];
			div.style.left = `${window.innerHeight * 0.1 * percent}`;
		}
		else {
			let percent = (val - mid) / (max - mid);
			let div = document.getElementsByClassName('intro-text')[nth_child];
			div.style.left = `${(-1) * window.innerHeight * 0.5 * percent}`;
		}
	}	

	handleScroll(){
		// prevent bugs occur in Chrome
		document.querySelector('#interests').scrollIntoView();

		let el = document.getElementById('interests-wrapper');
		let totalScrollHeight = el.scrollHeight - el.clientHeight;
		let currentScrollHeight = el.scrollTop;
		
		let percent = currentScrollHeight / totalScrollHeight;
		let percentPartition = el.clientHeight / totalScrollHeight;
		
		//percent = Math.min(1,Math.max(percent, 0))*100;
		this.setState({
			percent: percent
		});

		if(this.state.percent >= 0 && this.state.percent < percentPartition){
			this.bothEndsTransition(this.state.percent, percentPartition, 0, 0, false);
			this.backgroundImgTransition(this.state.percent, percentPartition * 2, percentPartition, 0, 1);
			this.introTextTransition(this.state.percent, percentPartition * 2, percentPartition, 0, 0);
		}
		else if(this.state.percent >= percentPartition && this.state.percent < percentPartition * 2){
			this.backgroundImgTransition(this.state.percent, percentPartition * 2, percentPartition, 0, 1);
			this.backgroundImgTransition(this.state.percent, percentPartition * 3, percentPartition * 2, percentPartition * 1, 2);
			this.introTextTransition(this.state.percent, percentPartition * 2, percentPartition , 0, 0);
			this.introTextTransition(this.state.percent, percentPartition * 3, percentPartition * 2, percentPartition * 1, 1);
		}
		else if(this.state.percent >= percentPartition * 2 && this.state.percent < percentPartition * 3){
			this.backgroundImgTransition(this.state.percent, percentPartition * 3, percentPartition * 2, percentPartition * 1, 2);
			this.backgroundImgTransition(this.state.percent, percentPartition * 4, percentPartition * 3, percentPartition * 2, 3);
			this.introTextTransition(this.state.percent, percentPartition * 3, percentPartition * 2, percentPartition * 1, 1);
			this.introTextTransition(this.state.percent, percentPartition * 4, percentPartition * 3, percentPartition * 2, 2);
		}
		else if(this.state.percent >= percentPartition * 3 && this.state.percent < percentPartition * 4){
			this.backgroundImgTransition(this.state.percent, percentPartition * 4, percentPartition * 3, percentPartition * 2, 3);
			this.backgroundImgTransition(this.state.percent, percentPartition * 5, percentPartition * 4, percentPartition * 3, 4);
			this.introTextTransition(this.state.percent, percentPartition * 4, percentPartition * 3, percentPartition * 2, 2);
			this.introTextTransition(this.state.percent, percentPartition * 5, percentPartition * 4, percentPartition * 3, 3);
		}
		else if(this.state.percent >= percentPartition * 4 && this.state.percent < percentPartition * 5){
			this.backgroundImgTransition(this.state.percent, percentPartition * 5, percentPartition * 4, percentPartition * 3, 4);
			this.backgroundImgTransition(this.state.percent, percentPartition * 6, percentPartition * 5, percentPartition * 4, 5);
			this.introTextTransition(this.state.percent, percentPartition * 5, percentPartition * 4, percentPartition * 3, 3);
			this.introTextTransition(this.state.percent, percentPartition * 6, percentPartition * 5, percentPartition * 4, 4);
		}
		else {
			this.bothEndsTransition(this.state.percent, percentPartition * 6, percentPartition * 5, 6, true);
			this.backgroundImgTransition(this.state.percent, percentPartition * 6, percentPartition * 5, percentPartition * 4, 5);
			this.introTextTransition(this.state.percent, percentPartition * 6, percentPartition * 5, percentPartition * 4, 4);
		}	
	}


	componentDidMount(){
		if(window.innerWidth > 767){
			document.getElementById('interests-wrapper').addEventListener('scroll', this.handleScroll);			
		}		
	}

	
	

	render(){
		return(
       		<div id='interests' className='page'>
				<div id="interests-wrapper">
				    <div className="interests-page">
				    	<div className='scroll-text'>
				    		Scroll Down
				    	</div>
				    </div>
				    <div className="interests-page">
				    	<div className='intro-text'>
				    		Travel
				    		<p>I love traveling and recording life with photos</p>
				    	</div>
				    </div>
				    <div className="interests-page">
				    	<div className='intro-text'>
				    		Singing
				    		<p>Sometimes I think singing is more expressive than just talking</p>
				    	</div>
				    </div>
				    <div className="interests-page">
				    	<div className='intro-text'>
				    		Food
				    		<p>When I feel depressed, the sweets can heal me</p>
				    	</div>
				    </div>
				    <div className="interests-page">
				    	<div className='intro-text'>
				    		Workout
				    		<p>After eating too much, it's time to burn extra calories</p>
				    	</div>
				    </div>
				    <div className="interests-page">
				    	<div className='intro-text'>
				    		Coding
				    		<p>Coding, indeed</p>
				    	</div>
				    </div>
				    <div className="interests-page">
				    	<div className='scroll-text'>
				    		Scroll Up
				    	</div>
				    </div>
				</div>
			</div>           		
		);			
	}

}