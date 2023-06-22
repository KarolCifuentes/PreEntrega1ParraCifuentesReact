// import React from "react";

// const Header = ({logo, menuItem, children}) =>{ // Propiedas logo y menuItem
//     return (
//         <header class="header">
//             <a href="#">Logo</a>
//             <input type="checkbox" className="side-menu" id="side-menu"/>
//             <label className="hamb" htmlFor="side-menu">
//                 <span className="hamb-line"></span>
//             </label>
//             <nav className="nav">
//                 <ul className="menu">
//                     <li><a href="#">About</a></li>
//                     <li><a href="#">Products</a></li>
//                     <li><a href="#">Categories</a></li>
//                     <li><a href="#">Contact</a></li>
//                 </ul>
//             </nav>      
//             <h1>Estoy haciendo una prueba</h1>      
//         </header>
//     )
// }

// export default Header;


//--------------------------------------------------------------------------------------------------//


import React from 'react'
import styled from 'styled-components'//Libreria de estilos para los componentes

function NavbarP() {
  return (
    /*Aca estan todos los estilos del nav*/
   <>
    <NavbarContainer className='d-flex'>
        <h2>Logo de E-commerces</h2>
    </NavbarContainer>
   </>
  )
}

export default NavbarP

const NavbarContainer = styled.nav`` //Esto le da estilos a cualquier elemento de html