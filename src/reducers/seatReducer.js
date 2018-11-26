export default function seatReducer(state = {
  data: []
}, action) {

  switch(action.type) {

    case 'ADD_SELECTION':
      return { data: [...state.data, action.payload] }

    case 'REMOVE_SELECTION':
      return { data: state.data.filter(seat => seat !== action.payload) }

    case 'CLEAR_SELECTIONS':
      return { data: [] }

    default:
      return state;
  }
};
