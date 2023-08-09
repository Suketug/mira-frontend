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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nmlsId, setNmlsId] = useState('');  // Only for Loan Officer
  const [errorMessage, setErrorMessage] = useState(''); // To store and display error messages

  const handleSignUp = async () => {
      if(password !== confirmPassword) {
          setErrorMessage('Passwords do not match.');
          return;
      }

      const userData = {
          username: email,  
          password: password,
          first_name: firstName,
          last_name: lastName,
          confirm_password: confirmPassword,
          role: userType === 'loanOfficer' ? 'Loan Officer' : 'Consumer'
      };
    

      if(userType === 'loanOfficer') {
          userData.nmlsId = nmlsId;  // Add NMLS ID for loan officers
      }

      const response = await fetch("http://localhost:8000/register/", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData)
      });

      const data = await response.json();

      if(response.ok) {
          // Navigate the user to login page or any other suitable page
      } else {
          // Handle errors and display an error message
          setErrorMessage(data.detail || 'An error occurred during registration.');
      }
  }
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
                      className={userType === 'Consumer' ? 'active' : ''}
                      onClick={() => setUserType('Consumer')}>
                      Consumer
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
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
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
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
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
                        value={email}
                        onChange={e => setUsername(e.target.value)}
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
                        value={nmlsId}
                        onChange={e => setNmlsId(e.target.value)}
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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    ></Input>
                  </InputGroup>
                </Form>
              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-neutral btn-round"
                  color="info"
                  size="lg"
                  onClick={handleSignUp}
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
