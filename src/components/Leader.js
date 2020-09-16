import React from 'react'
import '../css/Leader.css'

function Leader ({leader}) {
    return (
        <div className="leader">
            <div className='leader-image'> 
                <img src={leader.image} />
            </div>
            <div className='leader-info'>
                <h6>{leader.name}</h6>
                <p className='leader-designation'>{leader.designation}</p>
                <p>{leader.description}</p>
            </div>
            
        </div>
    )
}

export default Leader