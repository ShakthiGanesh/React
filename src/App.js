import React, { useState } from 'react';
import './App.css';
import {DISHES} from'./dishes.js'
import  List  from './components/List';
import SelectedItem from './components/SelectedItem';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { Breadcrumb, Nav, Navbar} from 'react-bootstrap';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import About from './components/about';
import Footer from './components/Footer';


function App() {
  const [Selected, SetSelected] = useState(null)
  return (
    <div className="App">
      <div className="nav_items">
        <Navbar bg="light" expand="lg" variant="light" className="restaurant_name">
          <Navbar.Brand href=""><p>Krishna Canteen :-)</p></Navbar.Brand>
          <Navbar.Toggle style={{backgroundColor: "white"}}  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="" id='nav-select'> 
                <Link className="router-link" to="/" >
                  <p className="navbar-custom">
                  <HomeIcon /> Home</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="#" id='nav-select'> 
                <Link className="router-link" to='/about'>
                  <p className="navbar-custom">
                  <InfoIcon /> About</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="" id='nav-select'>  <p className="navbar-custom"><RestaurantMenuIcon />  Menu</p></Nav.Link>
              <Nav.Link href="" id='nav-select'> <p className="navbar-custom"><ContactsIcon /> Contact</p></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    

    <Route path='/' exact>
    <div className='dish_list' >
          {DISHES.map(dish => 
            <List key={dish.id} dish={dish} SetSelected={SetSelected} />  
          )}
    </div>
    {(Selected)? <SelectedItem dishSelected = {Selected}/> : null  }
    </Route>
      
  
    <Route path='/about' exact>
      
        <About />
      </Route>  
    <Footer />
    </div>
  );
}





export default App;
