export default function seatReducer(state = {
  data: {id: 0, title: "Loading", date: "Loading", location: "Loading", seats: []}
}, action) {

  switch(action.type) {

    case 'FETCH_SEATMAP':
      // return {
      //   data: {title: "Loading", date: "Loading", venue: "Loading", seats: []}
      // }
      return state

    case 'ADD_SEATMAP':
      console.log(action.payload)
      return { data: action.payload }

    case 'PURCHASE_SEATS':
      return state

    default:
      return state;
  }
};
