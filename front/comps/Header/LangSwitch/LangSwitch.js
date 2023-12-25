
import * as S from './lang-switch.styled'
import {useLocale} from 'next-intl'
import { usePathname } from 'next/navigation'


export const LangSwitch =()=> {
  const p = usePathname()
  //~ console.log(p.substr(3,10))
  const locale = useLocale()
  return <S.Switch href={p.substr(3,20)||'/'} 
                   locale={'en'} className='styledLink'>
	                                              EN</S.Switch>
	}


  
