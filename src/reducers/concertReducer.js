export default function concertReducer(state = {
  loading: false,
  data: []
}, action) {

  switch(action.type) {

    case 'FETCH_CONCERTS':
      return { ...state, loading: true }

    case 'ADD_CONCERTS':
      return { loading: false, data: action.payload }

    default:
      return state;
  }
};
