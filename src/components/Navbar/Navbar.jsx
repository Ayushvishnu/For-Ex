// import "./Navbar.css";

// function Navbar() {
//   return (
//     // <nav className="navbar">
//     <nav className="forex-navbar">
//       <div className="nav-container">

//         {/* Logo */}
//         <div className="logo">
//           <div className="logo-icon">
//             <i className="bi bi-graph-up-arrow"></i>
//           </div>

//           <span>For-eX</span>
//         </div>

//         {/* Navigation */}
//         <div className="nav-links">

//           <a href="#home" className="active">
//             Home
//           </a>


        

//           <a href="#blog">
//             Blog
//           </a>

//           <a href="#testimonials">
//             Testimonials
//           </a>

//           <a href="#faq">
//             FAQ
//           </a>

//           <a href="#contact">
//             Contact
//           </a>

//         </div>

//         {/* CTA */}
//         <button className="enroll-btn"
//          onClick={() =>
//                 document.getElementById("contact")?.scrollIntoView({
//                   behavior: "smooth",
//                 })
//               }>
//           <i className="bi bi-rocket-takeoff-fill"></i>

//           <span>Enroll Now</span>
//         </button>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;












import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    // { id: "testimonials", label: "Testimonials" },
        { id: "service", label: "Services" },


    { id: "blog", label: "Blog" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="forex-navbar">
      <div className="nav-container">

        {/* Logo */}
  <div
  className="logo"
  onClick={() => handleNavClick("home")}
  role="button"
  tabIndex={0}
>
  <img
    src="/images/logo.png"
    alt="For-eX"
    className="navbar-logo-img"
  />
</div>


        {/* Desktop / Mobile Nav */}
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                activeSection === item.id
                  ? "nav-link-btn active"
                  : "nav-link-btn"
              }
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>


        {/* CTA */}
        <button
          className="enroll-btn"
          onClick={() => handleNavClick("contact")}
        >
          <i className="bi bi-rocket-takeoff-fill"></i>

          <span>Enroll Now</span>
        </button>


        {/* Mobile Toggle */}
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <i
            className={
              menuOpen
                ? "bi bi-x-lg"
                : "bi bi-list"
            }
          ></i>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;