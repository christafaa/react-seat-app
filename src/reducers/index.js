import { combineReducers } from 'redux';
import seatReducer from './seatReducer';

export default combineReducers({
  selectedSeats: seatReducer,
});
