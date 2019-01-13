
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './components/aboutMe'
import Contact from './components/contact'
import Projects from './components/projects'
import LandingPage from './components/landingPage'
import MyFooter from './components/myFooter'
import Skills from './components/skills'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className = "header-color" title="Qiaoran's Portfolio" scroll>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutMe">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Menu">
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutMe">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <LandingPage/>
                  <AboutMe/>
                  <Skills/>

                  <Projects/>

                  <Contact/>
                  {/*<MyFooter/>*/}
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
