import React, { Component } from 'react';
import Attendee from '../components/Attendee';
import { connect } from 'react-redux';
import { fetchAttendees } from '../actions/attendees';

class AttendeesContainer extends Component {

  componentDidMount() {
    this.props.fetchAttendees()
  }

  renderAttendees = () => {
    console.log("Hi")
    // this.props.attendees.map(attendee => <Attendee name={attendee.name} />)
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

export default connect(mapStateToProps, { fetchAttendees })(AttendeesContainer)
