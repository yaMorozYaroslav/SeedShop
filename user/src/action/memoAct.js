import {GET_ALL, CREATE, UPDATE, DELETE} from '../constants'
import * as api from '../api'

export const getMemos =()=> async(dispatch)=>{
	try{
		const {data} = await api.fetchMemos()
		dispatch({type: GET_ALL, payload: data})
	}catch(error){
		console.log(error.message)
	}
}
export const createMemo =(memo)=> async(dispatch)=>{
	try{
		const {data} = await api.createMemo(memo)
		dispatch({type: CREATE, payload: data})
	}catch(error){
		console.log(error)
	}
}
export const updateMemo =(id, memo)=> async(dispatch)=>{
	try{
		const {data} = await api.updateMemo(id, memo)
		dispatch({type: UPDATE, payload: data})
	}catch(error){
		console.log(error)
	}
}
export const deleteMemo =(id)=> async(dispatch)=>{
	try{
		await api.deleteMemo(id)
		dispatch({type: DELETE, payload: id})
	}catch(error){
		console.log(error)
	}
}