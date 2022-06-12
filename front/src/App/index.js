import React from 'react'
import {Ticket} from '../Comps/Ticket'
import {Footer} from '../Comps/Footer'

export function App(){
  return(
    <div>
      <Ticket name={"Super Bowl Tickets"} />
      <Footer />
    </div>
  	)
}