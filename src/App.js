import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CustomHr from './components/CustomHr';
import CardContainer from './components/CardContainer';
import InfoPicContainer from './components/InfoPicContainer';
import Testimonials from './components/Testemonials';
import CardOffersContainer from './components/CardOffersContainer';
import DestinationCardContainer from './components/DestinationCardContainer';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <CardContainer columns="col-md-3" />
        <CustomHr
          className1="leftLine2"
          className2="rightLine2"
          className3="fas fa-plane"
          className4="circle"
        />
        <CardOffersContainer />
        <InfoPicContainer />
        <CustomHr
          className1="leftLine2"
          className2="rightLine2"
          className3="fas fa-plane"
          className4="circle"
        />
        <Testimonials />
        <CustomHr
          className1="leftLine2"
          className2="rightLine2"
          className3="fas fa-plane"
          className4="circle"
        />
        <DestinationCardContainer />
        <CustomHr
          className1="leftLine2"
          className2="rightLine2"
          className3="fas fa-plane"
          className4="circle"
        />
      </div>
    );
  }
}

export default App;
