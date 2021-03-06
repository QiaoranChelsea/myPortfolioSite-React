import React, {Component} from 'react';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl'



class MyFooter extends Component{
	render(){
		return (
			<Footer size="mini">
			    <FooterSection type="left" logo="Title">
			        <FooterLinkList>
			            <a href="#">Help</a>
			            <a href="#">Privacy & Terms</a>
			        </FooterLinkList>
			    </FooterSection>
			</Footer>

		)
	}

}

export default MyFooter