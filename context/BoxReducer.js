export const BoxReducer = (state, action) => {
	switch(action.type){
		case 'ADD_BOX':
		state.boxes.push(action.payload) 
		  return {...state, boxes: state.boxes}
		case 'DEL_BOX': 
		  const filtered = state.boxes.filter((item) => item.id !== action.payload)
          return {...state, boxes: filtered}
        default:
          return state
		}
	}
