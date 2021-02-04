import React from 'react';
import {Grid,CssBaseline, Typography, Divider} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './productsStyles';

const Perfume = ({products, onAddToCart, onSetCurrent}) => {
	const classes = useStyles();
	const frag_prods = products.filter(product => product.categories[0].slug === "fragnances");
	return (
		<main className = {classes.content} >
			<CssBaseline />
		  	<div className = {classes.toolbar} />
		  	<Typography gutterBottom variant="h2" className = {classes.center}>
	           Scent Of a Woman
	        </Typography>
	        <Divider />
	        <div className={classes.words}>
	        	<Typography gutterBottom variant = "h5">
		        	Scent is such a powerful tool of attraction, that if a woman has this tool perfectly tuned, she needs no other.
	        	</Typography>
	        </div>
	        <div className = {classes.toolbar} />
	        <Grid container justify = "center" spacing = {4}>
				{frag_prods.map((product) => (
					<Grid item key ={product.id} xs ={12} sm ={6} md ={4} lg ={3} >
						<Product product = {product} onAddToCart = {onAddToCart} onSetCurrent = {onSetCurrent}/>
					</Grid>
				))}
			</Grid>
		</main>
);
}

export default Perfume;