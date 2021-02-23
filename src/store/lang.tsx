// Vendors
import { Dispatch } from 'redux';

// Data
import { supportedLanguages } from 'data';

// ACTIONS
const SET_LANG = 'SET_LANG';

interface SetLangAction {
	type: typeof SET_LANG,
	payload: {
		lang_code: string
	}
}

type LangActionTypes = SetLangAction

function setLocal (lang_code='en') {
	return (dispatch: Dispatch<LangActionTypes>, getState: any) => {

		return dispatch({
			type: SET_LANG,
			payload: {
				lang_code: supportedLanguages.includes(lang_code) ? lang_code : 'en'
			}
		});
	};
}

export const actions = {
	setLocal
};

export interface ILangState {
	code: string
}

const initialState: ILangState = {
	code: 'en'
};

export function reducer (state = initialState, action: LangActionTypes) {
	switch (action.type) {
		case SET_LANG:
			return {
				code: action.payload.lang_code
			};
		default:
			return state;
	}
}
