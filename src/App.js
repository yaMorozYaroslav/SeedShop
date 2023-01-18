import React from 'react'
import {Header} from './comps/Header/Header'

export function App(){
  const a = 4
  const b = 6
  return(
    <div>
      <Header/>
      <ul>
       <li>Health</li>
       <li>Mind</li>
       <li>Prosperity</li>
      </ul>
      <h1 title='sum'>{a+b}</h1>
    </div>
  	)
}
