export const fetchAttendees = (id) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_ATTENDEES' });
    return fetch(`https://guarded-retreat-91644.herokuapp.com/concerts/${id}/attendees`)
      .then(response => response.json())
      .then(attendees => dispatch({ type: 'ADD_ATTENDEES', payload: attendees }));
  };
};
