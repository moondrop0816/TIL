import { combineReducers } from 'redux';
import todos from './todos';
import edit from './edit';

const rootReducer = combineReducers({
    todos,
    edit
});

export default rootReducer;