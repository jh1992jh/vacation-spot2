import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearVacation } from '../actions/vacationActions';

class Navbar extends Component {
  onClearVacation() {
    this.props.clearVacation();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navBackground fixed-top">
        <div className="container center-align">
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link to="/" className="navbar-brand">
            <button onClick={this.onClearVacation.bind(this)}>
              VacationSpot <i className="fas fa-plane" />
            </button>
          </Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <div className="socialIconsBackground d-flex">
                <li className="nav-item">
                  <a href="https://twitter.com" className="nav-link">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://facebook.com" className="nav-link">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://instagram.com" className="nav-link">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://snapchat.com" className="nav-link">
                    <i className="fab fa-snapchat" />
                  </a>
                </li>
              </div>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/explore" className="nav-link">
                  Explore
                </Link>
              </li>{' '}
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/share" className="nav-link">
                  Share
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(
  null,
  { clearVacation }
)(Navbar);
