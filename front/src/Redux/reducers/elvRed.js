import * as type from '../tools/consts'

const func = (elvs=[], action) => {
	switch(action.type){
		case type.FETCH_ELVS:
		     return action.payload
		default:
		     return elvs
	}
}
export default func