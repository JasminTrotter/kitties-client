import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {setCity} from './reducers/filter-by-city';


const store = createStore(
    combineReducers({
        form: formReducer,
        city: setCity
    })
);

export default store;