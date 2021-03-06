export default function concertReducer(state = { data: [] }, action) {

  switch(action.type) {

    case 'FETCH_CONCERTS':
      return { ...state }

    case 'ADD_CONCERTS':
      return { data: action.payload }

    default:
      return state;
  }
};
