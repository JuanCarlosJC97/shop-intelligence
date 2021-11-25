import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import FormModalProduct from '../forms/formModalProduct/FormModalProduct'
import Logo from '../../images/logo.png'
import Table from 'react-bootstrap/Table'
import Products from '../../images/products.jpg'
import './SupportProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function SupportProduct() {
    const [show, setShow] = useState(false);
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
                    <Button className="mb-3 add-product" variant="light" onClick={() => {setShow(true) }}>Nuevo Producto <FontAwesomeIcon className="icon-plus" icon={faPlus} /></Button>
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
                                <td>✏️</td>
                                <td><FontAwesomeIcon className="icon-trash" icon={faTrashAlt} /></td>
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
            <FormModalProduct
                show={show}
                onHide={() => setShow(false)}
            />
        </Container>
    )
}
