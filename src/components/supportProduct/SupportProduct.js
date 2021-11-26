import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Logo from '../../images/logo.png'
import Table from 'react-bootstrap/Table'
import Products from '../../images/products.jpg'
import './SupportProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function SupportProduct() {
    const MySwal = withReactContent(Swal)

    const FormModalProduct = (title) => {
        Swal.fire({
            title: title,
            html: `
                <input type="text" id="clave" class="swal2-input" placeholder="Código de barras">
                <input type="text" id="name" class="swal2-input" placeholder="Nombre">
                <input type="text" id="Mark" class="swal2-input" placeholder="Marca">
                <input type="text" id="category" class="swal2-input" placeholder="Categoria">
                <input type="text" id="status" class="swal2-input" placeholder="Estatus">
                <input type="text" id="units" class="swal2-input" placeholder="Unidades">
                <input type="tex"  id="iva" class="swal2-input" placeholder="Iva %">
                <input type="text" id="ieps" class="swal2-input" placeholder="IEPS">
                <input type="text" id="price" class="swal2-input" placeholder="Precio">
                `,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            focusConfirm: false,
            preConfirm: () => {
                const clave = Swal.getPopup().querySelector('#clave').value
                const name = Swal.getPopup().querySelector('#name').value
                const Mark = Swal.getPopup().querySelector('#Mark').value
                const category = Swal.getPopup().querySelector('#category').value
                const status = Swal.getPopup().querySelector('#status').value
                const units = Swal.getPopup().querySelector('#units').value
                const iva = Swal.getPopup().querySelector('#iva').value
                const ieps = Swal.getPopup().querySelector('#ieps').value
                const price = Swal.getPopup().querySelector('#price').value
                if (!clave || !name || !Mark  || !category || !status || !units || !iva || !ieps || !price) {
                    Swal.showValidationMessage(`por favor completa los campos`)
                }
                return { clave: clave, nam: name, Mark: Mark, category: category, status: status, units: units, iva: iva, ieps: ieps, price: price   }
            }
        }).then((result) => {
            //mandar a llamar el fetch para enviar los datos al backend
        })
    }

    const MyAlert = () => {
        Swal.fire({
            title: '¿Desea Eliminar este registro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'Tu registro ha sido eliminado.',
                    'success'
                )
            }
        })
    }
    return (

        <Container className="supportProduct">
            <Row>
                <Col md={4} lg={4}>
                    <Image className="logo" src={Logo}></Image>
                </Col >
                <Col className="title" sm={6} md={4} lg={4}>
                    <h1>Catálogo de Productos</h1>
                </Col>
                <Col className="col-button-close" sm={4} md={4} lg={4}>
                    <Button className="mb-3 button-inicio" variant="link">Inicio</Button>
                    <Button className="mb-3 button-close" variant="primary">Cerrar sesión</Button>
                </Col>
            </Row>
            <Row className="justify-content-md-end">
                <Col lg={11}>
                    <Button className="mb-3 add-product" variant="light" onClick={() => { FormModalProduct("Nuevo Producto") }}>Nuevo Producto <FontAwesomeIcon className="icon-plus" icon={faPlus} /></Button>
                </Col>
            </Row>
            <Row>
                <Col xs={9} sm={12} md={12} lg={12}>
                    <Table className="table-products" bordered size="sm" responsive>
                        <thead>
                            <tr>
                                <th>Código de Barras</th>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Categoría</th>
                                <th>Estatus</th>
                                <th>Unidades</th>
                                <th>IVA %</th>
                                <th>IEPS</th>
                                <th>Precio $</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>234-5R5-345S</td>
                                <td>Rufles</td>
                                <td>Sabritas</td>
                                <td>Botana</td>
                                <td>Disponible</td>
                                <td>37</td>
                                <td>5%</td>
                                <td>$27.89</td>
                                <td>15</td>
                                <td><FontAwesomeIcon className="icon-trash" icon={faPencilAlt} onClick={() => { FormModalProduct("Modificar Product") }} /></td>
                                <td><FontAwesomeIcon className="icon-trash" icon={faTrashAlt} onClick={() => { MyAlert() }} /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="justify-content-md">
                <Col lg={12}>
                    <Image className="img-product" src={Products} roundedCircle></Image>
                </Col>
            </Row>
        </Container>
    )
}
