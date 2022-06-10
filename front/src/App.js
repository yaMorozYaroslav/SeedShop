import React from 'react'
import {Header} from './comps/Header'
import Headline from './comps/Headline'
import './app.scss'

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}]

class App extends React.Component{
  render(){
  return (<div className="App">
           <Header/>
           <section className="main">
            <Headline 
                 header='The Planet'
                 desc='Touch the planet'
                 tempArr={tempArr}/>
           </section>
           </div>)
         }
        }
export default App