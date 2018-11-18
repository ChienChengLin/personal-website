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
			currentPage: 'home'
		};

		this.scrollToPage = this.scrollToPage.bind(this);

	}

	scrollToPage(pageID){
		document.querySelector(pageID).scrollIntoView({behavior: 'smooth'});
		this.setState({
			currentPage: pageID.slice(1, )
		});
	}

	componentDidMount(){
		
	}

	render(){
		return(
			<div id='outer-wrapper'>
				<Navbar />
				<div id='wrapper'>
					<Container />
					<Resume />
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
