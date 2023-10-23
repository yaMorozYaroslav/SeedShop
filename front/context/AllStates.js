//'use client'
import {ItemState} from './items/ItemState'
import {SeedState} from './seeds/SeedState'
import {UserState} from './user/UserState'
import {QueryState} from './queries/QueryState'
//import {CartState} from './Cart/CartState'

export const AllStates =({children})=> {
  
     <QueryState>
     <SeedState>
     <ItemState>
     <UserState>
        {children}
               </UserState>
               </ItemState>
               </SeedState> 
               </QueryState>
	           
  }
