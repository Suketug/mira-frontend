import React, { useState } from 'react';
import { Container, NavLink, Nav, Navbar, Input, Button } from "reactstrap";
import "../../assets/scss/now-ui-kit.scss"; // Import the main SCSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faComment, faCheckCircle, faFile, faCalculator, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const ChatInterface = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [conversation, setConversation] = useState([
    { sender: 'MIRA', content: 'Welcome to MIRA! How can I help you?' },
  ]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setConversation([...conversation, { sender: 'user', content: inputMessage.trim() }]);
      setInputMessage('');
      // TODO: Send the message to the backend and get MIRA's response
    }
  };

  return (
    <div className="container-fluid p-0" style={{ backgroundColor:'#ffffff', height: '100vh' }}>
      {/* Top Navigation Bar */}
      <Navbar className="fixed-top navbar-default bg-default" expand="xl">
        <Container>
          <div className="navbar-default" expand="xl">
          <button
              className="navbar-toggler"
              id="example-navbar-primary"
              type="button"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <Nav navbar className="ml-auto">
          <NavLink className="nav-link text-black btn-round" href="#mira-chat">
            <FontAwesomeIcon icon={faComment} /> Profile
          </NavLink>
          <NavLink className="nav-link text-black btn-round" href="#pre-approval">
            <FontAwesomeIcon icon={faCheckCircle} /> Logout
          </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <div className="d-flex h-100">
        <div className="p-0 bg-default" style={{ minWidth: '200px' }}> {/* Adjusted background color */}
        <div className="mb-4 logo-container"></div>
        <Nav vertical>
          <NavLink className="nav-link text-black btn-round" href="#mira-chat">
            <FontAwesomeIcon icon={faComment} /> MIRA CHAT
          </NavLink>
          <NavLink className="nav-link text-black btn-round" href="#pre-approval">
            <FontAwesomeIcon icon={faCheckCircle} /> Pre-Approval
          </NavLink>
          <NavLink className="nav-link text-black btn-round" href="#document-manager">
            <FontAwesomeIcon icon={faFile} /> Document Manager
          </NavLink>
          <NavLink className="nav-link text-black btn-roundn" href="#loan-application">
            <FontAwesomeIcon icon={faCalculator} /> Loan Application
          </NavLink>
          <NavLink className="nav-link text-black btn-round" href="#dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </NavLink>
        </Nav>
      </div>
      <div className="chat-container col-md-10 flex-column h-100">
          {/* Conversation Display */}
          <div className="conversation-display flex-grow-1">
            {conversation.map((message, index) => (
              <div key={index} className={`message ${message.sender}-message`}>
                {message.content}
              </div>
            ))}
          </div>
          {/* Input Area */}
            <div className="input-area align-items-center">
              <Input type="text" placeholder="Type your message..." value={inputMessage} onChange={handleInputChange} className="form-control" />
              <Button color="info" onClick={handleSendMessage} className="btn-send" disabled><FontAwesomeIcon icon={faPaperPlane} /></Button>
            </div>
            </div>
          </div>
        </div>
  );
};
export default ChatInterface;