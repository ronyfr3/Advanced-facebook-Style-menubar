import React from 'react'
import {FaBars} from 'react-icons/fa'
import {BrowserRouter as Router} from 'react-router-dom'
import NavItem from './NavItem'
import './MenuBar.css'
import DropdownMenu from './DropdownMenu'

function MenuBar() {
    return (
        <Router>
         <NavItem icon={<FaBars/>}>
         <DropdownMenu/>
         </NavItem>
        </Router>
    )
}

export default MenuBar
