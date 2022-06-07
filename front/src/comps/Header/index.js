import React from 'react'
import './styles.scss'
import  Acorn from '../../imgs/acorn.png'

export const Header =props=> {
	return(
      <header className="headerComponent">
         <div className='wrap'>
           <div className='logo'>
               <img className='logoIMG' src={Acorn} alt='Acorn' />
            </div>
          </div>
          <div>Her</div>
      </header>
		  )
      }