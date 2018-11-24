export const addSelection = number => {
  return { type: 'ADD_SELECTION', payload: number };
};

export const removeSelection = number => {
  return { type: 'REMOVE_SELECTION', payload: number };
};

export const clearSelection = () => {
  return { type: 'CLEAR_SELECTIONS' }
}
