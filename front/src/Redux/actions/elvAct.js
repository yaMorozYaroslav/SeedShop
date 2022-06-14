import * as type from '../consts'
import * as api from '../api'

export const getElvs =()=> async(dispatch)=> {
	try{
		const {data} = await api.fetchElvs()
		dispatch({type: type.FETCH_ELVS, payload: data})
	}catch(error){
		console.log(error.message)
	}
}