import {REMOVE_ITEM, ADD_TO_CART, INCREASE,
               DECREASE, FROM_LOCALE, CLEAR,} from "./CartTypes";


const CartReducer = (state, action) => {
  
  switch (action.type) {
    
    case ADD_TO_CART:
       


     //~ return {...state, cartItems: [state.cartItems.push({ ...action.payload, quantity: 1 })}
        const itemInCart = state.cartItems.find(item => item._id === action.payload._id)
        
	  if(itemInCart){return {...state, cartItems: 
		         state.cartItems.map((item) =>
          item._id === action.payload._id ? {...action.payload, quantity:2} : item)}}
          
      return {...state, cartItems: [...state.cartItems, 
		                         ({ ...action.payload, quantity: 1 })]}
     
     
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => 
                                  item._id !== action.payload)]
      }

      case INCREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item._id === action.payload)
      ].quantity++;
      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    // If the action type is DECREASE, we want to decrease the quantity of the particular item in the cartItems array
    case DECREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item._id === action.payload)
      ].quantity--
      return {
        ...state,
        cartItems: [...state.cartItems],
      };

   case FROM_LOCALE:
      return {
        cartItems: action.payload
      };

    case CLEAR:
      return {
        cartItems: []
      };

    default:
      return state
  }
};

export default CartReducer
