import React from "react";
import styled from "styled-components";

import { CheckOutlined } from "@ant-design/icons";
//styles
import { withRouter } from "react-router-dom";

import { Menu, Layout, Collapse } from "antd";

import "../../App.scss";
import "./FAQAndHowToApply.scss";

const Question = styled.span`
  font-weight: 500;
  color: #000000;
  font-family: Lato;
`;

const ResponseText = styled.div`
  font-weight: 0;
  color: #434343;

  white-space: pre-line;
`;

//Questions
const QuestionArray = [
  {
    id: "match-length",
    question: "How long will it take me to be matched with a business?",
    answer:
      "As soon as you create an application to apply, your application is sent to all the businesses in our database that are looking for your specific qualifications. If you apply to a specific business, your application is instantly sent to them. \n\n We share your application with businesses as soon as it’s ready to send. Businesses determine when to reach out to you (using the contact information provided in your application). ",
  },
  {
    id: "data-expiration",
    question:
      "How long will my profile be in the database? (i.e. Profile expiration date)",
    answer:
      "We will keep sending your application to businesses for as long as you are in high school or until you delete your profile. You can always update your profile with more relevant information.",
  },
  {
    id: "info-privacy",
    question: "How is my information being handled?",
    answer:
      "As high schoolers, we know the importance of handling user data responsibly and ethically. This is why we have a minimalist approach when asking for information; we only ask what is essential to a job application. However, if you don’t feel comfortable with providing even this information, we don’t require you to. \n\nFor the information we do receive, it is being managed securely and responsibly.",
  },
  {
    id: "match-notification",
    question: "How will I know when I’m matched with a business?",
    answer:
      "Once a business decides to move forward with your application, then they will reach out to you via the contact information provided in your application.",
  },
  {
    id: "is-it-free",
    question: "Is this really free?",
    answer:
      "100%. We don’t have any hidden fees and we don’t sell your data. If we’re trying to level the playing field by reducing barriers to internship opportunities, it wouldn’t make sense for us to create a price barrier for students. The way we generate revenue is through charging a small service fee for businesses.",
  },
  {
    id: "business-limit",
    question: "How many businesses can I apply to?",
    answer:
      "As many as are in our database. What’s better? You only have to use one application.\n\nAmazing right?",
  },
  {
    id: "resume-and-coverletter",
    question: "What if I don’t know how to make a resume, cover letter, etc.?",
    answer:
      "We anticipated this question and created a compilation of educational resources to answer your specific questions in our APPLY SKILLS Tab. There, you will find different articles covering topics from resumes to interview prep. to help you strengthen your application. ",
  },
  {
    id: "industry-offerings",
    question: "What industries do you offer on the platform?",
    answer:
      "We offer internships in General Business, Media or Tellecommunications, Science Research, Vocational, Consulting, Real Estate, Computer Science, Political, Finance/Accounting, Engineering, Biotechnology, and Marketing.",
  },
];

const { Content, Header, Sider } = Layout;
const { Panel } = Collapse;

class FAQPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="faq-page">
        <div className="Banner">
          <span className="Header">Frequently Asked Questions</span>
        </div>
        <div className="faq-container">
          {QuestionArray.map((list) => (
            <Collapse
              className="faq-collapse"
              id={list.id}
              key={list.id}
              bordered={false}
              expandIconPosition="right"
            >
              <Panel
                className="faq-panel"
                header={
                  <Question className="twentyTwoFont">{list.question}</Question>
                }
                style={{ borderRadius: "15px" }}
              >
                <Response>{list.answer}</Response>
              </Panel>
            </Collapse>
          ))}
          <div className="intro-container faq-contact">
            <Question className="twentyFourFont">
              Contact us at <a href="mailto:info@interninit.com">info@interninit.com</a> if you have any unaswered
              questions!
            </Question>
          </div>
        </div>
      </div>
    );
  }
}
export default FAQPage;

function Response(props) {
  return <ResponseText className="sixteenFont">{props.children}</ResponseText>;
}
