import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hook/useAuth';
import './Header.css'
const Header = () => {
  const { user, logOut } = useAuth()
    return (
      <Navbar  collapseOnSelect expand="lg" className="bg" variant="info" sticky="top">
      <Container>
                 <Navbar.Brand as={Link} to="/home#home">
                 <span className="logo"><span className="text-warning">T</span>ravel</span>
                 </Navbar.Brand>
         <Navbar.Toggle/>     
         
             <Navbar.Collapse>
                 
           <Nav className="ms-auto">
                <Nav.Link  as={HashLink} to="/home#home">Home</Nav.Link>
                {/* <Nav.Link  as={Link} to="/directory">Directory</Nav.Link> */}
                <Nav.Link  as={HashLink} to="/home#services">Services</Nav.Link>
                 
              <Nav.Link as={Link} to="/addEvents">Add Event</Nav.Link>
              <Nav.Link as={Link} to="/eventsAdded">Added Event</Nav.Link>
              
                 <Nav.Link as={Link} to="/register">Register</Nav.Link>
 
                        
                         {user?.email ? <Button onClick={logOut}  variant='secondary' >Logout</Button> :
                         <Nav.Link as={Link} to="/login">Login</Nav.Link>
                         }
 
 
                         
 
 
              
            </Nav>  
         </Navbar.Collapse>
         
      </Container>
   </Navbar>
    );
};

export default Header;