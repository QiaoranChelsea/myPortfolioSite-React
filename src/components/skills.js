import React, {Component} from 'react';
import {Cell, Grid, List, ListItem, ListItemContent} from 'react-mdl'


class Skills extends Component{
	render(){
		return (
			<div className = "skills-section" >
				<Grid>
					<Cell col = {4}></Cell>
					<Cell col = {4}> 
						<h2>Skills</h2>
						<hr/>

					</Cell>
					<Cell col = {4}></Cell>
				</Grid>

				<Grid className ="about-grid">
					<Cell col ={4} >
						<h4> Front-End Development </h4>
					</Cell>					
					<Cell col ={4} >
						<div >
						<h4> Front-End Development </h4>
						<p style={{fontSize: '20px', width:'75%', margin:'auto', paddingTop:'2em' }}> 
							Built the Front-End using balbalblal
						</p>		
						</div>
					</Cell>	
					<Cell col ={4} >
						<div >
						<h4> Functional Programming </h4>
						<p style={{fontSize: '20px', width:'75%', margin:'auto', paddingTop:'2em' }}> 
							Built the Front-End using balbalblal
						</p>		
						</div>
					</Cell>						
				</Grid>

			</div>

		)
	}

}

export default Skills 