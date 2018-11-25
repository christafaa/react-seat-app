export default function attendeeReducer(state = { data: [] }, action) {

  switch(action.type) {

    case 'FETCH_ATTENDEES':
      return { ...state }

    case 'ADD_ATTENDEES':
      return { data: action.payload }

    default:
      return state;
  }
};
