import React from 'react'
import '../css/SelectedItem.css'



function SelectedItem({dishSelected}) {
    var string = []
    dishSelected.comments.map( item =>
         string = Date(item.date).split(' ')
    )
        return (
        <div className='selectedItem'>
            <div className="selected_info selected_info-small">
                <img src={dishSelected.image} />
                <p style={{fontWeight: 'bold', fontSize:'20px'}}>{dishSelected.name}</p>
                <p>{dishSelected.description}</p>
            </div>

            <div className="selected_comments selected_comments-small">
                <p>Comments</p>
                {dishSelected.comments.map( item =>
                        <div>
                            <p>{item.comment}</p>
                            <p>-- {item.author},{string[1]} {string[2]} {string[3]}</p>
                        </div>
                    )}
            </div>
                
            
        </div>
    )
}



export default SelectedItem