const initialState = {
  items: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: return {
      ...state,
      items: [...state.items, action.payload],
    };
    default: return state;
  }
};
