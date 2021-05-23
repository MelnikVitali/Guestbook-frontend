import { combineReducers } from 'redux';

import commentsReducer from './commentsSlice';

const rootReducer = combineReducers({
    comments: commentsReducer,
})

export default rootReducer;
