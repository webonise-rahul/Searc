import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import NesAction from '../actions/news-action';

const ResultList = ({ match }) => {
  const [isReacordAvailable, setIsReacordAvailable] = useState(false);
  const searchFilteredList = useSelector(state => state.newsDatReducer.searchFilteredList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NesAction.getSearchList(match.params.searchText));
  }, [])

  const onNewsUrlClick = (url) => {
    window.open(url);
  }

  return (
    <div>
      {searchFilteredList && searchFilteredList.length ? (
        <div>
          <ul>
            {searchFilteredList.map(item => (
              <li
                key={item.id}
                onClick={() => onNewsUrlClick(item.webUrl)}
              >
                <img src={item.fields.thumbnail || require('../assets/logo.png')} width="40" height="40" />
                {item.fields.headline}
                <h4>
                  keywords: 
                </h4>
                {item.tags && item.tags.length && item.tags.map(tag => {
                  return <span onClick={() => onNewsUrlClick(tag.webUrl)}>{tag.webTitle}, </span>
                })}
              </li>
            ))}
          </ul>
        </div>
      ) : (isReacordAvailable) &&
        <div>
          <ul>
            <li className="noResult">No Records Found</li>
          </ul>
        </div>
      }
    </div>
  )
}

export default ResultList;