import React, { Component } from 'react';
import SeatMap from '../components/SeatMap';
import { connect } from 'react-redux';
import { fetchSeatmap } from '../actions/seatmap';

class SeatMapContainer extends Component {

  componentDidMount() {
    this.props.fetchSeatmap(this.props.seatmapId)
  }

  render() {
    return (
      <div className="seat-map">
        <SeatMap concert={this.props.seatmap} concertId={this.props.seatmapId}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    seatmap: state.seatmap.data
  }
}

export default connect(mapStateToProps, { fetchSeatmap })(SeatMapContainer)
