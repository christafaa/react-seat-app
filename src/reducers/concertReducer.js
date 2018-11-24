export default function concertReducer(state = {}, action) {

  switch(action.type) {

    case 'ADD_CONCERTS':
      return { concerts: [action.payload] }

    default:
      return state;
  }
};
