import React from 'react';
import { Nav, Navbar,NavLink } from 'react-bootstrap';


const NavBars = () => {
	return (
		<div>
			<Navbar bg='light' variant='dark' navbar-expand='lg'>
				<NavLink href='/home'>
					<h2>Home</h2>
				</NavLink>
				<NavLink href='/trainers'>
					<h2>Trainer</h2>
				</NavLink>
				<NavLink href='/pokemon'>
					<h2>Pokemon</h2>
				</NavLink>
				
			</Navbar>
		</div>
	);
};

export default NavBars;
