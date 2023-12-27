import React from 'react'
import * as S from './lang-switch.styled'
import {useLocale} from 'next-intl'
import { useRouter, usePathname } from '../../../navigation'

export const LangSwitch =()=> {
  const p = usePathname()
  const router = useRouter()
  const locale = useLocale()
  
  const [open, setOpen] = React.useState(false)
  
  const langStrings = ["en","ua","ru"]
  const listChanger = (ind) => langStrings.find(elem=>elem === p.slice(1,3))
  console.log(locale)
  
  const handSwitch =(thing)=> {router.replace(p, {locale: thing });
	                           console.log(thing);console.log(listChanger(thing)) }

  const shouldShow = (str) =>  !open? str!==locale: false
                                 
  return <S.Ul onClick={()=>setOpen(!open)}>
            {langStrings.map((string, i)=>
				           <S.Li key={i} onClick={()=>handSwitch(string)}
				               value={string} hidden={shouldShow(string)}
			                                                       >{string}</S.Li>)}
        </S.Ul>
         
	     
	}


  
