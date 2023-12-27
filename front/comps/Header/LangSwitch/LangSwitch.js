import React from 'react'
import * as S from './lang-switch.styled'
import {useLocale} from 'next-intl'
import { useRouter, usePathname } from '../../../navigation'

export const LangSwitch =()=> {
  const p = usePathname()
  const router = useRouter()
  const locale = useLocale()
  
  const [open, setOpen] = React.useState(false)
  
  let langStrings = ["en","ua","ru"]
  let filteredStrings = langStrings.filter(elem=>elem !== locale)
 
   console.log(filteredStrings)
  
  const handSwitch =(thing)=> {router.push(p, {locale: thing });
	                            filteredStrings.unshift(thing)
	                           }
                                 
  return <S.Ul onClick={()=>setOpen(!open)}>
                     {!open && locale}
                     {filteredStrings.map((string, i)=>
				           <S.Li key={i} onClick={()=>handSwitch(string)}
				                 value={string} hidden={!open}
			                                                  >{string}</S.Li>)}
        </S.Ul>
         
	     
	}


  
