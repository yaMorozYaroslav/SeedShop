import * as consts from '../consts'

export const func = (elvs=[], action) => {
	switch(action.type){
		case consts.FETCH_ELVS:
		     return action.payload
		default:
		     return elvs
	}
}