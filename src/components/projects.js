import React, {Component} from 'react';
import {Tabs,Tab,Grid,Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'



class Projects extends Component{
	render(){
		return (			
			<div className = "projects-section"> 
				<Grid>
					<Cell col = {4}></Cell>
					<Cell col = {4}> 
						<h2>Projects</h2>
						<hr/>

					</Cell>
					<Cell col = {4}></Cell>
				</Grid>
				<Grid >
					<Cell col = {12}>

							<div className = "projects-grid">
								{/*Project 1 */}
							  <Card shadow={5} style = {{minWidth:'450', margin:'auto'}}>
							 	<CardTitle style = {{color:'black', height:'176px', background:
							 	'url(https://ec.europa.eu/programmes/erasmus-plus/sites/erasmusplus2/files/styles/erasmus__rewamp_overview/public/epale_tree.jpg?itok=Tz-EM6vm) center /cover'}}>
							 	Projects Title 1 
							 	</CardTitle>
							 	<CardText>
							 		This project is balablablablablablablab;
							 	</CardText>

							 	<CardActions border>
							 		<Button colored> GitHub </Button>
							 	</CardActions>
							 	<CardMenu style ={{color:"black"}}>
							 		<IconButton name = "share"/>
							 	</CardMenu>

							 </Card>		
							 {/*Project 2 */}		  
							 <Card shadow={5} style = {{minWidth:'450', margin:'auto'}}>
							 	<CardTitle style = {{color:'black', height:'176px', background:
							 	'url(https://d1cedvxeo5ngwa.cloudfront.net/assets/img/project%20management.png) center /cover'}}>
							 	Projects Title 2
							 	</CardTitle>
							 	<CardText>
							 		This project is balablablablablablablab;
							 	</CardText>

							 	<CardActions border>
							 		<Button colored> GitHub </Button>
							 	</CardActions>
							 	<CardMenu style ={{color:"black"}}>
							 		<IconButton name = "share"/>
							 	</CardMenu>

							 </Card>				 
							{/*Project 3 */}	  
							 <Card shadow={5} style = {{minWidth:'450', margin:'auto'}}>
							 	<CardTitle style = {{color:'black', height:'176px', background:
							 	'url(https://ec.europa.eu/programmes/erasmus-plus/sites/erasmusplus2/files/styles/erasmus__rewamp_overview/public/epale_tree.jpg?itok=Tz-EM6vm) center /cover'}}>
							 	Projects Title 2
							 	</CardTitle>
							 	<CardText>
							 		This project is balablablablablablablab;
							 	</CardText>

							 	<CardActions border>
							 		<Button colored> GitHub </Button>
							 	</CardActions>
							 	<CardMenu style ={{color:"black"}}>
							 		<IconButton name = "share"/>
							 	</CardMenu>

							 </Card>

							</div>
			
						{/*div> // <div className = "content">	*/}
					</Cell>
				</Grid>
				<Grid >
					<Cell col = {12}>

							<div className = "projects-grid">
								{/*Project 3 */}
							  <Card shadow={5} style = {{minWidth:'450', margin:'auto'}}>
							 	<CardTitle style = {{color:'black', height:'176px', background:
							 	'url(https://ec.europa.eu/programmes/erasmus-plus/sites/erasmusplus2/files/styles/erasmus__rewamp_overview/public/epale_tree.jpg?itok=Tz-EM6vm) center /cover'}}>
							 	Projects Title 3
							 	</CardTitle>
							 	<CardText>
							 		This project is balablablablablablablab;
							 	</CardText>

							 	<CardActions border>
							 		<Button colored> GitHub </Button>
							 	</CardActions>
							 	<CardMenu style ={{color:"black"}}>
							 		<IconButton name = "share"/>
							 	</CardMenu>

							 </Card>		
							 {/*Project 4 */}		  
							 <Card shadow={5} style = {{minWidth:'450', margin:'auto'}}>
							 	<CardTitle style = {{color:'black', height:'176px', background:
							 	'url(https://d1cedvxeo5ngwa.cloudfront.net/assets/img/project%20management.png) center /cover'}}>
							 	Projects Title 4
							 	</CardTitle>
							 	<CardText>
							 		This project is balablablablablablablab;
							 	</CardText>

							 	<CardActions border>
							 		<Button colored> GitHub </Button>
							 	</CardActions>
							 	<CardMenu style ={{color:"black"}}>
							 		<IconButton name = "share"/>
							 	</CardMenu>

							 </Card>				 
							{/*Project 5 */}	  
							 <Card shadow={5} style = {{minWidth:'450', margin:'auto'}}>
							 	<CardTitle style = {{color:'black', height:'176px', background:
							 	'url(https://ec.europa.eu/programmes/erasmus-plus/sites/erasmusplus2/files/styles/erasmus__rewamp_overview/public/epale_tree.jpg?itok=Tz-EM6vm) center /cover'}}>
							 	Projects Title 5
							 	</CardTitle>
							 	<CardText>
							 		This project is balablablablablablablab;
							 	</CardText>

							 	<CardActions border>
							 		<Button colored> GitHub </Button>
							 	</CardActions>
							 	<CardMenu style ={{color:"black"}}>
							 		<IconButton name = "share"/>
							 	</CardMenu>

							 </Card>

							</div>
		
					</Cell>
				</Grid>
			</div>


		)
	}

}

export default Projects