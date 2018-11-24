export const fetchSeatmap = (id) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_SEATMAP' });
    return fetch(`http://localhost:3000/concerts/${id}/seats`)
      .then(response => response.json())
      .then(seatmap => dispatch({ type: 'ADD_SEATMAP', payload: seatmap }));
  };
};
