import React from "react";
import { Link } from "react-router-dom";
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
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

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
                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
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
