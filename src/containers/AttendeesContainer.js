import React, { Component } from 'react';
import Attendee from '../components/Attendee';
import { connect } from 'react-redux';
import { fetchAttendees } from '../actions/attendees';
import { clearSelection } from '../actions/seats';

class AttendeesContainer extends Component {

  componentDidMount(id) {
    this.props.fetchAttendees(this.props.concertId)
    this.props.clearSelection()
  }

  renderAttendees = () => {
    if (this.props.attendees.attendees) {
      const uniqueNames = []
      this.props.attendees.attendees.forEach(function(attendee) {
        if (uniqueNames.indexOf(attendee.name) === -1) {
          uniqueNames.push(attendee.name)
        }
      })
      return uniqueNames.map((attendee, idx) => <Attendee key={idx} name={attendee} />)
    }
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.renderAttendees()}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    attendees: state.attendees.data
  }
}

export default connect(mapStateToProps, { fetchAttendees, clearSelection })(AttendeesContainer)
