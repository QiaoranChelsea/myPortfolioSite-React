import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class LandingPage extends Component{
	render(){
		return (
			<div style = {{width:'100%', margin:'auto'}}> 
				<Grid className = "landing-grid">
					<Cell col={12}>
						<img
							src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/011_girl_avatar_profile_woman_hat_flower-512.png"
							alt= "avatar"
							className = "avatar-img"
						/> 
						<div className = "banner-text">
							<h1>Full Stack Web Developer</h1>
							<hr/>
							<p>HTML/CSS | JavaScript | React | NodeJS | Express | MySql </p>
							
							<div class= "social-links">
								{/*LinkedIn*/}
								<a href = "http://google.com" rel = "noopener noreferrer" target="_blank">  
									<i className = "fa fa-linkedin"  aria-hidden="true"/>
								</a> 

								{/*GitHub*/}
								<a href = "http://google.com" rel = "noopener noreferrer" target="_blank">  
									<i className = "fa fa-github"  aria-hidden="true"/>
								</a> 
								

								{/*Instgram*/}
								<a href = "https://www.instagram.com/camerworld_lqr/" rel = "noopener noreferrer" target="_blank">  
									<i className = "fa fa-instagram"  aria-hidden="true"/>
								</a> 
							</div>

						</div>

					</Cell>
				</Grid>
			</div>

		)
	}

}

export default LandingPage