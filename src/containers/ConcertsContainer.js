import React, { Component } from 'react';
import Concert from '../components/Concert';
import SeatMap from '../components/SeatMap';
import { connect } from 'react-redux';
import { fetchConcerts } from '../actions/concerts';
import { fetchSeatmap } from '../actions/seatmap';
import { clearSelection } from '../actions/seats';

class ConcertsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedConcert: null
    }
  }

  componentDidMount() {
    this.props.fetchConcerts()
  }

  handleOnClick = id => {
    this.setState({
      selectedConcert: id
    })
    this.props.fetchSeatmap(id)
    this.props.clearSelection()
  }

  renderConcerts = () => {
    return this.props.concerts.map(concert => <Concert key={concert.id} id={concert.id} title={concert.title} handleOnClick={this.handleOnClick} />)
  }

  renderSeatmap = () => {
    if (this.state.selectedConcert === null) {
      return <div/>
    }
    else {
      return <SeatMap concert={this.props.seatmap} concertId={this.state.selectedConcert}/>
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="three columns">
          <h5><em>select a concert</em></h5>
          {this.renderConcerts()}
        </div>
        {this.renderSeatmap()}
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

export default connect(mapStateToProps, {fetchConcerts, fetchSeatmap, clearSelection})(ConcertsContainer)
