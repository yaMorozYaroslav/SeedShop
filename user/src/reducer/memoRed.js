import {GET_ALL, CREATE, UPDATE, DELETE} from '../constants'

const memoRed =(memos=[], action)=> {
   switch(action.type){
   	case DELETE:
   	   return memos.filter((memo)=>memo._id !== action.payload)
   	case CREATE:
   	   return [...memos, action.payload]
      case UPDATE:
         return memos.map((memo)=>
                    memo._id===action.payload._id?action.payload:memo)
   	case GET_ALL:
   	   return action.payload
   default:
      return memos
   }
}
export default memoRed