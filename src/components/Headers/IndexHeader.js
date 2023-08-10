/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "linear-gradient(rgba(184, 234, 255, 0.60), rgba(184, 234, 255, 0.60)), url(" + require("assets/img/lending_meets_ai.jpeg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
          <h1 className="h1-seo" style={{ fontWeight: 'bold', color: '#000' }}>Discover MIRA.</h1>
          <h3 style={{ fontWeight: 'bold' }}>Pioneering the Power of AI in Mortgage Lending.<br />Where Mortgage Excellence Meets AI Innovation.</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
