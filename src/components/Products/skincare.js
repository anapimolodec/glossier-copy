import React from 'react';
import {Grid, CssBaseline, Typography, Divider} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './productsStyles';

const Skincare = ({products, onAddToCart, onSetCurrent}) => {
	const classes = useStyles();
	console.log(products)
	const skincare_prods = products.filter(product => product.categories[0].slug === "skincare");
	return (
		<main className = {classes.content}> 
			<CssBaseline />
		  	<div className = {classes.toolbar} />
		  	<Typography gutterBottom variant="h2" className = {classes.center}>
	           Skin First
	        </Typography>
	        <Divider />
	        <div className={classes.words}>
	        	<Typography gutterBottom variant = "h5">
		        	Our skincare essentials are designed to make you look and feel your glowy, dewy best before you even think about makeup. (Glossier)
	        	</Typography>
	        </div>
	        <div className = {classes.toolbar} />
			<Grid container justify = "center" spacing = {4}>
				{skincare_prods.map((product) => (
					<Grid item key ={product.id} xs ={12} sm ={6} md ={4} lg ={3} >
						<Product product = {product} onAddToCart = {onAddToCart} onSetCurrent = {onSetCurrent}/>
					</Grid>
				))}
			</Grid>
		</main>
);
}

export default Skincare;