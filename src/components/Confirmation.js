import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearVacation } from '../actions/vacationActions';

class Confirmation extends Component {
  componentDidMount() {
    if (!this.props.vacation.vacation.country) {
      this.props.history.push('/');
    } else {
      console.log(this.props.vacation.vacation.country);
    }
  }
  onClearVacation() {
    this.props.clearVacation();
    this.props.history.push('/');
  }
  render() {
    const {
      img,
      vacationLocation,
      country,
      state,
      type
    } = this.props.vacation.vacation;
    return (
      <div className="confirmation">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-4">
              <div>
                <img
                  src={img}
                  alt="vacation"
                  style={{ maxHeight: '280px', maxWidth: '280px' }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <h2>{vacationLocation}</h2>
              {state !== null ? <h3>{state}</h3> : null}
              <h3>{type}</h3>
              <h2>{country}</h2>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-check-circle" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col d-flex justify-content-center">
              <h1>Confirmed!</h1>
              <button
                className="btn ml-3"
                onClick={this.onClearVacation.bind(this)}
              >
                <i className="fas fa-arrow-alt-circle-left mr-2" />
                Go Back
              </button>
            </div>
          </div>
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
)(withRouter(Confirmation));
