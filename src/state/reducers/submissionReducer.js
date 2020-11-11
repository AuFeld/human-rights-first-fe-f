import { SEND_SUBMISSION } from '../actions/index.js';

const initialState = {
  name: '',
  date: '',
  category: '',
  description: '',
  email: '',
  crossStreets: '',
};

export const submissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_SUBMISSION:
      return {
        ...state,
        initialState: action.payload,
      };
  }
};
