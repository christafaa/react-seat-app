import React, { Component } from 'react';
import Concert from '../components/Concert';
import SeatMap from '../components/SeatMap';
import { connect } from 'react-redux';
import { fetchConcerts } from '../actions/concerts';
import { fetchSeatmap } from '../actions/seatmap'

class ConcertsContainer extends Component {

  componentDidMount() {
    this.props.fetchConcerts()
    this.props.fetchSeatmap(1)
  }

  // handleOnClick = () => {
  //   this.props.fetchSeats()
  // }

  renderConcerts = () => {
    return this.props.concerts.map(concert => <Concert key={concert.id} title={concert.title} handleOnClick={this.handleOnClick} />)
  }

  checkProps = () => {
    console.log(this.props)
  }

  render() {
    return (
      <React.Fragment>
        <div className="three columns">
          {this.renderConcerts()}
        </div>
          {this.checkProps()}
          <SeatMap concert={this.props.seatmap}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    concerts: state.concerts.data,
    seatmap: state.seatmap.data
  }
}

export default connect(mapStateToProps, {fetchConcerts, fetchSeatmap})(ConcertsContainer)
