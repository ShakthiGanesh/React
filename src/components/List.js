import React from 'react'
import { Link } from 'react-router-dom'
import '../css/List.css'


function List({dish}) {
        
       
        return (
            <Link to={'/menu/'+ dish.name} className='list list-small' >
                <div key={dish.id} className='single_dish'>         
                
                    <p className='dish_name'>{dish.name}</p> 
                    <img className='dish_image' src={dish.image} alt=''/> 
               
                </div> 
             </Link>
            
                                   
            )
        
} 






export default List


