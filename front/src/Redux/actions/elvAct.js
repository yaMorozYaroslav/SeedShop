import * as type from '../tools/consts'
import * as api from '../tools/api'

export const getElvs =()=> async(dispatch)=> {
	try{
		const {data} = await api.fetchElvs()
		dispatch({type: type.FETCH_ELVS, payload: data})
	}catch(error){
		console.log(error.message)
	}
}