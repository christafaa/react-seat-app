import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SeatMap from '../components/SeatMap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchSeatmap } from '../actions/seatmap';

class SeatMapContainer extends Component {

  componentDidMount() {
    // this.props.fetchSeatmap(this.props.seatmapId)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("thisProps: " + this.props.seatmap.title)
  //   console.log("nextProps: " + nextProps.seatmap.title )
  //   console.log(nextProps.seatmap === this.props.seatmap)
  //   return nextProps.seatmap.title !== this.props.seatmap.title
  // }

  // componentDidUpdate() {
  //   this.props.fetchSeatmap(this.props.seatmapId)
  // }

  render() {
    return (
      <div className="seat-map">
        <Route exact path="/concerts/:id" render={({match}) => <SeatMap concert={this.props.seatmap} concertId={match.params.id}/>} />
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

export default withRouter(connect(mapStateToProps, { fetchSeatmap })(SeatMapContainer))
