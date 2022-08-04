import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  return(
    
   <div className='navBar'>
    <ul>
      <li> <Link to='/'><button>Home</button></Link></li>
   <li><Link to='/add'><button>AddForm</button></Link></li> 
    </ul>
   
   </div>

  )
}

export default Nav
