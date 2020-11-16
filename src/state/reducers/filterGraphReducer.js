import { UPDATE_GRAPH_FILTERS } from '../actions/index.js';

const initialState = {
  monthRange: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GRAPH_FILTERS:
      console.log(state.monthRange)
      return {
        ...state,
        monthRange: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
