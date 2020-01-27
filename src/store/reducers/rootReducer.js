import {combineReducers} from 'redux';
import quizReducer from '../reducers/quiz';
import createReducer from './create';

export default combineReducers({
    quiz: quizReducer,
    create: createReducer
})