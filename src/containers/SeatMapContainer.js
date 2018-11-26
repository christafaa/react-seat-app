import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SeatMap from '../components/SeatMap';
import PurchaseForm from '../components/PurchaseForm';
import { connect } from 'react-redux';
import { fetchSeatmap } from '../actions/seatmap';

class SeatMapContainer extends Component {

  render() {
    this.props.fetchSeatmap(this.props.seatmapId)
    return (
      <div className="seat-map">
        <SeatMap concert={this.props.seatmap} concertId={this.props.seatmapId}/>
        <PurchaseForm selectedSeats={this.props.selectedSeats} concertId={this.props.seatmapId}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    seatmap: state.seatmap.data,
    selectedSeats: state.selectedSeats.selectedSeats
  }
}

export default connect(mapStateToProps, { fetchSeatmap })(SeatMapContainer)
