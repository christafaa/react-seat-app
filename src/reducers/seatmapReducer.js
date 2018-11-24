export default function seatReducer(state = {
  data: {title: "Loading", date: "Loading", venue: "Loading", seats: []}
}, action) {

  switch(action.type) {

    case 'FETCH_SEATMAP':
      return state

    case 'ADD_SEATMAP':
      return { data: action.payload }

    case 'PURCHASE_SEATS':
      return state

    default:
      return state;
  }
};
