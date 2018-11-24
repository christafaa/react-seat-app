export default function seatReducer(state = {
  selectedSeats: []
}, action) {

  switch(action.type) {

    case 'ADD_SELECTION':
      return { selectedSeats: [...state.selectedSeats, action.payload] }

    case 'REMOVE_SELECTION':
      return { selectedSeats: state.selectedSeats.filter(seat => seat !== action.payload) }

    case 'CLEAR_SELECTIONS':
      return { selectedSeats: [] }

    default:
      return state;
  }
};
