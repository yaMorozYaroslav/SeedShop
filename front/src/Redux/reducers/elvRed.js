import * as type from '../consts'

export const func = (elvs=[], action) => {
	switch(action.type){
		case type.FETCH_ELVS:
		     return action.payload
		default:
		     return elvs
	}
}