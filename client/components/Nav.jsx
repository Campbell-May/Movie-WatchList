import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  return(
    
   <div>
    <Link to='/'><button>Home</button></Link>
    <Link to='/add'><button>AddForm</button></Link>
   </div>

  )
}

export default Nav
