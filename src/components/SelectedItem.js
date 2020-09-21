import React from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/SelectedItem.css'
import FormDialog from './formDialog';



function SelectedItem({dishSelected}) {
    var string = []
    dishSelected.comments.map( item =>
         string = Date(item.date).split(' ')
    )
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/"> Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/menu"> Menu</Link>
                    </BreadcrumbItem>
                    <Breadcrumb.Item active>{dishSelected.name}</Breadcrumb.Item>
                </Breadcrumb>
                <div className='selectedItem'>
            
                    <div className="selected_info selected_info-small">
                        <img src={'../'+ dishSelected.image }/>
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
                         <FormDialog />
                    </div>
                </div>

               
         </div>
        
        
        
    )
}



export default SelectedItem