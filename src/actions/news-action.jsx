import AppConstants from '../constants';
import RequestService from '../service/request-service';

export default class NesAction {
  static setNewsData(data) {
    return ({
      type: AppConstants.SET_NEWS_DATA,
      payload: {
        data,
      },
    });
  }

  static setFilteredSearchList(data) {
    return ({
      type: AppConstants.SET_SEARCH_FILTERED_LIST,
      payload: {
        data,
      },
    });
  }

  static getNewsSuggetionList(searchText) {
    const url = `http://content.guardianapis.com/search?api-key=test&q=${searchText}`;
    return dispatch => RequestService.fetch(url)
      .then(({ data }) => {
        dispatch(NesAction.setNewsData(data.response.results));
        return data.response.results;
      });
  }

  static getSearchList(searchText) {
    const url = `http://content.guardianapis.com/search?api-key=test&q=${searchText}&show-fields=thumbnail,headline&show-tags=keyword&page=1&page-size=10`
    return dispatch => RequestService.fetch(url)
      .then(({ data }) => {
        dispatch(NesAction.setFilteredSearchList(data.response.results));
      });
  }

}
