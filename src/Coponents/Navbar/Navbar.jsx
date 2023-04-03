import React, { useState } from 'react'
import './navbar.scss'
import Logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
const Menu = () =>(
<>
<p><a href="#home">Home</a></p>
          <p><a href="#Gpt">What is Gpt?</a></p>
          <p><a href="#Possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
</>
)
const Navbar = () => {
  const [togglemenue,settogglemenue] = useState(false)
  return (
    <div className='gpt3__navbar'>
       <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
              <img src={Logo} alt="logoimage" />
        </div>
        <div className="gpt3__navbar-links_container">
         <Menu />
        </div>
        
       </div>
       <div className="gpt3__navbar-menu_container-links-sign">

        <p>Sign in</p>
 
        <button type='button'>Sign Up</button>
       </div>

       <div className="gpt3__navbar-menu">
  
       {togglemenue 

       ? <RiCloseLine size={27} color='white' onClick={()=>settogglemenue(false)}/> 
       :<RiMenu3Line  color='white' size={27} onClick={()=>settogglemenue(true)}/>} 

       {togglemenue && (
        <div className="gpt3__navbar-menu_container scale-up-center">
<div className="gpt3__navbar-menu_container-link">
<Menu />
<div className="mobile-sign">
  
<p>Sign in</p>

<button type='button'>Sign Up</button>

</div>


</div>
        </div>
       )}

       </div>


 


      



       
    </div>
  )
}

export default Navbar
