import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import { FaHome, FaUser, FaFile, FaChartLine, FaPhone, FaBriefcase } from "react-icons/fa"; // Make sure you've installed react-icons
import "../../assets/scss/now-ui-kit/_features.scss";

const userFeatures = [
  { icon: <FaHome />, title: "AI-Powered Mortgage Chat" },
  { icon: <FaUser />, title: "Instant Qualification Insights" },
  { icon: <FaFile />, title: "Custom-Tailored Mortgage Guidance" },
  { icon: <FaChartLine />, title: "Top-Tier Document Portal" },
  { icon: <FaPhone />, title: "Real-Time Application Tracker" },
  { icon: <FaBriefcase />, title: "24/7 Support" },
];

const loanOfficerFeatures = [
  { icon: <FaHome />, title: "AI-Enhanced Client Outreach" },
  { icon: <FaUser />, title: "Rapid Pre-Qualification Tools" },
  { icon: <FaFile />, title: "Seamless Communication Flow" },
  { icon: <FaChartLine />, title: "Automated Lead Funnel" },
  { icon: <FaPhone />, title: "Smart Mortgage Workflow" },
];

function Features() {
  return (
    <Container className="features-container" id="features">
      <h2 className="features-header">Features</h2>
      <h3 className="user-features-header">For Users</h3>
      <Row id="user-features" className="justify-content-center">
        {userFeatures.map((feature, index) => (
          <Col key={index} md="4" className="mb-4 d-flex align-items-stretch">
            <Card className="feature-card mx-auto">
              <CardBody>
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="officer-features-header">For Loan Officers</h3>
      <Row id="officer-features" className="justify-content-center">
        {loanOfficerFeatures.map((feature, index) => (
          <Col key={index} md="4" className="mb-4 d-flex align-items-stretch">
            <Card className="feature-card mx-auto">
              <CardBody>
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Features;
