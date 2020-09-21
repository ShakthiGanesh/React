import React, { useState } from 'react';
import './App.css';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { Breadcrumb, Nav, Navbar} from 'react-bootstrap';
import { BrowserRouter, Link, Route, Router } from 'react-router-dom';
import About from './components/about';
import Footer from './components/Footer';
import Menu from './Menu';
import SelectedItem from './components/SelectedItem';
import { DISHES } from './dishes';
import Home from './components/Home';
import Contact from './components/Contact';


function App() {

  return (
    <div className="App">
      <div className="nav_items">
        <Navbar bg="light" expand="lg" variant="light" className="restaurant_name">
          <Navbar.Brand href=""><p>Krishna Canteen :-)</p></Navbar.Brand>
          <Navbar.Toggle style={{backgroundColor: "white"}}  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="" id='nav-select'> 
                <Link className="router-link" to="/">
                  <p className="navbar-custom" >
                  <HomeIcon /> Home</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="#" id='nav-select'> 
                <Link className="router-link" to='/about'>
                  <p className="navbar-custom">
                  <InfoIcon /> About</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="" id='nav-select'> 
                <Link to='/menu' className="router-link">
                  <p className="navbar-custom">
                  <RestaurantMenuIcon />  Menu</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="" id='nav-select'>
                <Link to="/contact" className='router-link'>
                 <p className="navbar-custom">
                   <ContactsIcon /> Contact</p>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    <Route path="/" exact>
        <Home />
    </Route>
    
    <Route path='/menu' exact>
        <Menu DISHES={DISHES}/>
    </Route>
   
    {DISHES.map(dish =>
    <Route path={'/menu/'+ dish.name} exact > 
    <SelectedItem dishSelected = {dish}/> 
    </Route>
    )} 
  
    <Route path='/about' exact>
      <About />
    </Route>
    
    <Route path='/contact' exact>
      <Contact />
    </Route> 
    <Footer />
    </div>
  );
}





export default App;
