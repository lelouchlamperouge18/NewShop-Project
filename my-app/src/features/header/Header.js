import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
  Container,
  Tooltip
} from 'reactstrap';
import {
    forTest,
} from '../../features/listproduct/listproductSlice';
import logo from '../../assets/photos/logo2.png';
import './Header.css';

export function Header() {
    const inCartQuantity = useSelector(forTest);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle2 = () => setTooltipOpen(!tooltipOpen);

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
                        CLOTHES/COSPLAY
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Link className="navStyle navLinksStyle" to="/clothes/shirt">
                        <DropdownItem>
                            Shirt/T-Shirt
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/clothes/cosplay">
                        <DropdownItem>
                            Cosplay Combo
                        </DropdownItem>
                        </Link>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        FIGURE
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Link className="navStyle navLinksStyle" to="/figure/single">
                        <DropdownItem>
                            Single Figure
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/figure/combo">
                        <DropdownItem>
                            Combo Figure
                        </DropdownItem>
                        </Link>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        OTHERS ACCESSORIES
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Link className="navStyle navLinksStyle" to="/others-accessories/balo">
                        <DropdownItem>
                            Balo
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/others-accessories/jewelry">
                        <DropdownItem>
                            Jewelry
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/others-accessories/stuffedtoy">
                        <DropdownItem>
                            Stuffed Toy
                        </DropdownItem>
                        </Link>
                        <Link className="navStyle navLinksStyle" to="/others-accessories/others">
                        <DropdownItem>
                            Others
                        </DropdownItem>
                        </Link>
                        <DropdownItem divider />
                        <DropdownItem disabled>
                            Coming soon...
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <Link className="navStyle navLinksStyle" to="/contact">
                <NavItem>
                    <NavLink>CONTACT US ✉</NavLink>
                </NavItem>
                </Link>
                <NavItem>
                    <Link to="/cartpage" >
                        <svg id="cart__icon" width="1.75em" height="1.75em" viewBox="0 0 16 16" class="bi bi-bag-check-fill" fill="purple" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                        </svg>
                    </Link>    
                    <Tooltip placement="bottom" isOpen={tooltipOpen} target="cart__icon" toggle={toggle2}>
                        Check your cart! ({inCartQuantity})
                    </Tooltip>         
                </NavItem>
            </Nav>
            </Collapse>
            </Container>
        </Navbar>
        </div>
    );
}