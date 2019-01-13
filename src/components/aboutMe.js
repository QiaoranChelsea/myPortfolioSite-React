import React, {Component} from 'react';
import {Cell, Grid} from 'react-mdl'

class AboutMe extends Component{
	render(){
		return (
			<div className = "about-section" >
				<Grid>
					<Cell col = {4}></Cell>
					<Cell col = {4}> 
						<h2>About Me</h2>
						<hr/>

					</Cell>
					<Cell col = {4}></Cell>
				</Grid>

				<Grid className ="about-grid">
					<Cell col ={6} >
						<img 
							src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/011_girl_avatar_profile_woman_hat_flower-512.png"
							alt ="avatar"
							style={{height:'250px'}}
						/>

					</Cell>					
					<Cell col ={6} >
							<p style={{fontSize: '20px', width:'75%', margin:'auto', paddingTop:'2em' }}> 
								ddddhese example sentences are selected automatically 
							from various online news sources to reflect current usage of the word 
							'introduction.' Views expressed in the examples do not represent the 
							op
							</p>	

					</Cell>					
				</Grid>

			</div>
		)
	}

}

export default AboutMe