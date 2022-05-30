import  React from 'react'
import {Todo} from './comps/Todo'

export function App(){
	const todos = [
       {id: 1, title: 'wash dishes', completed: false},
       {id: 2, title: 'wash car', completed: true}
	]
	return(
       <div className="App">
          {todos.map((todo)=>{
          	return(<Todo todo={todo}/>)
          })}
       </div>
 		)
}