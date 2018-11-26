import React, { Component } from 'react';
import Concert from '../components/Concert';
import { connect } from 'react-redux';
import { fetchConcerts } from '../actions/concerts';
import { clearSelection } from '../actions/seats';
import { fetchSeatmap } from '../actions/seatmap';

class ConcertsContainer extends Component {

  componentDidMount() {
    this.props.fetchConcerts()
  }

  handleClick = (id) => {
    this.props.clearSelection();
    this.props.fetchSeatmap(id);
  }

  renderConcerts = () => {
    return this.props.concerts.map(concert => <Concert key={concert.id} concert={concert} handleClick={(id) => this.handleClick(id)} />)
  }

  render() {
    return (
      <div className="three columns">
        <h5><em>select a concert</em></h5>
        {this.renderConcerts()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    concerts: state.concerts.data,
  }
}

export default connect(mapStateToProps, { fetchConcerts, clearSelection, fetchSeatmap })(ConcertsContainer)
