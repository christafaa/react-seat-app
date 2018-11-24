import React, { Component } from 'react';
// import SeatMap from '../components/SeatMap';
import { connect } from 'react-redux';
import { clearSelection } from '../actions/seats';

class SeatMapContainer extends Component {

  componentDidMount() {
    this.props.fetchConcerts()
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedConcert: null
    }
  }

  renderSeatmap = () => {
    // this.props.clearSelection()
    // if (this.state.selectedConcert === null) {
    //   return <div/>
    // }
    // else {
    //   return <SeatMap concert={this.props.seatmap} concertId={this.state.selectedConcert}/>
    // }
    console.log(this.props.seatmapId)
  }

  render() {
    return (
      <div className="seat-map">
        {this.renderSeatmap()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    seatmap: state.seatmap.data
  }
}

export default connect(mapStateToProps, {clearSelection})(SeatMapContainer)
