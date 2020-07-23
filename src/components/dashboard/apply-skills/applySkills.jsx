//React Imports
import React, { Component } from "react";
import styled from "styled-components";
import "../../../App.css";
import "../dashboard.css";
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

import BigCard from "./bigCard";
import LittleCard from "./littleCard";

import { Card, Row, Col } from "antd";

import { Redirect, Link } from "react-router-dom";
import { withRouter } from "react-router";





const resumeSkills = [
  [
    Choosing_Resume,
    "How to Choose Which Style Resume to Use",
    "5 minutes",
    "Find out which resume style works best for you."
  ],
  [
    What_To_Include_On_Resume,
    "What You Should Include on Your Resume",
    "25 minutes",
    "How to decide what to include on your resume."
  ],
  [
    Writing_Reverse_Chronological,
    "Writing a Reverse Chronological Resume",
    "15 minutes",
    "If you’ve had prior job experiences, read on to learn how to create a reverse chronological resume."
  ],
  [
    Writing_Functional_Resume,
    "Writing a Functional Resume",
    "15 minutes",
    "If you don’t have any prior work experience, don’t fret. Read on to learn how to create a functional resume."
  ],
  [
    Writing_Combination_Resume,
    "Writing a Combination Resume",
    "15 minutes",
    "If you want to show your skills AND work experience, a combination resume may be for you. Learn how to create a combination resume."
  ],
  [
    Reverse_Chron_Resume_Example,
    "Reverse Chronological Resume Example",
    "15 minutes",
    "Take a look at what a reverse chronological resume could look like."
  ],
  [
    Funct_Resume_Example,
    "Functional Resume Example",
    "15 minutes",
    "Take a look at what a functional resume could look like."
  ],
  [
    Comb_Resume_Example,
    "Combination Resume Example",
    "15 minutes",
    "Take a look at what a combination resume could look like."
  ]
];
const interviewSkills = [
  [
    What_to_Say_in_Interview,
    "What you Should Say in an Interview",
    "10 minutes",
    "Prepare yourself for a job interview by reviewing what you should (and shouldn’t) say."
  ],
  [
    How_to_act_Interview,
    "How to Act in an Interview",
    "10 minutes",
    "There are many Do’s and Do NOT’s in job interviews. Learn more about the various facets of the interview process so you can land your internship."
  ],
  [
    Before_After_Interview,
    "What to do Before and After an Interview",
    "7 minutes",
    "Give yourself an edge in the interview process by preparing before it begins and making yourself more memorable afterwards."
  ],
  [
    Mock_Interview_Questions,
    "Potential Interview Questions",
    "10 minutes",
    "12 questions that you might be asked during an interview."
  ]
];
const writtenSkills = [
  [
    Letter_of_Rec,
    "A Guide to Letters of Recommendations",
    "20 minutes",
    "What is a letter of recommendation, and how do you get one? These questions (among many others) will all be answered in this quick guide."
  ],
  [
    Cover_Letter,
    "How to Write a Cover Letter",
    "10 minutes",
    "A quick tutorial explaining cover letters and how to write them."
  ],
  [
    Extra_Info,
    "Additional Resources",
    "2 minutes",
    "Just in case we missed something, here are some outside resources we recommend to answer your questions."
  ]
];

class ApplySkills extends Component {
  render() {
    return (
      <div>
        <h1 className="module-name">Get Started</h1>
        <BigCard
          link="#"
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
              link="#"
              cover={module[0]}
              title={module[1]}
              readTime={module[2]}
              description={module[3]}
            />
          ))}
        </Row>
        <h1 className="module-name">Ace your Interview</h1>
        <Row gutter={[32, 32]}>
          {interviewSkills.map(module => (
            <LittleCard
              link="#"
              cover={module[0]}
              title={module[1]}
              readTime={module[2]}
              description={module[3]}
            />
          ))}
        </Row>
        <h1 className="module-name">Master the Written Work</h1>
        <Row gutter={[32, 32]}>
          {writtenSkills.map(module => (
            <LittleCard
              link="#"
              cover={module[0]}
              title={module[1]}
              readTime={module[2]}
              description={module[3]}
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default withRouter(ApplySkills);
