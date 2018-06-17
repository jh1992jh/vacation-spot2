import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addVacation } from '../actions/vacationActions';

class VacationItem extends Component {
  onAddVacation() {
    this.props.addVacation(this.props);
    this.props.history.push('/destinations/destination');
  }
  render() {
    const {
      img,
      vacationLocation,
      type,
      cost,
      state,
      continent,
      country,
      activities,
      additionalInfo
    } = this.props;
    return (
      <div className="vacationItem">
        <div>
          <div>
            <img src={img} alt="vacationItem" />
          </div>
        </div>

        <div>
          <div className="vacationDetails">
            <h2>
              Location:
              {vacationLocation}
            </h2>
            <h3>
              Type:
              {type}
            </h3>
            <h3>
              Cost: <br />
              {cost}€
            </h3>

            <h2>
              Country:
              {country}
            </h2>
          </div>
        </div>

        {/* <div className="d-flex vacationIcons">
        <div className="vacationItemBackground">
          <i className={activities[0]} />
        </div>
        <div className="vacationItemBackground">
          <i className={activities[1]} />
        </div>
        <div className="vacationItemBackground">
          <i className={activities[2]} />
        </div>
        <div className="vacationItemBackground">
          <i className={activities[3]} />
        </div>
      </div>

      <div className="additionalDetails">
        <div>
          <p>{additionalInfo}</p>
        </div> 
      </div>*/}
        <button className="btn" onClick={this.onAddVacation.bind(this)}>
          Book The Vacation
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addVacation }
)(withRouter(VacationItem));
