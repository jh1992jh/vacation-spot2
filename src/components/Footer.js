import React from 'react';
// import CustomHr from './CustomHr';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p>
              VacationSpot <i className="fas fa-plane" /> &copy;{' '}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
