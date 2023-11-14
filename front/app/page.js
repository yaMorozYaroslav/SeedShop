//import Image from 'next/image'
import Link from 'next/link'



export default async function Main() {
	
  return (<>
  
        <p>Welcome to our seed store.
           More than 15 years of impeccable service. Now online</p>
          <Link className='styledLink' href={'/seed-list'}>View all seeds</Link>..
          <Link className='styledLink' href={'/item-list'}>View all products</Link>
       
  </>)
}
