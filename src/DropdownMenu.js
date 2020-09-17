
import {BiArrowBack} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {MdSettingsApplications} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import {RiAccountPinCircleFill} from 'react-icons/ri'
import {BiDollarCircle} from 'react-icons/bi'
import {RiProductHuntLine} from 'react-icons/ri'
import {BiBorderAll} from 'react-icons/bi'
import {BsClockHistory} from 'react-icons/bs'
import {GrFormNextLink} from 'react-icons/gr'
import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import './DropdownMenu.css'

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

    function DropdownItem(props) {
        return (
            <Link to="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
              <span className="icon-button">{props.leftIcon}</span>
              {props.children}
              <span id="icon-right">{props.rightIcon}</span>
            </Link>
          );
        }


    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
        <CSSTransition
                  in={activeMenu === 'main'}
                  timeout={25}
                  classNames="menu-primary"
                  unmountOnExit
                  onEnter={calcHeight}>

        <div className="menu">
         
        <DropdownItem 
                  leftIcon={<CgProfile />}
                  rightIcon={<GrFormNextLink />}
                  goToMenu="Myprofile">
                 My Profile
         </DropdownItem>
          <DropdownItem 
                     leftIcon={<AiOutlineHome/>}>
                     Home
         </DropdownItem>
          <DropdownItem 
                     leftIcon={<RiAccountPinCircleFill />}>
                     Account
         </DropdownItem>
          <DropdownItem 
                     leftIcon={<BiDollarCircle />}>
                     Buy Again
         </DropdownItem>
          <DropdownItem 
                     leftIcon={<BsClockHistory />}>
                     Browsing History
         </DropdownItem>
         <DropdownItem 
                  leftIcon={<MdSettingsApplications />}
                  rightIcon={<GrFormNextLink />}
                  goToMenu="settings">
                  Settings
         </DropdownItem>
         <DropdownItem 
                  leftIcon={<RiProductHuntLine />}
                  rightIcon={<GrFormNextLink />}
                  goToMenu="products">
                  Products
         </DropdownItem>
         <DropdownItem 
                  leftIcon={<BiBorderAll />}
                  rightIcon={<GrFormNextLink />}
                  goToMenu="orders">
                  Orders
         </DropdownItem>
         <DropdownItem
               leftIcon="🦧"
               rightIcon={<GrFormNextLink />}
               goToMenu="animals">
               Animals
         </DropdownItem>

        </div>
      </CSSTransition>

{/* Secondary */}

      <CSSTransition
                  in={activeMenu === 'settings'}
                  timeout={150}
                  classNames="menu-secondary"
                  unmountOnExit
                  onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem 
                  goToMenu="main" 
                  leftIcon={<BiArrowBack />}>
                  <h2>Tools</h2>
          </DropdownItem>
          <DropdownItem>LoL</DropdownItem>
          <DropdownItem>Wow</DropdownItem>
          <DropdownItem>Nice</DropdownItem>
          <DropdownItem>Awesome!</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
                  in={activeMenu === 'Myprofile'}
                  timeout={150}
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
                  timeout={150}
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
                  timeout={150}
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
        timeout={150}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<BiArrowBack />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem>Kangaroo</DropdownItem>
          <DropdownItem>Frog</DropdownItem>
          <DropdownItem>Horse</DropdownItem>
          <DropdownItem>Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
//   const clickOutsideConfig = {
//      handleClickOutside: () =>DropdownMenu.handleClick,
//   }

export default DropdownMenu;