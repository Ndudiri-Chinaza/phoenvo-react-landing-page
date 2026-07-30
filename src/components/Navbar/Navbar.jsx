import { useState } from "react";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import { assets } from "../../assets/assets";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <a href="#hero" className="logo">
            <img src={assets.logo} alt="Logo" />
          </a>

          {/* Navigation */}
          <div className={`nav-menu ${isOpen ? "active" : ""}`}>

            {/* Left Side */}
            <ul className="nav-links">
              <li className="nav-list">
                <a href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>

              <li className="nav-list">
                <a href="#features" onClick={closeMenu}>
                  Features
                </a>
              </li>

              <li className="nav-list">
                <a href="#testimonials" onClick={closeMenu}>
                  Testimonials
                </a>
              </li>

              <li className="nav-list">
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>

              <li className="nav-list">
                <a href="#blog" onClick={closeMenu}>
                  Blog
                </a>
              </li>
            </ul>

            {/* Right Side */}
            <div className="nav-actions">
              <button className="btn login">
                Login
              </button>

              <button className="btn getStarted">
                Get Started
              </button>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiMiniXMark /> : <HiMiniBars3 />}
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;








// import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
// import { assets } from "../../assets/assets";
// import "./Navbar.css";
// import { useState } from "react";


// function Navbar() {
// const [isOpen, setIsOpen] = useState(false)

// function toggle() {
//   setIsOpen(!isOpen)
// }

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <div className="logo">
//           <a href="#hero" className="logo">
//             <img src={assets.logo} alt="Invoice Logo" />
//           </a>
//         </div>

//         <button className="menu-toggle" onClick={toggle}>
//           {isOpen ? <HiMiniXMark /> : <HiMiniBars3 />}
//         </button>

//         <div className={`nav-menu ${isOpen ? "active" : ""}`}>
//           <ul className="nav-links">
//             <li className="nav-list"><a href="#">About</a></li>
//             <li className="nav-list"><a href="#">Features</a></li>
//             <li className="nav-list"><a href="#">Testimonials</a></li>
//             <li className="nav-list"><a href="#">Contact</a></li>
//             <li className="nav-list"><a href="#">FAQ</a></li>
//             <li className="nav-list"><a href="#">Blog</a></li>
//           </ul>

//           <div className="nav-actions">
//             <button className="btn login">Login</button>
//             <button className="btn getStarted">Get started</button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;
