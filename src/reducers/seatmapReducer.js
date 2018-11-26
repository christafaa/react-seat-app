export default function seatReducer(state = {
  data: {id: 0, title: "Loading", date: "Loading", location: "Loading", seats: []}
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
