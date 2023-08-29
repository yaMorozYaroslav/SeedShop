const BoxReducer = (state, action) => {
	switch(action.type){
		case 'ADD_BOX': 
		  return state.boxes.push(action.payload)
		case 'DEL_BOX': 
		  return state.boxes.filter((item) => 
                                  item.id !== action.boxId)
        default:
          return state
		}
	}
export default BoxReducer
