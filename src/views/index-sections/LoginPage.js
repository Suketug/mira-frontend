import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
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
} from "reactstrap";

function LoginPage() {
  const [firstFocus] = React.useState(false);
  const [lastFocus] = React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [setErrorMessage] = useState(''); // To store and display error messages

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/login/", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              username: email, // assuming username is the email for login
              password: password
          })
      });

      const data = await response.json();

      if(response.ok) {
          // Store the token and navigate the user
          localStorage.setItem('token', data.token);
          navigate("/chat"); // Navigate to chat interface
      } else {
          // Handle errors and display an error message
          setErrorMessage(data.detail || 'An error occurred.');
      }
    } catch (error) {
      // Handle any unexpected errors
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };
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
              <CardBody>
                <Form action="" className="form" method="">
                  <CardTitle className="title-up text-center" tag="h3">
                    Login
                  </CardTitle>
                  <InputGroup
                    className={
                      "no-border input-lg" + (firstFocus ? " input-group-focus" : "")
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
                        onChange={e => setEmail(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border input-lg" + (lastFocus ? " input-group-focus" : "")
                    }>
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
                </Form>
              </CardBody>
              <CardFooter className="text-center">
              <Button
                    className="btn-neutral btn-round"
                    color="info"
                    size="lg"
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <br /> {/* Add a line break for spacing */}
                <Link to="/sign-up">
                  Don't have an account? Sign Up Here!
                </Link>
              </CardFooter>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LoginPage;
