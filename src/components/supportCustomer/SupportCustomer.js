import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Logo from '../../images/logo.png'
import Table from 'react-bootstrap/Table'
import Customer from '../../images/customer.jpg'
import './SupportCustomer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function SupportCustomer() {
    const MySwal = withReactContent(Swal)

    const FormModalCustomer = (title) => {
        Swal.fire({
            title: title,
            html: `
                <input type="text" id="clave" class="swal2-input" placeholder="No. de cliente">
                <input type="text" id="name" class="swal2-input" placeholder="Nombre">
                <input type="text" id="lastName" class="swal2-input" placeholder="Apellidos">
                <input type="text" id="dateOfBirth" class="swal2-input" placeholder="Fecha de nacimiento">
                <input type="text" id="numberPhone" class="swal2-input" placeholder="Telefono">
                <input type="email" id="emailCustomer" class="swal2-input" placeholder="correo electronico">
                `,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            focusConfirm: false,
            preConfirm: () => {
                const clave = Swal.getPopup().querySelector('#clave').value
                const name = Swal.getPopup().querySelector('#name').value
                const lastName = Swal.getPopup().querySelector('#lastName').value
                const dateOfBirth = Swal.getPopup().querySelector('#dateOfBirth').value
                const numberPhone = Swal.getPopup().querySelector('#numberPhone').value
                const emailCustomer = Swal.getPopup().querySelector('#emailCustomer').value
                if (!clave || !name || !lastName || !dateOfBirth || !numberPhone || !emailCustomer) {
                    Swal.showValidationMessage(`por favor completa los campos`)
                }
                return { clave: clave, nam: name, lastName: lastName, dateOfBirth: dateOfBirth, numberPhone: numberPhone, emailCustomer: emailCustomer }
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

        <Container className="supportCustomer">
            <Row>
                <Col md={4} lg={4}>
                    <Image className="logo" src={Logo}></Image>
                </Col >
                <Col className="title" sm={6} md={4} lg={4}>
                    <h1>Catálogo de Clientes</h1>
                </Col>
                <Col className="col-button-close" sm={4} md={4} lg={4}>
                    <Button className="mb-3 button-inicio" variant="link">Inicio</Button>
                    <Button className="mb-3 button-close" variant="primary">Cerrar sesión</Button>
                </Col>
            </Row>
            <Row className="justify-content-md-end">
                <Col lg={11}>
                    <Button className="mb-3 add-customer" variant="light" onClick={() => { FormModalCustomer("Nuevo Cliente") }}>Nuevo Cliente <FontAwesomeIcon className="icon-plus" icon={faPlus} /></Button>
                </Col>
            </Row>
            <Row>
                <Col xs={9} sm={12} md={12} lg={12}>
                    <Table className="table-customers" bordered size="sm" responsive>
                        <thead>
                            <tr>
                                <th>No. de Cliente</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Teléfono</th>
                                <th>Correo electrónico</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SRM001</td>
                                <td>Sarai</td>
                                <td>Resendiz Mendoza</td>
                                <td>20/07/1998</td>
                                <td>56-18-45-53-13</td>
                                <td>Saraaresendiz@gmail.com</td>
                                <td><FontAwesomeIcon className="icon-trash" icon={faPencilAlt} onClick={() => { FormModalCustomer("Modificar Cliente") }} /></td>
                                <td><FontAwesomeIcon className="icon-trash" icon={faTrashAlt} onClick={() => { MyAlert() }} /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="justify-content-md">
                <Col lg={12}>
                    <Image className="img-customer" src={Customer} roundedCircle></Image>
                </Col>
            </Row>
        </Container>
    )
}
