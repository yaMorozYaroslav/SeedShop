import React from 'react'
import * as S from './lang-switch.styled'
import {useLocale} from 'next-intl'
import { useRouter, usePathname } from '../../../navigation'

export const LangSwitch =()=> {
  const p = usePathname()
  const router = useRouter()
  const locale = useLocale()
  
  const [lang, setLang] = React.useState()
  
  const langStrings = ["en","ua","ru"]
  console.log(p)
  //~ <S.Switch href={p.substr(3,20)||'/'} 
                   //~ locale={'en'} className='styledLink'>
                                             //~ EN</S.Switch>
  const superName = (str) => {if(locale === str){return 'current'}
						     else{return  'penis'}}
  const handSwitch =(thing)=> {router.replace(p, {locale: thing });
	                           console.log(thing) }
  //~ console.log(lang)
  return <S.Switch value={locale} onChange={(e)=>{handSwitch(e.target.value)}}>
           {langStrings.map((string, i)=><S.Option key={i} value={string} 
			                                       className={superName(string)}
			                                       hidden={string===locale}
			                                                      >{string}</S.Option>)}
	     </S.Switch>
	     
	}


  
