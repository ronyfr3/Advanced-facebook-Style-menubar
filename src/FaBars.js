import React,{useState} from 'react'
import './FaBars.css'

function FaBars() {

        const [clicked,setClicked] = useState(false)

  return (
        <div 
            className="bars" 
            onClick={()=>setClicked(!clicked)}
        >   
        <i className={clicked ? 'fa fa-bars' :  'fa fa-bars'}></i>        
        </div>
  )
}

export default FaBars

