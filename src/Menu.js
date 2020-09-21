import React, { useState } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import  List  from './components/List';

function Menu ({DISHES}) {
    
    return (
        <div>
            <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/"> Home</Link>
                    </BreadcrumbItem>
                    
                    <Breadcrumb.Item active>Menu</Breadcrumb.Item>
            </Breadcrumb>
            <div className='dish_list' >
                {DISHES.map(dish => 
                    <List key={dish.id} dish={dish}/>  
                )}
            </div>
           
        </div>
       
    )
}

export default Menu