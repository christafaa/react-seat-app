import React, { Component } from 'react';
import Concert from '../components/Concert';
import { connect } from 'react-redux';
import { fetchConcerts } from '../actions/concerts';

class ConcertsContainer extends Component {

  componentDidMount() {
    this.props.fetchConcerts()
  }

  renderConcerts = () => {
    return this.props.concerts.map(concert => <Concert key={concert.id} concert={concert} />)
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

export default connect(mapStateToProps, { fetchConcerts })(ConcertsContainer)
