import {SET_CATEGORY,SET_TYPE, SET_SEARCH, RESET,
	    SET_MIN_PRICE, SET_MAX_PRICE, ERROR} from "./QueryTypes"

const QueryReducer = (state, action) => {
  switch (action.type) {
	  
	case SET_CATEGORY:
	  return {...state, category: action.payload}
	case SET_TYPE:
	  return {...state, type: action.payload}
    case SET_SEARCH:
      return {...state, search: action.payload}
    case SET_MIN_PRICE:
      return {...state, price: {...state.price, min:action.payload}}
    case SET_MAX_PRICE:
      return {...state, price: {...state.price, max:action.payload}}
    case RESET:
      return action.payload
    case ERROR:
	return{...state,error: action.payload}
   
    default:
      return state;
  }
}

export default QueryReducer;
