import React, { useState } from 'react';
import { Container, Collapse } from 'reactstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';



function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="faq-item">
        <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
          {question} 
          {isOpen ? <FaChevronUp className="faq-icon" /> : <FaChevronDown className="faq-icon" />}
        </div>
        <Collapse isOpen={isOpen}>
          <div className="faq-answer">{answer}</div>
        </Collapse>
      </div>
    );
  }

function FAQSection({ faqs, title }) {
  return (
    <div className="faq-section">
      <h3>{title}</h3>
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
}

function FAQs() {
    const userFAQs = [
      {
        question: "What is MIRA and how can it assist me?",
        answer: "MIRA isn't just another bot; it's your 24/7 AI-driven mortgage guide. Whether you have questions or need real-time application updates, MIRA's got you covered."
      },
      {
        question: "How secure is my data with MIRA?",
        answer: "Your peace of mind is our priority. MIRA employs top-notch encryption, ensuring your documents and details are protected against any unauthorized access."
      },
      {
        question: "How does MIRA simplify the mortgage process for me?",
        answer: "Think of MIRA as your mortgage compass. From faster eligibility checks, real-time application status updates, to seamless document submissions, MIRA streamlines each step, making your journey stress-free."
      },
      {
        question: "Does MIRA replace human loan officers?",
        answer: "Not at all! While MIRA handles routine inquiries and tasks, human experts remain invaluable for intricate issues or personalized advice."
      },
      {
        question: "Is MIRA available 24/7? What if I have an urgent question overnight?",
        answer: "Absolutely! MIRA operates round the clock. So whether it's a midnight query or an early morning eligibility check, MIRA's here to assist."
      }
    ];
  
    const officerFAQs = [
      {
        question: "How does MIRA amplify my workflow?",
        answer: "MIRA's your sidekick in automating repetitive tasks. From answering standard questions to pre-qualification, you can now dedicate more time to high-value interactions and closings."
      },
      {
        question: "Can MIRA assist in lead generation?",
        answer: "Yes, indeed! MIRA engages potential clients, sources leads, and qualifies them, ensuring you're connected with the most promising ones."
      },
      {
        question: "Does MIRA oversee document collection and verification?",
        answer: "MIRA goes beyond just gathering documents. Using advanced AI capabilities, it can review and extract critical information from these documents. Once the data is extracted, MIRA parses it into the system, updating relevant fields. This enables MIRA to review numbers and even pre-qualify clients. However, for nuanced or crucial verifications, we believe in the invaluable expertise of human loan officers. So, while MIRA handles the heavy lifting, final checks and balances remain in your capable hands."
      },
      {
        question: "Will MIRA's AI approach make clients feel distant?",
        answer: "Not a chance! MIRA offers a human-like chat experience, ensuring warmth in every interaction. And for deep-dives or tailored advice, they can always reach out to you."
      },
      {
        question: "How seamlessly does MIRA integrate with my current systems, like Encompass or Calyx Software?",
        answer: "MIRA's designed with compatibility in mind. Whether it's Encompass, Calyx Software, or other platforms, integration is smooth."
      },
      {
        question: "Can MIRA help close deals faster? Does it boost productivity?",
        answer: "Absolutely! With MIRA handling routine tasks, you can process loans quicker. That means more closings in less time and happy clients all around."
      }
    ];

  return (
    <Container className="faq-container" id="FAQs">
      <h2 className="faq-header">FAQs - Frequently Asked Questions</h2>      
      <FAQSection title="For Users" faqs={userFAQs} />
      <FAQSection title="For Loan Officers" faqs={officerFAQs} />
    </Container>
  );
}

export default FAQs;
