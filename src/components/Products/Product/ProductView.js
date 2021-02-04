import React from 'react';
import {Grid, Typography, List,CssBaseline, CardActions,  IconButton, CardMedia} from '@material-ui/core';
import useStyles from './productStyles';
import {AddShoppingCart} from '@material-ui/icons';


const ProductView = ({product, onAddToCart}) =>{
	const classes = useStyles();
	return (
		<main className = {classes.content} >
			<CssBaseline />
			<div className = {classes.toolbar} />
			
			<Grid container className = {classes.productGrid}>
				<Grid item  md ={3} lg ={3}>
				</Grid>
				<Grid item xs ={12} sm ={12} md ={3} lg ={3}>
					<CardMedia className = {classes.mediaImg} style={{maxHeight: '80vh'}} image = {product.media.source} title = {product.name} />
				</Grid>
				<Grid item xs ={12} sm ={12} md ={6} lg ={6}>
					<List style={{maxHeight: '100%', overflow: 'auto'}} >
						<Typography variant = "h2">
							{product.name}
						</Typography>
						<Typography variant = "h5">
							{product.price.raw} KZT
						</Typography>
						<Typography variant = "h7" color = "textSecondary" dangerouslySetInnerHTML = {{__html : product.description}} />
					</List>
					<CardActions disableSpacing className ={classes.cardActions}>
						<IconButton aria-label = "Add to Cart" onClick = {() => onAddToCart(product.id,1)}>
							<AddShoppingCart />
						</IconButton>
					</CardActions>
				</Grid>

			</Grid>
		</main>
		




		);


}

 export  default ProductView;