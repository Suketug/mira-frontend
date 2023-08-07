import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import "../../assets/scss/now-ui-kit/_features.scss";

const userFeatures = [
  {
    title: "AI-Powered Mortgage Chat",
    description: "Dive into a seamless interaction experience, as MIRA intuitively understands your questions, providing prompt and accurate responses to simplify your mortgage journey."
  },
  {
    title: "Instant Qualification Insights",
    description: "No more waiting or guesswork. MIRA instantly evaluates your information, giving you a clear understanding of your mortgage eligibility."
  },
  {
    title: "Custom-Tailored Mortgage Guidance",
    description: "Every individual is unique, and so is our advice. MIRA crafts mortgage guidance that aligns perfectly with your personal and financial profile."
  },
  {
    title: "Top-Tier Document Portal",
    description: "With state-of-the-art encryption and security protocols, MIRA ensures that your documents and personal data remain shielded from any breaches or unauthorized access."
  },
  {
    title: "Real-Time Application Tracker",
    description: "From the start to the finish line, MIRA keeps you updated on your mortgage application status, ensuring you're never left in the dark."
  },
  {
    title: "24/7 Support",
    description: "Whether it's a question in the middle of the night or an urgent eligibility check, MIRA is available round-the-clock, eliminating the need to await a response from loan officers."
  },
];

const loanOfficerFeatures = [
  {
    title: "AI-Enhanced Client Outreach",
    description: "Never miss a potential client. MIRA's AI-driven capabilities ensure every lead is promptly engaged, increasing conversion rates."
  },
  {
    title: "Rapid Pre-Qualification Tools",
    description: "Get insights instantly. With MIRA, you can assess a prospect's eligibility for a mortgage in seconds, streamlining the initial phases of client interaction."
  },
  {
    title: "Seamless Communication Flow",
    description: "Improve your client relationships. MIRA facilitates smoother interactions, ensuring all client queries and concerns are promptly addressed."
  },
  {
    title: "Automated Lead Funnel",
    description: "Enhance your clientele base. MIRA's AI-driven lead generation tools ensure a steady stream of potential clients, boosting business growth."
  },
  {
    title: "Smart Mortgage Workflow",
    description: "Experience a streamlined mortgage process. MIRA's AI algorithms assist in processing, reducing errors and enhancing efficiency."
  },
];

function Features() {
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("fade-in");
      }, index * 100); // This will stagger the animations
    });
  }, []);

  return (
    <Container className="features-container">
      <h1 className="features-header text-center" id="features">Features</h1>

      <h2 className="subheader text-center">For Users</h2>
      <Row id="user-features" className="justify-content-center">
        {userFeatures.map((feature, index) => (
          <Col key={index} md="4" className="mb-4 d-flex align-items-stretch">
            <Card className="feature-card mx-auto">
              <CardBody>
                <CardTitle>{feature.title}</CardTitle>
                <CardText>{feature.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="subheader text-center">For Loan Officers</h2>
      <Row id="loan-officer-features" className="justify-content-center">
        {loanOfficerFeatures.map((feature, index) => (
          <Col key={index} md="4" className="mb-4 d-flex align-items-stretch">
            <Card className="feature-card mx-auto">
              <CardBody>
                <CardTitle>{feature.title}</CardTitle>
                <CardText>{feature.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Features;
