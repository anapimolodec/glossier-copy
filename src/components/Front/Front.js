import React from 'react';
import {Grid, Typography, CssBaseline} from '@material-ui/core';
import useStyles from './frontStyles';
const Front =() => {
	const classes = useStyles();
return (
	<div className = {classes.content} > 
		<CssBaseline />
		<div className = {classes.toolbar} />
		 
		<Grid  container
  				direction="row"
  				justify="center"
  				alignItems="center"
				spacing = {2} >
			<Grid item xs ={6} sm ={6} md ={3} lg ={3} >
				<img  width = "100%" src = "https://images.ctfassets.net/p3w8f4svwgcg/76A9DyQBeS5GLKxlFpPB0x/b8b98b4dbbddc51611d2f24809c94b5a/8598-16D_GLS_RGB_INGREDIENTS_ALONE_02.JPG?w=960&q=80&fm=webp" alt = "image1" />
			</Grid>
			<Grid item xs ={6} sm ={6} md ={3} lg ={3} >
				<img  width = "100%" src = "https://images.ctfassets.net/p3w8f4svwgcg/uZnCw3PO5yccaDwonnk9p/13b402423111ce6596309bee0a4fcea6/8598-04E_GLS_RGB_YOU_GROUP_01.JPG?w=960&q=80&fm=webp" alt = "image2" />
			</Grid>
			<Grid item  md ={3} lg ={3} > 
				<img src={process.env.PUBLIC_URL + '/icons/glossier.png'} alt="Glossier.js" className = {classes.imageGl} />
				<div className = {classes.paddingAdd} >
					<Typography variant = "h4" align=" center" justify= "center">
						Your Best Experience
					</Typography>
					<Typography variant = "h5" align=" center" justify= "center">
						Self care is Self love!
					</Typography>
				</div>
			</Grid>
		</Grid>
		<div className = {classes.words}> 
			<Typography variant = "h2" align=" center" justify= "center">
				Enjoy your little journey here.
			</Typography>
			<Typography variant = "h6" align=" center" justify= "center">
				The main purpose of taking self-care is to maintain own mental and physical health, which is what we do for you.  
				This website is made for educational purposes only. All pictures, logo, product description is taken from <a href = 'https://www.glossier.com/' style ={{textDecoration: 'none', color: 'white'}}> Official Glossier Website. </a> 
			</Typography>
		</div>
	</div>
	);
}
 export default Front;