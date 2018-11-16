// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'
// import source modules
import Navbar from './navbar';
import Container from './container';
import Resume from './resume';
import Projects from './projects';
import Interests from './interests';
import Contact from './contact';
import Menu from './menu';
import Fishes from './fishes';




const SCSS_STYLE = require('./style.scss');


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentPage: 'home',
			currentQuote: 'Never a failure, Always a lesson.',
			quotePosition: 0
		};

		this.quoteMarquee = this.quoteMarquee.bind(this);
		this.scrollToPage = this.scrollToPage.bind(this);

	}

	quoteMarquee(){
		let container = document.getElementById('information');
		let quote = document.getElementById('quote');
		let startPosition = - (container.clientWidth + quote.clientWidth) / 2;
		let endPosition = - startPosition;
		const quoteArray = [
			'Never a failure, Always a lesson.',
			'It\'s hard sailing when there is no wind.',
			'Wasting time is robbing oneself.',
			'The secret of success is constancy of purpose.',
			'The shortest answer is doing.'
		];
		let quoteCounter = 0;
		

		quote.style.left = startPosition;
		this.setState({quotePosition: startPosition});
		setInterval(()=>{
			if(this.state.quotePosition + 1 == endPosition){
				container = document.getElementById('information');
				quote = document.getElementById('quote');
				startPosition = - (container.clientWidth + quote.clientWidth) / 2;
				endPosition = - startPosition;			
				
				quoteCounter++;
				if(quoteCounter > 4) quoteCounter = 0;
				this.setState({currentQuote: quoteArray[quoteCounter]});
				
				quote.style.left = startPosition;
				this.setState({quotePosition: startPosition});				
			}
			else {
				quote.style.left = this.state.quotePosition + 1;
				this.setState({quotePosition: this.state.quotePosition + 1});				
			}
		}, 10);
	}

	scrollToPage(pageID){
		document.querySelector(pageID).scrollIntoView({behavior: 'smooth'});
		this.setState({
			currentPage: pageID.slice(1, )
		});
	}

	componentDidMount(){
		this.quoteMarquee();
	}





	render(){
		return(
			<div id='outer-wrapper'>
				<Navbar />
				<div id='wrapper'>
					<Container />
					<Resume currentQuote={this.state.currentQuote}/>
					<Projects />
					<Interests />
					<Contact />
				</div>
				<Menu onClick={this.scrollToPage} />
				<Fishes />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
