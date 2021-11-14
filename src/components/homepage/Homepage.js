import React from 'react';
import './Homepage.css';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Logo2 from '../../images/logo2.svg';
import Mark from '../../images/pin2.png';
import Search from '../../images/loupe.png';
import ShopCart from '../../images/shopping-cart.png';


export default function Homepage() {
    return (
        <div className="home">
            <div className="header">
                <div className="nav">
                    <div className="logo">
                        <Image className="logo-image" src={Logo2}></Image>
                    </div>
                    <div className="menu">
                    <Button id="inicio" className="mb-3" type="button" variant="links" size="lg" bsPrefix="btn" >Inicio</Button>
                    <Button id="menu" className="mb-3" type="button" variant="links" size="lg" bsPrefix="btn" >Menú</Button>
                    <Button id="ofertas" className="mb-3" type="button" variant="links" size="lg" bsPrefix="btn" >Ofertas</Button>
                    <Button id="promo" className="mb-3" type="button" variant="links" size="lg" bsPrefix="btn" >Promociones</Button>
                    <Button id="nosotros" className="mb-3" type="button" variant="links" size="lg" bsPrefix="btn" >Nosotros</Button>
                    </div>
                    <div className="icons">
                        <Image className="mark" src={Mark}></Image>
                        <Image className="search" src={Search}></Image>
                        <Image className="shopCart" src={ShopCart}></Image>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="colum1">
                    <span className="text1">¡ Ven por nuestro</span>
                    <span className="text2">Pan de muerto Tradicional!</span>
                    <div className="promo">
                        <div className="promoText">
                            <p className="promoTitle"></p>
                            <div >
                                <p className="promoCost">3 x 2 Pan de Muerto</p>
                                <p className="promoTerm">Por $50</p>
                                <p className="promoDesc">Marmoleado y sin azúcar añadida</p>
                            </div>
                            <Button></Button>
                        </div>
                        <div className="prooButtons">
                            <Button></Button>
                            <Button></Button>
                        </div>
                    </div>
                </div>
                <div className="colum2">

                </div>
                <div className="colum3">

                </div>
            </div>
            <div className="footer">
            </div>
            {/* <div className="elipses">
                <div class="Ellipse-4"></div>
                <div class="Ellipse-3"></div>
            </div> */}
        </div>
    )
}
