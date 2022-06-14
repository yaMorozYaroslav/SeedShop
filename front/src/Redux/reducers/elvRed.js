import * as type from '../consts'

const func = (elvs=[], action) => {
	switch(action.type){
		case type.FETCH_ELVS:
		     return action.payload
		default:
		     return elvs
	}
}
export default func