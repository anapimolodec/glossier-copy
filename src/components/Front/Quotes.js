import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import useStyles from './frontStyles';
const Quotes =() => {
	const classes = useStyles();
return (
	<div className = {classes.content} > 	
		<div className = {classes.words}> 
			<Typography variant = "h4" align=" center" justify= "center">
				"Revolutionary for its time, harnessing a certain come-as-you-are acceptance"
			</Typography>
			<Typography variant = "h6" align=" center" justify= "center" gutterBottom>
				Vogue
			</Typography>
			<div className = {classes.toolbar} /> 
			<Typography variant = "h4" align=" center" justify= "center">
				"Being a part of something so cool makes you feel the synergy around"
			</Typography>
			<Typography variant = "h6" align=" center" justify= "center">
				Not Vogue
			</Typography>
			<div className = {classes.toolbar} /> 
		</div>
		<div className = {classes.why}>
			<Typography variant = "h4">
				About Us.
			</Typography>
			<Grid container
				direction="row"
  				justify="center"
  				alignItems="center">
  				<Grid item xs ={12} sm ={6} md ={3} lg ={3}>
				<div className = {classes.box}>
					<img className = {classes.image} alt = "eco" src={process.env.PUBLIC_URL + '/icons/eco.png'}/>
					<Typography variant = "subtitle2" align = "center">
						We are green. None of our products harm our earth. 
					</Typography>
				</div>
				</Grid>
				<Grid item xs ={12} sm ={6} md ={3} lg ={3}>
				<div className = {classes.box}>
				    <img className = {classes.image}  alt = "test" src={process.env.PUBLIC_URL + '/icons/test.png'} />
					<Typography variant = "subtitle2" align = "center">
						We are reliable. All our products had dermatological tests approved.
					</Typography>
				</div>
				</Grid>
				<Grid item xs ={12} sm ={6} md ={3} lg ={3}>
				<div className = {classes.box}>
					<img className = {classes.image} alt = "talk" src={process.env.PUBLIC_URL + '/icons/chat.png'} />
					<Typography variant = "subtitle2" align = "center">
						We are friendly. We provide the consultation you need and are highly responsive to any requests.
					</Typography>
				</div>
				</Grid>
			</Grid>
		</div>
	</div>
	);
}
 export default Quotes;