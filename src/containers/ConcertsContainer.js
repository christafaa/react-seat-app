import React, { Component } from 'react';
import Concert from '../components/Concert';
import SeatMap from '../components/SeatMap';

export default class ConcertsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedConcert: {},
      concerts: [
        {
          title: "Concert 1",
          date: "December 3, 2018",
          venue: "Alice Tully Hall",
          attendees: [],
          seats: [
            {number: 1, attendee_id: null}, {number: 2, attendee_id: null}, {number: 3, attendee_id: null}, {number: 4, attendee_id: null}, {number: 5, attendee_id: null},
            {number: 6, attendee_id: null}, {number: 7, attendee_id: null}, {number: 8, attendee_id: null}, {number: 9, attendee_id: null}, {number: 10, attendee_id: null},
            {number: 11, attendee_id: null}, {number: 12, attendee_id: null}, {number: 13, attendee_id: null}, {number: 14, attendee_id: null}, {number: 15, attendee_id: null},
            {number: 16, attendee_id: null}, {number: 17, attendee_id: null}, {number: 18, attendee_id: null}, {number: 19, attendee_id: null}, {number: 20, attendee_id: null}
          ]
        },
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
        <SeatMap concert={this.state.concerts[0]}/>
      </React.Fragment>
    )
  }
}
