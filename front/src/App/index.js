import React from 'react'
import {Header} from '../Comps/Header'
import Headline from '../Comps/Headline'
import SharedButton from '../Comps/Button'
import ListItem from '../Comps/ListItem'
import {connect} from 'react-redux'
import {fetchPosts} from '../Redux/actions'

import './styles.scss'

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}]

class App extends React.Component{
  constructor(props){
    super(props)
    this.fetch = this.fetch.bind(this)
  }
  fetch(){
    this.props.fetchPosts()
  }
  render(){
    const {posts} = this.props
    console.log(posts)

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }
  return (<div className="App">
           <Header/>
           <section className="main">
            <Headline 
                 header='The Planet'
                 desc='Touch the planet'
                 tempArr={tempArr}/>
            <SharedButton {...configButton} />
            {posts.length > 0 &&
              <div>
                {posts.map((post, index)=>{
                  const {title, body} = post
                  const configListItem = {
                    title,
                    desc: body
                  }
                  return(
                    <ListItem key={index}{...configListItem}/>)
                })}
              </div>
              }
           </section>
           </div>)
         }
        }
    const mapStateToProps = state => {
      return {
        posts: state.posts
      }
    }
export default connect(mapStateToProps, {fetchPosts})(App)