import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './productStyles';
import {Link} from 'react-router-dom';

const Product = ({product, onAddToCart, onSetCurrent}) => {
	const classes = useStyles();
	
	

	

	return (
	<Card className = {classes.root}>
		<Link style={{textDecoration: 'none'}} to ={`/product/${product.name}`} onClick = {() => onSetCurrent(product)}>
			<CardMedia className = {classes.media} image = {product.media.source} title = {product.name} />
		</Link>
		<CardContent>
			<div className={classes.cardContent}>
				<Typography variant = "h5" gutterBottom>
					{product.name} 
				</Typography>
				<Typography variant = "h5">
					{product.price.raw} KZT
				</Typography>
			</div>
			<Typography variant = "h7" color = "textSecondary" dangerouslySetInnerHTML = {{__html : product.description}} />
		</CardContent>
		<CardActions disableSpacing className ={classes.cardActions}>
			<IconButton aria-label = "Add to Cart" onClick = {() => onAddToCart(product.id,1)}>
				<AddShoppingCart />
			</IconButton>
		</CardActions>
	</Card>
	)

}

export default Product;