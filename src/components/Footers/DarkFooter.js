/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  
  const handleFooterLinkClick = (e, sectionId) => {
    e.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a href="#about-mira" onClick={(e) => handleFooterLinkClick(e, 'about-mira')}>
                  About MIRA
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleFooterLinkClick(e, 'features')}>
                  Features
                </a>
              </li>
              <li>
                <a href="/FAQs" onClick={(e) => handleFooterLinkClick(e, 'FAQs')}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact-us" onClick={(e) => handleFooterLinkClick(e, 'contact-us')}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © 2023, MIRA, All Rights Reserved. Designed and Created By <strong>Suketu Gaglani</strong>.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
