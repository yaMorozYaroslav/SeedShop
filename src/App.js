import React from 'react'
import {Header} from './comps/Header/Header'
import {Login} from './comps/Login/Login'
import {Element} from './comps/Element/Element'

export function App(){
  return(
    <div>
     <Header/>
      <ul>
       <li>Health</li>
       <li>Mind</li>
       <li>Prosperity</li>
      </ul>
     <Element/>
     <Login/>
    </div>
  	)
}
