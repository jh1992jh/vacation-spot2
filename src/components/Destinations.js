import React, { Component } from 'react';
import VacationItem from './VacationItem';
import { vacationItems } from '../items/vacationItems';

class Destinations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vacationItems: vacationItems
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { vacationItems } = this.state;
    const outputItems = vacationItems.map(vacationItem => (
      <VacationItem
        country={vacationItem.country}
        state={vacationItem.state}
        continent={vacationItem.continent}
        vacationLocation={vacationItem.location}
        type={vacationItem.type}
        img={vacationItem.img}
        cost={vacationItem.cost}
        activities={vacationItem.activities}
        additionalInfo={vacationItem.additionalInfo}
      />
    ));
    return (
      <div className="destinations">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2>Destinations</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">{outputItems}</div>
        </div>
      </div>
    );
  }
}

export default Destinations;
