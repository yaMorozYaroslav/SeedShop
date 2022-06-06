import React from 'react'
import './styles.scss'
import  Acorn from '../../imgs/acorn.png'
export const Header =(props)=> {
	return(
      <header>
         <div className='wrap'>
           <div className='logo'>
               <img src={Acorn} alt='Acorn' />
            </div>
          </div>
      </header>
		  )
      }