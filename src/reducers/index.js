import { combineReducers } from 'redux';
import seatReducer from './seatReducer';
import concertReducer from './concertReducer';

export default combineReducers({
  selectedSeats: seatReducer,
  concerts: concertReducer
});
