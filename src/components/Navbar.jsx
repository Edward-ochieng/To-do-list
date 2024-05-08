import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../Navbar.css'

function Navbar(){
     const navRef = useRef();

     const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav");
     };
    return(
<header>
    <h3>logo</h3>
    <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <button className="nav-btn-close" onClick={showNavbar}>
           <FaTimes/>
        </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
    </button>
</header>
    )
};
export default Navbar;