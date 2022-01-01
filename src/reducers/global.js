import store from "store";

export const initGlobalState = {

};

export default function globalReducer(state, action) {
	let newState = { ...state };
	const { type, payload } = action;
	switch (type) {
		
		default:
			throw new Error("Invalid action");
	}
	return newState;
}
