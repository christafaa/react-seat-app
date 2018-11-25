export const fetchAttendees = (id) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_ATTENDEES' });
    return fetch(`http://localhost:3000/concerts/${id}/attendees`)
      .then(response => response.json())
      .then(concerts => dispatch({ type: 'ADD_ATTENDEES', payload: attendees }));
  };
};
