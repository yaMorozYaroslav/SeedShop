import React from 'react'
import {Header} from './comps/Header'
import Headline from './comps/Headline'
import './app.scss'

class App extends React.Component{
  render(){
  return (<div className="App">
           <Header/>
           <section className="main">
            <Headline header='The Planet' desc='Touch the planet'/>
           </section>
           </div>)
         }
        }
export default App