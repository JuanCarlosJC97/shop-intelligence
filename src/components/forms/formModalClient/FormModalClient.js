import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, FormControl, FormLabel } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './FormModalClient.css'

export default function FormModalClient(props) {
    const [show, setShow] = useState(false);
    return (
        <Modal {...props} className="modal" aria-labelledby="contained-modal-title-center">
            <Modal.Header closeButton>
                <h1>Nuevo Cliente</h1>
            </Modal.Header>
            <Modal.Body className="modalBody">
                <>
                    <FormLabel> No. de Cliente *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Nombre *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Apellidos *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Fecha de Nacimiento *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Telefono *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Correo Electrónico *</FormLabel>
                    <FormControl></FormControl>
                </>
            </Modal.Body>
            <Modal.Footer>
                <>
                    <Button variant="secondary" onClick={()=>{setShow(false)}}>
                        Cancelar
                    </Button>
                    <Button variant="primary">
                        Guardar
                    </Button>
                </>
            </Modal.Footer>
        </Modal >
    )
}
