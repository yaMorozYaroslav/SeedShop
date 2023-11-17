import {First} from '../comps/First/First'
import { Acme } from 'next/font/google'
const lora = Acme({ subsets: ['latin'], weight:['400'] })

export default async function Main() {
	
  return <div className={lora.className}><First/></div>
}
