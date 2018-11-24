export default function seatReducer(state = {
  data: []
}, action) {

  switch(action.type) {

    case 'FETCH_SEATMAP':
      return { ...state }

    case 'ADD_SEATMAP':
      return { data: action.payload }

    default:
      return state;
  }
};
