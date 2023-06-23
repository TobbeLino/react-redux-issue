import { createStore } from 'redux';

const initialState = {
	something: 'something',
	currentLanguage: 'en'
}

const reducer = (state = initialState, { type, payload }) => {
	return {
		...state
	}
};

export const store = createStore(reducer, initialState);
