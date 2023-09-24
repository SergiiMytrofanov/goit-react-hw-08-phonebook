
import { combineReducers } from 'redux';
import authReducer from './authSlice';
import contactReducer from './contactSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactReducer,
});

export default rootReducer;
