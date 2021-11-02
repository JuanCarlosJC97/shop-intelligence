import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap'
import MyModal from './modal/MyModal';
import Image from 'react-bootstrap/Image'
import logo from '../images/logo.png'
import fondo from '../images/fondowelcome.jpg'
import facebook from '../images/icons8-facebook.svg'
import instagram from '../images/icons8-instagram.svg'
import twitter from '../images/icons8-twitter.svg'
import './Auth.css'


export function Auth(props) {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <div className="auth">
      <div className="body">
        <div className="welcome">
          <Image src={fondo} className="fondo" />
          <div className="titleWelcome">
            <span class="Bienvenido-a-Shop-Intelligence"><span class="Rectangle-1">B</span>ienvenido a Shop Intelligence</span>
            <span class="Una-Abarrotera-con-todo-lo-nuevo-de-la-tecnologia-para-una-mejor-experiencia">
              Una Abarrotera con todo lo nuevo de la tecnologia, para una mejor experiencia.
            </span>
          </div>
          <div className="socialMedia">
            <Image src={facebook} className="social" bsPrefix />
            <Image src={twitter} className="social" bsPrefix />
            <Image src={instagram} className="social" bsPrefix />
          </div>
        </div>
        <div className="login">
          <div className="div-register" ><Button variant="secondary" className="mb-3">{props.texts[0].buttonUno}</Button></div>
          <Container className="Container" bsPrefix>
            <Image className="logo" src={logo} bsPrefix />
            <label className="title">{props.texts[0].title}</label>
            <Row className="user" bsPrefix>
              <>
                <Form.Control type="email" className="mb-3" placeholder={props.texts[0].place1} />
                <Form.Control type="password" className="mb-3" placeholder={props.texts[0].place2} />
              </>
            </Row>
            <Row className="send-info">
              <slot name="slot2" />
              <Button id="restarPass" className="passReset" variant="light" size="lg" >¿Olvidaste tu contraseña?</Button>
              <Button id="" variant="secondary" className="mb-3" onClick={() => { setModalShow(true) }}>
                {props.texts[0].buttonDos}
              </Button>
            </Row>
          </Container>
        </div>
      </div>
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Auth
