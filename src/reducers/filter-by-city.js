import { CITY_VALUE } from '../actions/filter-by-city';


const initialState = {
	selectedCity: null
}

export const setCity = (state=initialState, action) => {
	if (action.type === CITY_VALUE) {
		return Object.assign({}, state, {selectedCity: action.selectedCity})
	}
	else return state;
}