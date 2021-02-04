
import React, {useState, useEffect} from 'react';
import './App.css';
import {Products, Navbar, Cart, Front, Footer, ProductView, Checkout, Quotes, Skincare, Makeup, Perfume, Contact, Team} from './components';
import { CssBaseline} from '@material-ui/core';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { commerce } from './lib/commerce';


function App() {
	
 
	const [products, setProducts] = useState([]);
	const [cart,setCart] = useState({});
	const [order, setOrder] = useState({});
	const [errorMsg, setErrorMsg] = useState('');
	const [current, setCurrent] = useState({});

	const fetchProducts = async () => {
	 	const {data} = await commerce.products.list();
	 	setProducts(data);
	}
	 
	const fetchCart = async () => {
	 	const cart = await commerce.cart.retrieve();
	 	setCart(cart);
	}

	const handleAddToCart = async (productId, quantity) => {
	 	const res = await commerce.cart.add(productId, quantity);
	 	setCart(res.cart);
	}

	const handleUpdateCartQuantity = async ( productId, quantity) => {
		const res = await commerce.cart.update(productId, {quantity});
		setCart(res.cart);
	}

	const handleRemoveFromCart = async (productId) => {
		const res = await commerce.cart.remove(productId);
		setCart(res.cart);
	}

	const handleEmptyCart = async () => {
		const res = await commerce.cart.empty();
		setCart(res.cart);
	}

	const refreshCart = async () => {
		const newCart = await commerce.cart.refresh();
		setCart(newCart);
	}
	const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
		try {
			const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
			setOrder(incomingOrder);
			refreshCart();
			console.log("capture checkout done")

		}
		catch (error) {
			refreshCart();
			
			setErrorMsg(error.data.error.message);
			console.log(errorMsg)
		}

	}


	useEffect(() => { //calls when restart page
	 	fetchProducts();
	 	fetchCart();

	 	

	}, []);


	return (
		<Router>
			<CssBaseline />
			<div className = " container">
		     	<Navbar totalitems = {cart.total_items} current={current}/>
		     	<div style = {{minHeight: '80vh'}} >

			     	<Switch>

			     		<Route exact path = "/"> 
			     			<Front />
			     			<Products products = {products} onAddToCart = {handleAddToCart} onSetCurrent = {setCurrent}/>
			     			<Quotes />
			     		</Route>
			     		<Route exact path = "/makeup"> 
			     			<Makeup products = {products} onAddToCart = {handleAddToCart} onSetCurrent = {setCurrent}/>
			     		</Route>
			     		<Route exact path = "/skincare"> 
			     			<Skincare products = {products} onAddToCart = {handleAddToCart} onSetCurrent = {setCurrent}/>
			     		</Route>
			     		<Route exact path = "/perfume"> 
			     			<Perfume products = {products} onAddToCart = {handleAddToCart} onSetCurrent = {setCurrent}/>
			     		</Route>
			     		<Route exact path ="/cart"> 
			     			<Cart 
			     				cart = {cart} 
			     				handleEmptyCart = {handleEmptyCart}
			     				handleRemoveFromCart = {handleRemoveFromCart}
			     				handleUpdateCartQuantity = {handleUpdateCartQuantity}
			     				/>
			     		</Route> 
			     		<Route exact path ={`/product/${current.name}`}>
			     			<ProductView product={current} onAddToCart = {handleAddToCart}/>
			     		</Route>
			     		<Route exact path = "/contact"> 
			     			<Contact />
			     		</Route>
			     		<Route exact path = "/team"> 
			     			<Team />
			     		</Route>
			     		<Route exact path = "/checkout"> 
			     			<Checkout 	cart = {cart}
			     						order = {order}
			     						onCaptureCheckout = {handleCaptureCheckout}
			     						error = {errorMsg}
			     						refresh = {refreshCart} />
			     		</Route>  		
			     	</Switch>
			     </div>
		     	<Footer />
		    </div>
	    </Router>
	    );
}

export default App;
