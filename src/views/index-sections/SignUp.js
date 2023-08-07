import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

function SignUp() {
  const [userType, setUserType] = useState('user');
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);

  return (
    <>
        <div
            className="section section-signup"
            style={{
                backgroundImage: "url(" + require("assets/img/lending_meets_ai.jpeg") + ")",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                minHeight: "1000px",
                position: "relative"
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(184, 234, 255, 0.80)"
                }}
            >
                {/* Logo Container with Styling */}
                <div 
                    style={{
                        position: 'absolute', 
                        top: '10px', 
                        left: '10px', 
                        padding: '10px',
                        borderRadius: '5px',
                    }}
                >
                    <a href="/">
                        <img 
                            src={require("assets/img/profile.png")}
                            alt="Your Logo" 
                            className="logo"
                            style={{
                              width: '100px',   // Adjust the width as needed
                              height: 'auto'   // Maintains the aspect ratio of the image
                            }}
                        />
                    </a>
                </div>
            </div>
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <CardHeader>
                <Nav className="nav-tabs-info justify-content-center" tabs>
                  <NavItem>
                    <NavLink
                      className={userType === 'user' ? 'active' : ''}
                      onClick={() => setUserType('user')}>
                      User
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={userType === 'loanOfficer' ? 'active' : ''}
                      onClick={() => setUserType('loanOfficer')}>
                      Loan Officer
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <Form action="" className="form" method="">
                  <CardTitle className="title-up text-center" tag="h3">
                    Sign Up
                  </CardTitle>
                  <InputGroup
                    className={
                      "no-border input-lg" + (firstFocus ? " input-group-focus" : "")
                    }>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name"
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border input-lg" + (lastFocus ? " input-group-focus" : "")
                    }>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Last Name"
                      type="text"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border input-lg" + (emailFocus ? " input-group-focus" : "")
                    }>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                  {userType === 'loanOfficer' && (
                    <InputGroup className="no-border input-lg">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons business_badge"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="NMLS ID"
                        type="text"
                      ></Input>
                    </InputGroup>
                  )}
                  <InputGroup className="no-border input-lg">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                    ></Input>
                  </InputGroup>
                  <InputGroup className="no-border input-lg">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                    ></Input>
                  </InputGroup>
                </Form>
              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-neutral btn-round"
                  color="info"
                  size="lg"
                >
                  Get Started
                </Button>
                <br /> {/* Add a line break for spacing */}
                <Link to="/login-page">
                  Already have an Account? Login Here!
                </Link>
              </CardFooter>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignUp;
