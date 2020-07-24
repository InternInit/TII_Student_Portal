//React Imports
import React, { Component } from "react";
import styled from "styled-components";
import "../../../App.css";
import "../dashboard.css";

//IMAGE IMPORTS
import GettingStarted from "./GettingStarted.jpg";
import Choosing_Resume from "./tiiArrayPictures/Choosing_Resume.jpg";
import What_To_Include_On_Resume from "./tiiArrayPictures/What_To_Include_On_Resume.jpg";
import Writing_Reverse_Chronological from "./tiiArrayPictures/Writing_Reverse_Chronological.jpg";
import Writing_Functional_Resume from "./tiiArrayPictures/Writing_Functional_Resume.jpg";
import Writing_Combination_Resume from "./tiiArrayPictures/Writing_Combination_Resume.jpg";
import Reverse_Chron_Resume_Example from "./tiiArrayPictures/Reverse_Chron_Resume_Example.jpg";
import Funct_Resume_Example from "./tiiArrayPictures/Funct_Resume_Example.jpg";
import Comb_Resume_Example from "./tiiArrayPictures/Comb_Resume_Example.jpg";
import What_to_Say_in_Interview from "./tiiArrayPictures/What_to_Say_in_Interview.jpg";
import How_to_act_Interview from "./tiiArrayPictures/How_to_act_Interview.jpg";
import Before_After_Interview from "./tiiArrayPictures/Before_After_Interview.jpg";
import Mock_Interview_Questions from "./tiiArrayPictures/Mock_Interview_Questions.jpg";
import Letter_of_Rec from "./tiiArrayPictures/Letter_of_Rec.jpg";
import Cover_Letter from "./tiiArrayPictures/Cover_Letter.jpg";
import Extra_Info from "./tiiArrayPictures/Extra_Info.jpg";

//HTML IMPORTS

import BigCard from "./bigCard";
import LittleCard from "./littleCard";

import { Card, Row, Col, PageHeader } from "antd";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch as ReactSwitch,
  Redirect,
  useRouteMatch as match,
  useParams
} from "react-router-dom";
import { withRouter } from "react-router";

//Apply Skills html files
import fillingOutAnApplication from "./tiiSkillInfo/Application/fillingOutAnApplication.js";
import writingACoverLetter from "./tiiSkillInfo/Cover-Letters/writingACoverLetter.js";
import howToActInAnInterview from "./tiiSkillInfo/Interview/howToActInAnInterview.js";
import introductionToInterviewing from "./tiiSkillInfo/Interview/introductionToInterviewing.js";
import mockInterviewQuestions from "./tiiSkillInfo/Interview/mockInterviewQuestions.js";
import whatToDoBeforeAndAfterTheInterview from "./tiiSkillInfo/Interview/whatToDoBeforeAndAfterTheInterview.js";
import whatToSayInAnInterview from "./tiiSkillInfo/Interview/whatToSayInAnInterview.js";
import lettersOfReccomendation from "./tiiSkillInfo/Letters of Recommendation/lettersOfReccomendation.js";
import additonalResources from "./tiiSkillInfo/Other/additionalResources.js";
import choosingYourResume from "./tiiSkillInfo/Resume Creation/choosingYourResume.js";
import combinationResumeExamples from "./tiiSkillInfo/Resume Creation/combinationResumeExamples.js";
import functionalResumeExample from "./tiiSkillInfo/Resume Creation/functionalResumeExample.js";
import howToWriteACombinationResume from "./tiiSkillInfo/Resume Creation/howToWriteACombinationResume.js";
import howToWriteAFunctionalResume from "./tiiSkillInfo/Resume Creation/howToWriteAFunctionalResume.js";
import reverseChronologicalResumeExample from "./tiiSkillInfo/Resume Creation/reverseChronologicalResumeExample.js";
import whatShouldIIncludeOnMyResume from "./tiiSkillInfo/Resume Creation/whatShouldIIncludeOnMyResume.js";

const resumeSkills = [
  [
    Choosing_Resume,
    "How to Choose Which Style Resume to Use",
    "5 minutes",
    "Find out which resume style works best for you.",
    "choosing-your-resume",
    choosingYourResume
  ],
  [
    What_To_Include_On_Resume,
    "What You Should Include on Your Resume",
    "25 minutes",
    "How to decide what to include on your resume.",
    "what-should-i-include-on-my-resume",
    whatShouldIIncludeOnMyResume
  ],
  [
    Writing_Reverse_Chronological,
    "Writing a Reverse Chronological Resume",
    "15 minutes",
    "If you’ve had prior job experiences, read on to learn how to create a reverse chronological resume.",
    "#",
    ""
  ],
  [
    Writing_Functional_Resume,
    "Writing a Functional Resume",
    "15 minutes",
    "If you don’t have any prior work experience, don’t fret. Read on to learn how to create a functional resume.",
    "writing-a-functional-resume",
    howToWriteAFunctionalResume
  ],
  [
    Writing_Combination_Resume,
    "Writing a Combination Resume",
    "15 minutes",
    "If you want to show your skills AND work experience, a combination resume may be for you. Learn how to create a combination resume.",
    "writing-a-combination-resume",
    howToWriteACombinationResume
  ],
  [
    Reverse_Chron_Resume_Example,
    "Reverse Chronological Resume Example",
    "15 minutes",
    "Take a look at what a reverse chronological resume could look like.",
    "reverse-chronological-resume-example",
    reverseChronologicalResumeExample
  ],
  [
    Funct_Resume_Example,
    "Functional Resume Example",
    "15 minutes",
    "Take a look at what a functional resume could look like.",
    "functional-resume-example",
    functionalResumeExample
  ],
  [
    Comb_Resume_Example,
    "Combination Resume Example",
    "15 minutes",
    "Take a look at what a combination resume could look like.",
    "combination-resume-example",
    combinationResumeExamples
  ]
];
const interviewSkills = [
  [
    What_to_Say_in_Interview,
    "What you Should Say in an Interview",
    "10 minutes",
    "Prepare yourself for a job interview by reviewing what you should (and shouldn’t) say.",
    "what-to-say-in-an-interview",
    whatToSayInAnInterview
  ],
  [
    How_to_act_Interview,
    "How to Act in an Interview",
    "10 minutes",
    "There are many Do’s and Do NOT’s in job interviews. Learn more about the various facets of the interview process so you can land your internship.",
    "how-to-act-in-an-interview",
    howToActInAnInterview
  ],
  [
    Before_After_Interview,
    "What to do Before and After an Interview",
    "7 minutes",
    "Give yourself an edge in the interview process by preparing before it begins and making yourself more memorable afterwards.",
    "what-to-do-before-and-after-the-interview",
    whatToDoBeforeAndAfterTheInterview
  ],
  [
    Mock_Interview_Questions,
    "Potential Interview Questions",
    "10 minutes",
    "12 questions that you might be asked during an interview.",
    "mock-interview-questions",
    mockInterviewQuestions
  ]
];
const writtenSkills = [
  [
    Letter_of_Rec,
    "A Guide to Letters of Recommendations",
    "20 minutes",
    "What is a letter of recommendation, and how do you get one? These questions (among many others) will all be answered in this quick guide.",
    "letter-of-reccomendation",
    lettersOfReccomendation
  ],
  [
    Cover_Letter,
    "How to Write a Cover Letter",
    "10 minutes",
    "A quick tutorial explaining cover letters and how to write them.",
    "cover-letter",
    writingACoverLetter
  ],
  [
    Extra_Info,
    "Additional Resources",
    "2 minutes",
    "Just in case we missed something, here are some outside resources we recommend to answer your questions.",
    "additional-resources",
    additonalResources
  ]
];

const SkillsContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 3%;
`;

class ApplySkills extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      pageContent: fillingOutAnApplication
    };
  }
  render() {
    let { pageContent } = this.state;
    return (
      <div>
        <Route
          path="/dashboard/apply-skills"
          exact
          render={() => {
            return <Redirect to="/dashboard/apply-skills/" />;
          }}
        />
        <Route exact path="/dashboard/apply-skills/">
          <h1 className="module-name">Get Started</h1>
          <BigCard
            link="/dashboard/apply-skills/filling-out-an-application"
            cover={GettingStarted}
            title="Why do I need an internship?"
            description="Curious about why you would need an internship? Check out our
        comprehensive overview about the benefits of high school
        internships and how The Internship Initiative can help you get
        one."
          />

          <h1 className="module-name">Build your resumé</h1>
          <Row gutter={[32, 32]}>
            {resumeSkills.map(module => (
              <LittleCard
                link={module[4]}
                cover={module[0]}
                title={module[1]}
                readTime={module[2]}
                description={module[3]}
                onClick={() => {
                  this.handleClick(module[5]);
                }}
              />
            ))}
          </Row>
          <h1 className="module-name">Ace your Interview</h1>
          <Row gutter={[32, 32]}>
            {interviewSkills.map(module => (
              <LittleCard
                link={module[4]}
                cover={module[0]}
                title={module[1]}
                readTime={module[2]}
                description={module[3]}
                onClick={() => {
                  this.handleClick(module[5]);
                }}
              />
            ))}
          </Row>
          <h1 className="module-name">Master the Written Work</h1>
          <Row gutter={[32, 32]}>
            {writtenSkills.map(module => (
              <LittleCard
                link={module[4]}
                cover={module[0]}
                title={module[1]}
                readTime={module[2]}
                description={module[3]}
                onClick={() => {
                  this.handleClick(module[5]);
                }}
              />
            ))}
          </Row>
        </Route>

        {/*
         * Big Card Route
         */}
        <Route exact path="/dashboard/apply-skills/filling-out-an-application">
          <SkillsContainer>
            <Link to="/dashboard/apply-skills/">
              <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Back to Apply Skills"
              />
            </Link>
            <div
              dangerouslySetInnerHTML={{ __html: fillingOutAnApplication }}
            ></div>
          </SkillsContainer>
        </Route>


        {/*
         * Mapped routes for resume skills
         */}

        {resumeSkills.map(module => (
          <Route exact path={"/dashboard/apply-skills/" + module[4]}>
            <SkillsContainer>
              <Link to="/dashboard/apply-skills/">
                <PageHeader
                  className="site-page-header"
                  onBack={() => null}
                  title="Back to Apply Skills"
                />
              </Link>
              <img className="apply-skills-banner" src={module[0]} />
              <div
                className="container"
                dangerouslySetInnerHTML={{ __html: module[5] }}
              ></div>
            </SkillsContainer>
          </Route>
        ))}

        {/*
         * Mapped routes for interview skills
         */}
        {interviewSkills.map(module => (
          <Route exact path={"/dashboard/apply-skills/" + module[4]}>
            <SkillsContainer>
              <Link to="/dashboard/apply-skills/">
                <PageHeader
                  className="site-page-header"
                  onBack={() => null}
                  title="Back to Apply Skills"
                />
              </Link>
              <div dangerouslySetInnerHTML={{ __html: module[5] }}></div>
            </SkillsContainer>
          </Route>
        ))}




        {/*
         * Mapped routes for written skills
         */}
        {writtenSkills.map(module => (
          <Route exact path={"/dashboard/apply-skills/" + module[4]}>
            <SkillsContainer>
              <Link to="/dashboard/apply-skills/">
                <PageHeader
                  className="site-page-header"
                  onBack={() => null}
                  title="Back to Apply Skills"
                />
              </Link>
              <div dangerouslySetInnerHTML={{ __html: module[5] }}></div>
            </SkillsContainer>
          </Route>
        ))}



      </div>
    );
  }

  handleClick = content => {
    this.setState({
      pageContent: content
    });
  };
}

export default withRouter(ApplySkills);
