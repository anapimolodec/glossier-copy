import React from 'react'
import useStyles from'./footerStyles';
import {Icon} from '@material-ui/core';
const Footer = () => {
	const classes = useStyles();
	return (
		<div className = {classes.bigFooter}>
			<div className = {classes.takeSpace}></div>
			<div className = {classes.footer}>
				<div className = {classes.footer1}>
					<h1> Copy of <a className = {classes.anchor} href = "https://www.glossier.com/"> Glossier.com </a> </h1>
					<h3> This website is made for learning purposes. 2021. </h3>
					<p> Icons made by <a className = {classes.anchor} href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> </p>
					<p> See the <a className = {classes.anchor} href = "https://github.com/anapimolodec"> source code </a> </p>
				</div>
				<div className = {classes.contacts}>
					<Icon className = {classes.Icon}>
				        <img className = {classes.imageIcon} alt = "instagram" src={process.env.PUBLIC_URL + '/icons/instagram.png'} />
				    </Icon>
				    <Icon  className = {classes.Icon}>
				        <img  className = {classes.imageIcon} alt= "whataspp" src={process.env.PUBLIC_URL + '/icons/whatsapp.png'} />
				    </Icon>
				    <Icon className = {classes.Icon} >
				        <img className = {classes.imageIcon} alt = "facebook" src={process.env.PUBLIC_URL + '/icons/facebook.png'} />
				    </Icon>

				</div>
			</div>
		</div>

	);
}



export default Footer;