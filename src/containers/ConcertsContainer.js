import React, { Component } from 'react';
import Concert from '../components/Concert';
import SeatMap from '../components/SeatMap';
import { connect } from 'react-redux';
import { fetchConcerts } from '../actions/concerts';
import { fetchSeats } from '../actions/seats'

class ConcertsContainer extends Component {

  componentDidMount() {
    this.props.fetchConcerts()
    this.props.fetchSeats()
  }

  // handleOnClick = () => {
  //   this.props.fetchSeats()
  // }

  renderConcerts = () => {
    return this.props.concerts.map(concert => <Concert key={concert.id} title={concert.title} handleOnClick={this.handleOnClick} />)
  }

  render() {
    return (
      <React.Fragment>
        <div className="three columns">
          {this.renderConcerts()}
        </div>
      </React.Fragment>
    )
  }
}

// <SeatMap concert={this.props.concerts[0]}/>

const mapStateToProps = state => {
  return { concerts: state.concerts.data }
}

export default connect(mapStateToProps, {fetchConcerts})(ConcertsContainer)
