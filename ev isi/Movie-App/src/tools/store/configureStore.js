import React from 'react'
import { createStore } from 'redux';
import { movieReducer } from '../reducers/movieReducer';
import { combineReducers } from 'redux';

const configureStore = () => {

    const store = createStore(combineReducers({
        movie:movieReducer,
    }));

  return store
}

export default configureStore