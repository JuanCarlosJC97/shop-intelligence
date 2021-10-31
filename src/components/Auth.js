import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap'
import MyModal from './modal/MyModal';
import Image from 'react-bootstrap/Image'
import logo from '../images/logo.png'
import './Auth.css'


export function Auth(props) {
  const title = useState(props.title);
  const [modalShow, setModalShow] = React.useState(false);

  /* function sendInfo() {
    console.log('hola');
  } */

  return (
    <div className="auth">
      <div className="body">
        <Container className="Container" bsPrefix>
          <Image className="logo" src={logo} bsPrefix />
          <label className="title">{title}</label>
          <Row className="user" bsPrefix>
            <>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
                <Form.Control type="email" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" >
                <Form.Control type="password" />
              </FloatingLabel>
            </>
            <Button className="passReset" variant="link" size="sm">¿Has olvidado tu contraseña?</Button>
          </Row>
          <Row className="send-info">
            <Button variant="secondary" className="mb-3" onClick={() => {setModalShow(true)}}>
              Enviar
            </Button>
          </Row>
        </Container>
      </div>
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Auth
