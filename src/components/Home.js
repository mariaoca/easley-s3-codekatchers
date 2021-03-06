import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import mainLogo from './../images/tarjetas-molonas.png';

class Home extends Component {
  render() {
    return (
      <div className="page_wrapper">
        <div className="hero_box">
          <div className="header_box">
            <header className="header_container-img">
              <img className="container_img-card" src={mainLogo} alt="" />
            </header>
          </div>
          <h1 className="hero_title">Crea tu tarjeta de visita</h1>
          <div className="hero_text">
            <p className="hero_text-style">Crea mejores contactos profesionales de forma fácil y cómoda</p>
          </div>
          <div className="hero_icons">
            <ul className="hero_icons-list">
              <div>
                <li className="list list-design">
                  <div>
                    <i className="far fa-object-ungroup"></i>
                  </div>
                  <div>
                    Diseña
					        </div>
                </li>
              </div>
              <div>
                <li className="list list-fill">
                  <div><i className="far fa-keyboard"></i></div>
                  <div>
                    Rellena
					        </div>
                </li>
              </div>
              <div>
                <li className="list list-share">
                  <div><i className="fas fa-share-alt"></i></div>
                  <div>
                    Comparte
					        </div>
                </li>
              </div>
            </ul>
          </div>
          <Link className="hero_btn-link" to='/card'>
            <button className="hero_btn btn-style">Comenzar</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
