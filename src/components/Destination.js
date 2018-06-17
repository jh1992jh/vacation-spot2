import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearVacation } from '../actions/vacationActions';

class VacationItem extends Component {
  onClearVacation() {
    this.props.clearVacation();
    this.props.history.push('/destinations');
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
    } = this.props.vacation.vacation;
    return (
      <div className="vacationItem" style={{ marginTop: '28%' }}>
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
            {state !== null ? (
              <h3>
                State:
                {state}
              </h3>
            ) : (
              <h3>{continent}</h3>
            )}
            <h2>
              Country:
              {country}
            </h2>
          </div>
        </div>

        <div className="d-flex vacationIcons">
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
        </div>
        <div className="row d-flex justify-content-center">
          <button
            className="btn btn1 m-4"
            onClick={this.onClearVacation.bind(this)}
          >
            <div className="fas fa-arrow-alt-circle-left mr-3" />
            Go back
          </button>

          <Link to="/destinations/destination/confirmation">
            <button className="btn btn2 m-4">
              Confirm
              <i className="fas fa-user-check ml-3" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vacation: state.vacation
});

export default connect(
  mapStateToProps,
  { clearVacation }
)(withRouter(VacationItem));
