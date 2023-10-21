import {GET_SEEDS, START_LOADING, END_LOADING, ADD_SEED,
	    UPDATE_SEED, REMOVE_SEED, ERROR} from "./SeedTypes"

const SeedReducer = (state, action) => {
  switch (action.type) {
	  
	case GET_SEEDS:
	  return {...state, seeds: action.payload }
		  
	case START_LOADING:
	return{...state,loading: true}
	case END_LOADING:
	return{...state,loading: false}

  
    case ADD_SEED:
      if(action.payload===null)return state
      return {...state, seeds: {...state.seeds,
		                data: [...state.seeds.data, action.payload]}  }
		                
    case UPDATE_SEED: 
      return{...state, items: {...state.seeds, 
			 data: state.items.data.map((item) =>
         (item._id === action.payload._id ? action.payload : item))}  }

    case REMOVE_SEED:
    console.log(action.payload)
      return {...state, seeds: {...state.seeds,
		                   data: state.seeds.data.filter((item) =>
			                       item._id !== action.payload._id)}  }

   
    case ERROR:
	return{...state, error: action.payload, loading: false}
	
    default:
      return state;
  }
}

export default SeedReducer;
