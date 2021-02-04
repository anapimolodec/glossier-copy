import React from 'react';
import {Drawer, List, Divider, ListItem, ListItemText, Icon} from '@material-ui/core';
import useStyles from './navbarStyles';
import {Link} from 'react-router-dom';


const DrawerMenu = ({state, toggleDrawer}) => {
	const classes = useStyles();
 	return (
 			<Drawer open={state} onClose={toggleDrawer(false)}>
                <div
			      className={classes.list}
			      role="presentation"
			      onClick={toggleDrawer(false)}
			      onKeyDown={toggleDrawer(false)}
			    >
			      <List>
			          <ListItem button = {true} className = {classes.root} component = {Link} to="/" >
			          	<Icon className = {classes.rootIcon}>
			          		<img className = {classes.imageIcon} src={process.env.PUBLIC_URL + '/icons/home.png'} alt= "home" />
			          	</Icon>
			            <ListItemText primary="Home" />
			          </ListItem>
			          <ListItem button = {true} className = {classes.root} component = {Link} to="/skincare" >
			          	<Icon className = {classes.rootIcon} >
			          		<img className = {classes.imageIcon}  src={process.env.PUBLIC_URL + '/icons/skincare.png'} alt ="skincare"/>
			          	</Icon>
			            <ListItemText primary="Skincare" />
			          </ListItem>
			          <ListItem button = {true} className = {classes.root} component = {Link} to="/makeup" >
			          	<Icon className = {classes.rootIcon}>
			          		<img className = {classes.imageIcon} src={process.env.PUBLIC_URL + '/icons/makeup.png'} alt ="makeup" />
			          	</Icon>
			            <ListItemText primary="Makeup" />
			          </ListItem>
			          <ListItem button = {true} className = {classes.root} component = {Link} to="/perfume">
			          	<Icon className = {classes.rootIcon}>
			          		<img className = {classes.imageIcon} src={process.env.PUBLIC_URL + '/icons/perfume.png'} alt = "perfume"/>
			          	</Icon>
			            <ListItemText primary="Perfume" />
			          </ListItem>
			      </List>
			      <Divider />
			      <List>
				  	  <ListItem button = {true} className = {classes.root} component = {Link} to="/contact"> 
			  	  		<Icon className = {classes.rootIcon}>
			          		<img className = {classes.imageIcon} alt="contact" src={process.env.PUBLIC_URL + '/icons/contact.png'} />
			          	</Icon>
			            <ListItemText primary="Contact" />
			          </ListItem>
			          <ListItem button = {true} className = {classes.root} component = {Link} to="/team"> 
			  	  		<Icon className = {classes.rootIcon}>
			          		<img className = {classes.imageIcon} alt="team" src={process.env.PUBLIC_URL + '/icons/team.png'} />
			          	</Icon>
			            <ListItemText primary="Our Team" />
			          </ListItem>
			      </List>
			    </div>
          </Drawer>
  );
}

export default DrawerMenu;