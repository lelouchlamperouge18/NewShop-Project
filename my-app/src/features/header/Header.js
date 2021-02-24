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
                    <Link to="/cartpage">
                    <svg width="1.75em" height="1.75em" viewBox="0 0 16 16" class="bi bi-bag-check-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                    </svg>
                    </Link>               
                </NavItem>
            </Nav>
            </Collapse>
            </Container>
        </Navbar>
        </div>
    );
}