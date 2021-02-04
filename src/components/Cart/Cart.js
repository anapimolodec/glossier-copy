import React from 'react';
import {Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './cartStyles';
import CardItem from './CartItem/CartItem';
import {Link } from 'react-router-dom';

const Cart = ({cart, handleEmptyCart, handleRemoveFromCart , handleUpdateCartQuantity }) => {
	const classes = useStyles();
	let isEmpty = true;
	if (cart.line_items) {isEmpty = !cart.line_items.length; }
	else {return (
		<div>
			<div className = {classes.toolbar}/> 
			<h1 style= {{"justify-content": "center", "padding-left" : "40vw"}}> Loading... </h1>
			<div className = {classes.toolbar} flexGrow = {1} /> 
			<div className = {classes.root} />
		</div>
		);
	    }


	const EmptyCart = () => {
		return (
			<div>
				<div className = {classes.toolbar} />
				<Typography variant = "subtitle1"> 
					You have no items in the cart! 
					<Link to="/" className = {classes.link}> Go add some! </Link>
				</Typography>
			</div>
			);
	}

	const FilledCart = () => {
		return (
			<div>
				<div className = {classes.toolbar} />
				<Grid container spacing = {3}>
					{cart.line_items.map((item) => (
							<Grid item xs = {12} sm ={4} key={item.id}> 
								<CardItem item = {item} 
								handleUpdateCartQuantity = {handleUpdateCartQuantity}
								handleRemoveFromCart = {handleRemoveFromCart}/>
							</Grid>
						))}
				</Grid>
				<div className = {classes.cardDetails}>
					<Typography variant = 'h4' >
						Subtotal: {cart.subtotal.raw} KZT
					</Typography>
					<div>
						<Button onClick = {handleEmptyCart} className = {classes.emptyButton} size = "large" type="button" variant = "contained" color = "secondary"> 
						Empty Cart
						</Button>
						<Button component = {Link} to = "/checkout" className = {classes.checkoutButton} size = "large" type="button" variant = "contained" color = "primary"> 
						Checkout
						</Button>
					</div>
				</div>
			</div>
			);
	}

	return (
		<Container>
			
			<Typography className = {classes.title} variant = "h3" gutterBottom> Your shopping cart </Typography>
			{isEmpty ? <EmptyCart /> : <FilledCart /> }
			<div className = {classes.toolbar} /> 
		</Container>
		)

}

export default Cart;