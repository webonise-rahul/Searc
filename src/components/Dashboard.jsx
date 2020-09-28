import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import NesAction from '../actions/news-action';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  const [isReacordAvailable, setIsReacordAvailable] = useState(false);
  const dispatch = useDispatch();
  const newsSuggetionsData = useSelector(state => state.newsDatReducer.newsSuggetionsData);
  const history = useHistory()

  const onSubmitButton = () => {
    history.push(`/search/${searchText}`);
  }

  const onSearchText = (value) => {
    setSearchText(value);
    dispatch(NesAction.getNewsSuggetionList(value)).then(response => !response.length && setIsReacordAvailable(true));
  }

  const onNewsUrlClick = (url) => {
    window.open(url);
  }

  return (
    <div className="news-container text-center">
      <h1>News Lister</h1>
      <label>
        Enter Search text
      </label>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={e => onSearchText(e.target.value)}
          placeholder="Search..."
        />
        <button onClick={onSubmitButton} className="btn btn-success">Search</button>
        <>
          {newsSuggetionsData.length ? (
            <div className='asach'>
              <ul>
                {newsSuggetionsData.map(item => (
                  <li
                    key={item.registrationNumber}
                    onClick={() => onNewsUrlClick(item.webUrl)}
                  >
                    {item.webTitle}
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
        </>
      </div>
    </div>
  )
}

export default Dashboard;
