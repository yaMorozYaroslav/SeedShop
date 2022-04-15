import {FETCH_ALL, CREATE, DELETE} from '../constants'

const memoRed =(memos=[], action)=> {
   switch(action.type){
   	case DELETE:
   	   return memos.filter((memo)=>memo._id !== action.payload)
   	case CREATE:
   	   return [...memos, action.payload]
   	case FETCH_ALL:
   	   return action.payload
   default:
      return memos
   }
}
export default memoRed