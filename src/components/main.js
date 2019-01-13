import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AboutMe from './aboutMe';
import Contact from './contact';
import LandingPage from './landingPage';
import Projects from './projects';




const Main = () => (
	<Switch>
		<Route exact path = "/" component = {LandingPage}/>
		<Route path = "/aboutMe" component = {AboutMe}/>
		<Route path = "/contact" component = {Contact}/>
		<Route path = "/projects" component = {Projects}/>

	</Switch>
)

export default Main;