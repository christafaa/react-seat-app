export const addSelection = seat => {
  return { type: 'ADD_SELECTION', payload: seat };
};

export const removeSelection = seat => {
  return { type: 'REMOVE_SELECTION', payload: seat };
};

export const clearSelection = () => {
  return { type: 'CLEAR_SELECTIONS' }
}
