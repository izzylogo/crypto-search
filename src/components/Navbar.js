import React from 'react'
import {BsCoin} from 'react-icons/bs'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  const light = props.light
  const lightstyle = {
    color: 'black'
  }


  return (
    <Link to='/'>
        <div className="navbar">
          <div className="cover">
            <BsCoin className='icon' />
            <h1 className={light ? 'theme' : ''}>Crypto <span className='purple'>Search</span></h1>
          </div>
          {/* <h5 onClick={props.toogleTheme}>Light</h5> */}
        </div>
    </Link>
  )
}

export default Navbar