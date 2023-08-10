import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#b8eaffab', height: '100vh' }}>
      {/* Logo Section */}
      <div className="p-3">
        <img src="/path/to/your/logo.png" alt="Logo" className="img-fluid" /> {/* Update path to logo */}
      </div>
      {/* Menu Section */}
      <Nav vertical>
        <NavItem>
          <NavLink href="#mira-chat">MIRA CHAT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#pre-approval">Pre-Approval</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#document-manager">Document Manager</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#loan-application">Loan Application</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#dashboard">Dashboard</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Sidebar;
