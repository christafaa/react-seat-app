export const fetchConcerts = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_CONCERTS' });
    return fetch('https://guarded-retreat-91644.herokuapp.com/concerts')
      .then(response => response.json())
      .then(concerts => dispatch({ type: 'ADD_CONCERTS', payload: concerts }));
  };
};
