// import node modules
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'jquery'
import firebase from 'firebase';
import dateFormat from 'dateFormat';


export default class Contact extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			username: '',
			password: '',
			adminIsLogin: false,
			currentAdmin: '',
			reply: {}
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);		
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.login_success_func = this.login_success_func.bind(this);
		this.login_error_func = this.login_error_func.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.handleReplyChange = this.handleReplyChange.bind(this);
		this.handleReply = this.handleReply.bind(this);
		
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyBYWG5Obmy1L-X2xFCkDG21cSu2htGhSWg",
			authDomain: "personal-website-8701a.firebaseapp.com",
			databaseURL: "https://personal-website-8701a.firebaseio.com",
			projectId: "personal-website-8701a",
			storageBucket: "personal-website-8701a.appspot.com",
			messagingSenderId: "547365748592"
		};
		firebase.initializeApp(config);
	}

	componentDidMount(){
	
	}

	handleNameChange(event){
		this.setState({name: event.target.value});
	}

	handleEmailChange(event){
		this.setState({email: event.target.value});
	}

	handleMessageChange(event){
		this.setState({message: event.target.value});
	}

	handleSubmit(event){
	    event.preventDefault();
	    let currentDate = new Date();
	    let datetime = dateFormat(currentDate);

	    let dbCon = firebase.database().ref('/messages');
	    dbCon.push({
	    	name: this.state.name,
	    	email: this.state.email,
	    	message: this.state.message,
	    	datetime: datetime,
	    	comment: ''
	    });

	    this.setState({
	    	name: '',
	    	email: '',
	    	message: ''
	    });	

	    
	    // scroll to the bottom of message list
	    $('#message-list-wrapper').animate({
	        scrollTop: document.getElementById('message-list-wrapper').scrollHeight
	    }, 500);
	    
	}

	handleUsernameChange(event){
		this.setState({username: event.target.value});
	}

	handlePasswordChange(event){
		this.setState({password: event.target.value});
	}

	login_error_func(error){
		let errorCode     = error.code;
		let errorMessage  = error.message;
		alert("Username not found or wrong password.");
	}

	login_success_func(error){
		alert("Login Successfully!");

		this.setState({
			username: '',
			password: '',
			adminIsLogin: true,
			currentAdmin: firebase.auth().currentUser.email
		});
	}

	handleLogin(event){
	    event.preventDefault();

	    let username = this.state.username;
	    let password = this.state.password; 
	    firebase.auth().signInWithEmailAndPassword(username, password).then(this.login_success_func).catch(this.login_error_func);
	}

	handleLogout(event){
		event.preventDefault();

	    firebase.auth().signOut().then(function() {
	        alert("Admin signs out!");
	    }, function(error) {
	    	alert("Admin signs out error!");
	    });

	    this.setState({
	    	adminIsLogin: false,
	    	currentAdmin: ''
	    });
	}

	handleReplyChange(event){
		let newReply = Object.assign({}, this.state.reply);
		newReply[event.target.name] = event.target.value;
		this.setState({
			reply: newReply
		});
	}

	handleReply(event){
	    let currentDate = new Date();
	    let datetime = dateFormat(currentDate);

		let dbCon = firebase.database().ref('/messages/' + event.target.name);	
		dbCon.update({
			comment: this.state.reply[event.target.name],
			replyDatetime: datetime
		});

		let deleteReply = Object.assign({}, this.state.reply);
		delete deleteReply[event.target.name];
		this.setState({reply: deleteReply});  
	}



	render(){
		let dbCon = firebase.database().ref('/messages');
	    let messages = [];
	    dbCon.on('value', snapshot => {
	    	snapshot.forEach((childSnapshot) => {
    			if(this.state.adminIsLogin){
					if(childSnapshot.val().comment != ''){
		     			messages.push(
							<ReactCSSTransitionGroup
							  transitionName="message-block"
							  transitionEnter={false}
							  transitionLeave={false}
							  transitionAppear={true}
							  transitionAppearTimeout={2000}>			
				    			<div className='message-block' key={childSnapshot.key}>
					    			<div className='message-author'>{childSnapshot.val().name}</div>
					    			<div className='message-datetime'>{childSnapshot.val().datetime}</div>
					    			<div className='message-text'>{childSnapshot.val().message}</div>
					    			<div className='message-reply-wrapper'>
						    			<div className='message-reply-author'>{'Colin'}</div>
						    			<div className='message-reply-datetime'>{childSnapshot.val().replyDatetime}</div>
						    			<div className='message-reply-text'>{childSnapshot.val().comment}</div>
				    				</div>
				    			</div>
			    			</ReactCSSTransitionGroup>	
		    			);						
					}
					else{
		     			messages.push(
							<ReactCSSTransitionGroup
							  transitionName="message-block"
							  transitionEnter={false}
							  transitionLeave={false}
							  transitionAppear={true}
							  transitionAppearTimeout={2000}>			
				    			<div className='message-block' key={childSnapshot.key}>
					    			<div className='message-author'>{childSnapshot.val().name}</div>
					    			<div className='message-datetime'>{childSnapshot.val().datetime}</div>
					    			<div className='message-text'>{childSnapshot.val().message}</div>
					    			<textarea className='message-reply-input' name={childSnapshot.key} value={this.state.reply[childSnapshot.key]} onChange={this.handleReplyChange} placeholder='Reply here' />
				    				<button className='message-reply-submit' name={childSnapshot.key} type="submit" value="Reply-Submit" onClick={this.handleReply}>Reply</button>
				    			</div>
			    			</ReactCSSTransitionGroup>	
		    			);
					}	   				
    			}
    			else{
    				if(childSnapshot.val().comment != ''){
		     			messages.push(
							<ReactCSSTransitionGroup
							  transitionName="message-block"
							  transitionEnter={false}
							  transitionLeave={false}
							  transitionAppear={true}
							  transitionAppearTimeout={2000}>			
				    			<div className='message-block' key={childSnapshot.key}>
					    			<div className='message-author'>{childSnapshot.val().name}</div>
					    			<div className='message-datetime'>{childSnapshot.val().datetime}</div>
					    			<div className='message-text'>{childSnapshot.val().message}</div>
					    			<div className='message-reply-wrapper'>
						    			<div className='message-reply-author'>{'Colin'}</div>
						    			<div className='message-reply-datetime'>{childSnapshot.val().replyDatetime}</div>
						    			<div className='message-reply-text'>{childSnapshot.val().comment}</div>
				    				</div>
				    			</div>
			    			</ReactCSSTransitionGroup>	
		    			); 
    				}
    				else{
		     			messages.push(
							<ReactCSSTransitionGroup
							  transitionName="message-block"
							  transitionEnter={false}
							  transitionLeave={false}
							  transitionAppear={true}
							  transitionAppearTimeout={2000}>			
				    			<div className='message-block' key={childSnapshot.key}>
					    			<div className='message-author'>{childSnapshot.val().name}</div>
					    			<div className='message-datetime'>{childSnapshot.val().datetime}</div>
					    			<div className='message-text'>{childSnapshot.val().message}</div>
				    			</div>
			    			</ReactCSSTransitionGroup>	
		    			);     					
    				}
  				
    			}

	    	});	    	
	    });

		return( 
			<div id='contact' className='page'>
				<div id='message-input'>
					<div id='message-input-textarea'>
						<h1>LEAVE A RESPONSE</h1>
						<form onSubmit={this.handleSubmit}>
							<input id='name' type="text" name="name" value={this.state.name} onChange={this.handleNameChange} placeholder='Enter your name here' maxLength='20' required />
							<input id='email' type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} placeholder='Enter your email here' required />
							<textarea id='message' value={this.state.message} onChange={this.handleMessageChange} placeholder='Leave your response here' maxLength='500' required />
							<button id='submit' type="submit" value="Submit">Submit</button>
						</form>	
					</div>
					<div id='login-as-admin'>
						{this.state.adminIsLogin ? 
							(<div>
								<h1>NOW LOGIN:</h1>
								<h1>{this.state.currentAdmin}</h1>
								<button id='logout' type="submit" value="Logout" onClick={this.handleLogout}>Logout</button>	
							</div>):
							(<div>
								<h1>LOGIN AS ADMIN</h1>
								<form onSubmit={this.handleLogin}>
									<input id='username' type="email" name="email" value={this.state.username} onChange={this.handleUsernameChange} placeholder='Enter your username here' required />
									<input id='password' type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder='Enter your password here' required />
									<button id='login' type="submit" value="Login">Login</button>
								</form>
							</div>)
						}					
					</div>
				</div>
				<div id='message-list'>
					<h2>{messages.length.toString() + ' COMMENTS'}</h2>
					<hr></hr>
					<div id='message-list-wrapper'>
						{messages}
					</div>
				</div>
			</div>
		);		
	}

}