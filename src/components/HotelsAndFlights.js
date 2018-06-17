import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HAFcard from './HAFcard';

class HotelsAndFlights extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  onPrevious() {
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="hotelsAndFlights">
        <h1>Hotels and flights</h1>
        <div className="">
          <div className="row">
            {/* col-md-6, box-shadow */}
            <div className="col-md-6 col-sm-6">
              <HAFcard
                className1="far fa-calendar-alt"
                text="Search"
                text2="Search for a your perfect vacation"
                number="1"
              />
            </div>
            <div className="col-md-6 col-sm-6">
              <HAFcard
                className1="fas fa-user-check"
                text="Confirm"
                text2="Confirm the vacation that you choosed"
                number="2"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-6">
              <HAFcard
                className1="fas fa-plane"
                text="The Flight"
                text2="Fly to your destination"
                number="3"
              />
            </div>
            <div className="col-md-6 col-sm-6">
              <HAFcard
                className1="far fa-check-circle"
                text="The Arrival"
                text2="Arrive to your destination"
                number="4"
              />
            </div>
          </div>

          <div className="flexSpaceAround">
            <button className="btn btn1" onClick={this.onPrevious.bind(this)}>
              <i className="fas fa-arrow-alt-circle-left" /> Go Back
            </button>
            <Link to="/destinations">
              <button className="btn btn2">
                Search
                <i className="fas fa-arrow-alt-circle-right ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HotelsAndFlights);
