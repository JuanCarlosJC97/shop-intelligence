import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, FormControl, FormLabel } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './FormModalProduct.css'

export default function FormModalProduct(props) {
    const [show, setShow] = useState(false);
    return (
        <Modal {...props} className="modal" aria-labelledby="contained-modal-title-center">
            <Modal.Header closeButton>
                <h1>Nuevo Producto</h1>
            </Modal.Header>
            <Modal.Body className="modalBody">
                <>
                    <FormLabel> Codigo de barras *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Nombre *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Marca *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Categoria *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Estatus *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Unidades *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> IVA% *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> IEPS *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Precio *</FormLabel>
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
