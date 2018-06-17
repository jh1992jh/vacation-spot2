import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <p className="hugeHeaderText">
          "Experience your dream vacation" <br /> "experience the magic"
        </p>
        <div className="flexSpaceAround">
          <Link to="/hotels-and-flights">
            <button className="btn btn1">Explore Services</button>
          </Link>
          <button
            className="btn btn2"
            data-toggle="modal"
            data-target="#contact-modal"
          >
            <i className="far fa-play-circle" /> Watch The Video
          </button>
        </div>
      </header>
      <Modal />
    </div>
  );
};

export default Header;
