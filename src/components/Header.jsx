import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restuarantSlice';

function Header({Dashboard}) {
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    const dispatch = useDispatch()

    return (
        <div>
            <Navbar style={{background:'#0f0f0f'}} expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><Link to={'/'}><img src={Logo} width={'180'} style={{background:'transparent'}}  alt="" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
                    <Navbar.Collapse id="basic-navbar-nav" className={showNavbar ? 'show' : ''}>
                        <Nav className="ms-auto d-flex gap-3">
                            <Nav.Link href="#home" style={{color:'white'}}>Home</Nav.Link>
                            <Nav.Link href="#projects" className='rounded' style={{color:'black',background:'#f6db76'}}>Restuarants</Nav.Link>
                        </Nav>
                        <input onChange={(e)=>dispatch(search(e.target.value))} type="text" className='form-control w-25 p-2 ms-3' placeholder='Search by neighbourhood'  name="" id="" />
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
