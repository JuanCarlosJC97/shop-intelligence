import React from 'react'
import './NavigateMenu.css';
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import iconUser from '../../images/person_black_24dp.svg'




export function NavigateMenu(props) {
	const stants = props.dep.map((d) => <NavDropdown.Item id={d.id} key={d.id}>{d.name}</NavDropdown.Item>); 

	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="bg" variant='light'>
				<Container>
					<Navbar.Brand className="nameShop" href="/">{props.nameShop}</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle" bsPrefix="navbar-toggler"/>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown title="Estanteria" id="collasible-nav-dropdown" >
								{stants}
							</NavDropdown>
						</Nav>
						<Nav>
							<Nav.Link href="" className="contact">Contacto</Nav.Link>
							<Nav.Link href=""> <Image src={iconUser} className="iconUser"/> Inicio de Sesión</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default NavigateMenu
