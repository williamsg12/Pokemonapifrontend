import React from 'react';
import { Nav, Navbar,NavLink } from 'react-bootstrap';


const NavBars = () => {
	return (
		<div>
			<Navbar bg='light' variant='dark' navbar-expand='lg'>
				<NavLink to='/'>
					<h2>Home</h2>
				</NavLink>
				<NavLink to='/trainers'>
					<h2>Trainer</h2>
				</NavLink>
				<NavLink to='/pokemon'>
					<h2>Pokemon</h2>
				</NavLink>
				
			</Navbar>
		</div>
	);
};

export default NavBars;
