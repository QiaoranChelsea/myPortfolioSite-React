import React, {Component} from 'react';
import {Cell, Grid, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component{
	render(){
		return (
			<div className = "contact-body">
				<Grid className ="contact-grid">
					<Cell col ={6} >
						<h2>Qiaoran Li</h2>
						<img 
							src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/011_girl_avatar_profile_woman_hat_flower-512.png"
							alt ="avatar"
							style={{height:'250px'}}
						/>
					<p style={{width:'75%', margin:'auto', paddingTop:'1em' }}> 
						hese example sentences are selected automatically 
						from various online news sources to reflect current usage of the word 
						'introduction.' Views expressed in the examples do not represent the 
						opinion of Merriam-Webster or its editors. ... Kids Definition of introduction.
					</p>
					</Cell>					
					<Cell col ={6} >
						<h2> Contact Me </h2>
						<hr/>

						<div className="contact-list">
							<List>
							  <ListItem>
							    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
							    	<i className= "fa fa-phone-square" aria-hidden="true"/>
							    		541-248-9440
							    </ListItemContent>
							  </ListItem>			

							  <ListItem>				  
							  <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
						    	<i className= "fa fa-envelope" aria-hidden="true"/>
						    	theRealQiaoranLi@gmail.com
							  </ListItemContent>
							  </ListItem>	

							  <ListItem>				 
							  <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
						    	<i className= "fa fa-skype" aria-hidden="true"/>
						    	(my skype id)
						    </ListItemContent>
							  </ListItem>

							</List> 				
						</div>
					</Cell>					
				</Grid>
			</div>
		)
	}

}

export default Contact