import React, { useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import { Button, Modal } from 'react-bootstrap';
import FormInput from './formInput';

function FormDialog() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Button style={{display: "flex", alignItems: "center"}} onClick={handleShow}>
                            <CreateIcon /> Add a Comment
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Your Comments</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <FormInput />
                </Modal.Body>

            </Modal>
            
        </div>
    )
}


export default FormDialog