/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a href="/" target="_blank">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" target="_blank">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" target="_blank">
                  Contact
                </a>
              </li>
              <li>
                <a href="/services" target="_blank">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" target="_blank">
                  Blog
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
