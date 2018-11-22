import React, { Component } from 'react';
import Concert from '../components/Concert';
import SeatMap from '../components/SeatMap';

export default class ConcertsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      concerts: [
        {title: "Concert 1"},
        {title: "Concert 2"},
        {title: "Concert 3"},
        {title: "Concert 4"},
        {title: "Concert 5"},
        {title: "Concert 6"},
        {title: "Concert 7"},
        {title: "Concert 8"},
        {title: "Concert 9"}
      ]
    };
  }

  renderConcerts = () => {
    return this.state.concerts.map(function(concert){
      return <p><Concert title={concert.title}/></p>
    })
  }

  render() {
    return (
      <React.Fragment>
        <span>
          <div className="three columns">
            {this.renderConcerts()}
          </div>
        </span>
        <SeatMap />
      </React.Fragment>
    )
  }
}
