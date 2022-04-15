import {FETCH_ALL, CREATE, DELETE} from '../constants'

const memoRed =(memos=[], action)=> {
   switch(action.type){
   	case DELETE:
   	   return memos.filter((memo)=>post._id !== action.payload)
   	case CREATE:
   	   return [...posts, action.payload]
   	case FETCH_ALL:
   	   return action.payload
   default:
      return posts
   }
}
export default memoRed