export const fetchSeatmap = (id) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_SEATMAP' });
    return fetch(`http://localhost:3000/concerts/${id}/seats`)
      .then(response => response.json())
      .then(seatmap => dispatch({ type: 'ADD_SEATMAP', payload: seatmap }));
  };
};

export const submitPurchase = (concertId, seatIds, attendeeName) => {
  return (dispatch) => {
    dispatch({ type: 'PURCHASE_SEATS' });
    return fetch(`http://localhost:3000/concerts/${concertId}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({concert: {seatIds: seatIds, attendeeName: attendeeName}})
    })
      .then(response => response.json())
      .then(seatmap => dispatch({ type: 'ADD_SEATMAP', payload: seatmap }));
  };
};
