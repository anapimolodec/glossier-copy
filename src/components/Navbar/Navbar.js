import React, {useState} from 'react';
import { AppBar, Button, Toolbar, IconButton, Badge, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import useStyles from './navbarStyles';
import {Link, useLocation} from 'react-router-dom';
import DrawerMenu from './DrawerMenu';


const Navbar = ({totalitems, current}) => {
	const location = useLocation();
	const classes = useStyles();
	const [state, setState] = useState(false);


  	const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
    };


	return (
		<div>
		<AppBar position = "fixed" className= {classes.appBar} color = "inherit">
			<Toolbar>
				 <Button  onClick={toggleDrawer(true)} alt = "logoside">
          			<MenuOpenRoundedIcon /> 
          		</Button>
          		<DrawerMenu state = {state} toggleDrawer = {toggleDrawer} />
				<Typography component = {Link} to="/" variant = "h6" className = {classes.title} color= "inherit">
					<img src={process.env.PUBLIC_URL + '/icons/logo_glossier.jpg'} alt="Glossier.js" height="25px" className = {classes.image} />
					Glossier
				</Typography>
				<div className = {classes.grow} />
				{ location.pathname === '/' || location.pathname === '/skincare' || 
				  location.pathname === '/makeup' || location.pathname === '/perfume' || 
				  location.pathname === `/product/${current.name}`

				? (
				<div className={classes.button}>
					<IconButton component = {Link} to="/cart" aria-label = "Show cart items" color= "inherit" >
						<Badge badgeContent = {totalitems} color = "secondary"> 
							<ShoppingCart />
						</Badge>
					</IconButton>
				</div> )
				: null}		
			</Toolbar>
		</AppBar>
		</div>
	);

}

export default Navbar;