import React from 'react';
import {Grid,CssBaseline, Typography, Divider} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './productsStyles';

const Makeup = ({products, onAddToCart, onSetCurrent}) => {
	const classes = useStyles();
	const makeup_prods = products.filter(product => product.categories[0].slug === "makeup");
	return (
		<main className = {classes.content} >
			<CssBaseline />
		  	<div className = {classes.toolbar} />
		  	<Typography gutterBottom variant="h2" className = {classes.center}>
	           Makeup Second
	        </Typography>
	        <Divider />
	        <div className={classes.words}>
	        	<Typography gutterBottom variant = "h5">
		        	Products that give you options but never cover you up, turn you into someone else, or over-complicate your routine. Because beauty should make you feel good. (Glossier)
	        	</Typography>
	        </div>
	        <div className = {classes.toolbar} />
			<Grid container justify = "center" spacing = {4}>
				{makeup_prods.map((product) => (
					<Grid item key ={product.id} xs ={12} sm ={6} md ={4} lg ={3} >
						<Product product = {product} onAddToCart = {onAddToCart} onSetCurrent = {onSetCurrent}/>
					</Grid>
				))}
			</Grid>
		</main>
);
}

export default Makeup;