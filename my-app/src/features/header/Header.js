import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';
import logo from '../../assets/photos/logo2.png';
import './Header.css';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="NavTop sticky-top">
        <Navbar color="light" light expand="md">
            <Container>
            <Link className="navStyle" to="/">
                <NavbarBrand to="/">
                    <img src={logo} alt="logo" height="60"/>
                </NavbarBrand>                
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar> 
                <Link className="navStyle navLinksStyle" to="/new">
                <NavItem>
                    <NavLink >NEW</NavLink>
                </NavItem>
                </Link>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        MEN'S FASHION
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Link className="navStyle navLinksStyle" to="/men">
                        <DropdownItem>
                            Men's Shirt
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/men">
                        <DropdownItem>
                            Men's T-Shirt
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/men">
                        <DropdownItem>
                            Men's Jackets
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/men">
                        <DropdownItem>
                            Men's Vest
                        </DropdownItem>
                        </Link>
                        <DropdownItem divider />
                        <Link className="navStyle navLinksStyle" to="/men">
                        <DropdownItem>
                            Men's Short
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/men">
                        <DropdownItem>
                            Men's Jeans
                        </DropdownItem>
                        </Link>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        WOMEN'S FASHION
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Link className="navStyle navLinksStyle" to="/women">
                        <DropdownItem>
                            Women's Shirt
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/women">
                        <DropdownItem>
                            Women's T-Shirt
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/women">
                        <DropdownItem>
                            Women's Jackets
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/women">
                        <DropdownItem>
                            Aodai
                        </DropdownItem>
                        </Link>
                        <DropdownItem divider />
                        <Link className="navStyle navLinksStyle" to="/women">
                        <DropdownItem>
                            Women's Short
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/women">
                        <DropdownItem>
                            Skirt
                        </DropdownItem>
                        </Link>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        COUPLE'S FASHION
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Link className="navStyle navLinksStyle" to="/couple">
                        <DropdownItem>
                            Couple T-Shirt
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/couple">
                        <DropdownItem>
                            Couple Jackets
                        </DropdownItem>
                        </Link>
                        <DropdownItem divider />
                        <DropdownItem disabled>
                            Couple Hat
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <Link className="navStyle navLinksStyle" to="/contact">
                <NavItem>
                    <NavLink>CONTACT US ✉</NavLink>
                </NavItem>
                </Link>
                <NavItem>
                    <svg width="1.75em" height="1.75em" viewBox="0 0 16 16" class="bi bi-shop" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                    </svg>
                </NavItem>
            </Nav>
            </Collapse>
            </Container>
        </Navbar>
        </div>
    );
}