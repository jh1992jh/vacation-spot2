import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HotelsAndFlights from './components/HotelsAndFlights';
import Destinations from './components/Destinations';
import Destination from './components/Destination';
import Confirmation from './components/Confirmation';
import store from './store';
import './App.css';

class AppRoutes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Navbar />
            <div className="container">
              <Route exact path="/" component={App} />
              <Route
                exact
                path="/hotels-and-flights"
                component={HotelsAndFlights}
              />
              <Route exact path="/destinations" component={Destinations} />
              <Route
                exact
                path="/destinations/destination"
                component={Destination}
              />
              <Route
                exact
                path="/destinations/destination/confirmation"
                component={Confirmation}
              />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default AppRoutes;
