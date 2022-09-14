import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/messages';

export const fetchMessage = () => async (dispatch) => {
  const response = await axios.get(API_URL);
  const data = await response.data;
  dispatch({ type: 'load', payload: data });
};

export const messagesReducer = (state = 'Hi', action) => {
  switch (action.type) {
    case 'load':
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export const store = configureStore({reducer: messagesReducer}, applyMiddleware(thunk));
