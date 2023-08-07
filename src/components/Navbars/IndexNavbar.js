import React from "react";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
        const viewportHeight = window.innerHeight;
        const sectionPosition = target.getBoundingClientRect().top;
        const percentageDownScreen = sectionPosition / viewportHeight;

        // Interpolate offset between 50 (for top of page) and 150 (for farther down)
        const offset = 0 + (150 * percentageDownScreen);

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
};
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="https://www.suketugaglani.com"
              target="_blank"
              id="navbar-brand"
            >
              {/* Intentionally left empty */}
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="#about-mira" onClick={(e) => handleNavLinkClick(e, 'about-mira')}>
                  About MIRA
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#features" onClick={(e) => handleNavLinkClick(e, 'features')}>
                  Features
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#FAQs" onClick={(e) => handleNavLinkClick(e, 'FAQs')}>
                  FAQs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#register" onClick={(e) => handleNavLinkClick(e, 'register')}>
                  Register/Login
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
