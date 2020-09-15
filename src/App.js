
import {FaBars} from 'react-icons/fa'
import onClickOutside from 'react-onclickoutside'
import {BiArrowBack} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {MdSettingsApplications} from 'react-icons/md'
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

function App() {
  return (
    <Navbar>
            <NavItem icon={<FaBars />}>
               <DropdownMenu/>
            </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  useEffect(()=>{
   DropdownMenu.handleClick=()=>setActiveMenu(false)
  },[])
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (

     <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

     {/* Primary */}

      <CSSTransition
                  in={activeMenu === 'main'}
                  timeout={500}
                  classNames="menu-primary"
                  unmountOnExit
                  onEnter={calcHeight}>

        <div className="menu">
         
        <DropdownItem 
                  leftIcon={<MdSettingsApplications />}
                  // rightIcon={<ChevronIcon />}
                  goToMenu="Myprofile">
                  My Profile
         </DropdownItem>
          <DropdownItem 
                     leftIcon={<CgProfile />}>
                     Home
         </DropdownItem>
          <DropdownItem 
                     leftIcon={<CgProfile />}>
                     Account
         </DropdownItem>
          <DropdownItem 
                     leftIcon={<CgProfile />}>
                     Buy Again
         </DropdownItem>
          <DropdownItem 
                     leftIcon={<CgProfile />}>
                     Browsing History
         </DropdownItem>
         <DropdownItem 
                  leftIcon={<MdSettingsApplications />}
                  // rightIcon={<ChevronIcon />}
                  goToMenu="settings">
                  Settings
         </DropdownItem>
         <DropdownItem 
                  leftIcon={<MdSettingsApplications />}
                  // rightIcon={<ChevronIcon />}
                  goToMenu="products">
                  Products
         </DropdownItem>
         <DropdownItem 
                  leftIcon={<MdSettingsApplications />}
                  // rightIcon={<ChevronIcon />}
                  goToMenu="orders">
                  Orders
         </DropdownItem>
         <DropdownItem
               leftIcon="🦧"
               // rightIcon={<ChevronIcon />}
               goToMenu="animals">
               Animals
         </DropdownItem>

        </div>
      </CSSTransition>

{/* Secondary */}

      <CSSTransition
                  in={activeMenu === 'settings'}
                  timeout={500}
                  classNames="menu-secondary"
                  unmountOnExit
                  onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem 
                  goToMenu="main" 
                  leftIcon={<BiArrowBack />}>
                  <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem>HTML</DropdownItem>
          <DropdownItem>CSS</DropdownItem>
          <DropdownItem>JavaScript</DropdownItem>
          <DropdownItem>Awesome!</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
                  in={activeMenu === 'Myprofile'}
                  timeout={500}
                  classNames="menu-secondary"
                  unmountOnExit
                  onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem 
                  goToMenu="main" 
                  leftIcon={<BiArrowBack />}>
                  <h2>Details</h2>
          </DropdownItem>
          <p> i am a good boy</p>
        </div>
      </CSSTransition>

      <CSSTransition
                  in={activeMenu === 'products'}
                  timeout={500}
                  classNames="menu-secondary"
                  unmountOnExit
                  onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem 
                  goToMenu="main" 
                  leftIcon={<BiArrowBack />}>
                  <h2>Products Lists</h2>
          </DropdownItem>
          <DropdownItem>Shampoo</DropdownItem>
          <DropdownItem>Coil</DropdownItem>
          <DropdownItem>Fruits</DropdownItem>
          <DropdownItem>Sports!</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
                  in={activeMenu === 'orders'}
                  timeout={500}
                  classNames="menu-secondary"
                  unmountOnExit
                  onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem 
                  goToMenu="main" 
                  leftIcon={<BiArrowBack />}>
                  <h2>Book Orders</h2>
          </DropdownItem>
          <DropdownItem>Your Orders</DropdownItem>
          <DropdownItem>Add to Cart</DropdownItem>
          <DropdownItem>Purchase</DropdownItem>
          <DropdownItem>Drop Orders!!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<BiArrowBack />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem>Kangaroo</DropdownItem>
          <DropdownItem>Frog</DropdownItem>
          <DropdownItem>Horse?</DropdownItem>
          <DropdownItem>Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
  const clickOutsideConfig = {
     handleClickOutside: () =>DropdownMenu.handleClick,
  }

export default onClickOutside(App,clickOutsideConfig);