import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function NavItem(props) {
    const [open,setIsOpen] = useState(false)
    return (
        <li className="nav_item">
        <Link to='#' className='icon_button' onClick={()=>setIsOpen(!open)}>
            {props.icon}
        </Link>
            {open && props.children}
        </li>
    )
}

export default NavItem
