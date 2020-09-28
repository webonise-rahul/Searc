import AppConstants from '../constants';

const initialState = {
  newsSuggetionsData: [],
  searchFilteredList: [],
};

const NewsDatReducer = (state = initialState, action) => {
  const tempState = Object.assign({}, state);
  switch (action.type) {
    case AppConstants.SET_NEWS_DATA: {
      tempState.newsSuggetionsData = action.payload.data;
      break;
    }

    case AppConstants.SET_SEARCH_FILTERED_LIST: {
      tempState.searchFilteredList = action.payload.data;
      break;
    }
    default:
      return state;
  }
  return tempState;
};

export default NewsDatReducer;
