import { combineReducers } from 'redux';
import seatReducer from './seatReducer';
import concertReducer from './concertReducer';
import seatmapReducer from './seatmapReducer';

export default combineReducers({
  selectedSeats: seatReducer,
  concerts: concertReducer,
  seatmap: seatmapReducer
});
