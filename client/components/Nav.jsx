import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  return(
    
   <div className='navBar'>
    <ul>
      <li> <Link to='/'><button>HOME</button></Link></li>
   <li><Link to='/add'><button>ADD MORE</button></Link></li> 
    </ul>
   
   </div>

  )
}

export default Nav
