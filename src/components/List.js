import React from 'react'
import App from '../App'
import '../css/List.css'
import SelectedItem from './SelectedItem'


function List({dish, SetSelected}) {
        
       
        return (
            <div className='list list-small' >
                <div key={dish.id} className='single_dish' onClick={() => SetSelected(dish)}>         
                    <p className='dish_name'>{dish.name}</p> 
                    <img className='dish_image' src={dish.image} alt=''/> 
                </div> 
            </div>
                                   
            )
        
} 






export default List


