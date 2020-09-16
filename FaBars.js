import React,{useState} from 'react'
import './FaBars.css'

function FaBars() {

        const [clicked,setClicked] = useState(false)
        setTimeout(() => {setClicked(false)},4500)

  return (
        <div 
            className="bars" 
            onClick={()=>setClicked(!clicked)}
        >   
        <i className={clicked ? 'fa fa-times' :  'fa fa-bars'}></i>        
        </div>
  )
}

export default FaBars

