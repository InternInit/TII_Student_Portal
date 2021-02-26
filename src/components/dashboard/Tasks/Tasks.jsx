import React, { useState, useEffect, useRef } from "react";

import { Row, Col, Breadcrumb, Collapse, PageHeader } from "antd";

import StudentInfoCard from "./StudentInfoCard.jsx";

import { InnerContainer, Header, PageContainer } from "../../Styled/FundamentalComponents";
import ToDoTab from "./ToDoTab";
import CreateTaskCard from "./CreateTaskCard.jsx";
import { AttendanceTable, FeedbackTable, GradesTable } from "./TableDisplays";
import { CaretRightOutlined } from "@ant-design/icons";

import { useSpring, animated } from "react-spring";

import { Link } from "react-router-dom";

import _ from "underscore";

// Redux
import { connect } from "react-redux";

const { Panel } = Collapse;

// const mapStateToProps = (state) => {
//   return {
//     students: state.students,
//   };
// };

const Tasks = (props) => {
  //Refs for scrollable regions
  const gradesSection = useRef();
  const feedbackSection = useRef();
  const attendanceSection = useRef();

  /**
   * State to determine which containers have or
   * haven't been expanded
   *
   * Used to determine which carats to rotate
   */
  const [isExpanded, setExpanded] = useState({
    todo: true,
    attendance: true,
    feedback: true,
    grades: true,
  });

  // Find student, abstract out their data to two other const's
//   const student = _.find(
//     props.students,
//     (student) => student.Id === props.match.params.id
//   );
//   const info = student.formData;
//   const applicationProgress =
//     student.completionState.reduce((accumulator, val) => accumulator + val) /
//     student.completionState.length;

  // Animated version of the CaretRightOutline icon for useSpring
  const AnimatedCaret = animated(CaretRightOutlined);

  /**
   * Four different useSprings to animate the carat rotations
   * of each section on the page
   */
  const caretStylingToDo = useSpring({
    transform: isExpanded.todo ? "rotate(90deg)" : "rotate(0deg)",
    fontSize: "16px",
    config: { duration: 100 },
  });
  const caretStylingAttendance = useSpring({
    transform: isExpanded.attendance ? "rotate(90deg)" : "rotate(0deg)",
    fontSize: "16px",
    config: { duration: 100 },
  });
  const caretStylingGrades = useSpring({
    transform: isExpanded.grades ? "rotate(90deg)" : "rotate(0deg)",
    fontSize: "16px",
    config: { duration: 100 },
  });
  const caretStylingFeedback = useSpring({
    transform: isExpanded.feedback ? "rotate(90deg)" : "rotate(0deg)",
    fontSize: "16px",
    config: { duration: 100 },
  });

  /**
   * Accessed through clicks on the @component StudentInfoCard
   *
   * Scrolls to relevant section of the page based on what menu
   * span was clicked on in StudentInfoCard
   *
   * @param {string} loc
   */
  const scrollTo = (loc) => {
    console.log(loc);

    if (loc === "grades") {
      gradesSection.current.scrollIntoView({ behavior: "smooth" });
    } else if (loc === "feedback") {
      feedbackSection.current.scrollIntoView({ behavior: "smooth" });
    } else if (loc === "attendance") {
      attendanceSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageContainer>
      <InnerContainer className="py-1">
        <PageHeader
        onBack={() => this.props.history.push("/dashboard")}
        title={
          <Link
            to="/dashboard"
            style={{ fontWeight: "normal", color: "#262626"}}
            className="twentyFont"
          >
            Back to Dashboard
          </Link>
        }
        />
        <Row gutter={[32, 0]} className="py-2">
          <Col span={8}>
            <StudentInfoCard
              // id={student.Id}
              // student={info}
              // applicationProgress={applicationProgress}
              // checklist={student.completionState}
              // appliedTo={student.appliedTo}
              // todos={student.todos}
              // status={student.status}
              scrollTo={(loc) => scrollTo(loc)}
            />
          </Col>

          <Col span={16} style={{marginTop: "-45px"}}>

            <Row className="pb-1">
              <CreateTaskCard 
              //isIntern={student.status === "Intern"} 
              isIntern={true}
              />
            </Row>
            
            {/* 
            IMPLEMENT LATER
            */}
            {/**
             * Collapsible sections that only show when the student
             * is an intern
             *
             * Sections: Grades, Feedback, Attendance
             */}
            {
            //student.status === "Intern" && 
            (
              <>
                <div ref={gradesSection}>
                  <Collapse
                    id="grades"
                    bordered={false}
                    ghost={true}
                    defaultActiveKey={["1"]}
                    onChange={() =>
                      setExpanded({
                        ...isExpanded,
                        grades: !isExpanded.grades,
                      })
                    }
                    className="current-student-collapse"
                  >
                    <Panel
                      showArrow={false}
                      header={
                        <Row
                          align="middle"
                          style={{ marginLeft: "-10px", marginBottom: "-20px" }}
                        >
                          <Col>
                            <Header className="twentyFourFont" bolded>
                              Grades
                            </Header>
                          </Col>
                          <Col className="ml-1">
                            <AnimatedCaret style={{ ...caretStylingGrades }} />
                          </Col>
                        </Row>
                      }
                      key="1"
                      className="current-student-panel"
                      style={{ marginBottom: "-20px" }}
                    >
                      <GradesTable 
                      //data={student.grades} 
                      /> 
                    </Panel>
                  </Collapse>
                </div>
                {!isExpanded.grades && <div className="mb-1-5" />}
                <div ref={feedbackSection}>
                  <Collapse
                    id="feedback"
                    bordered={false}
                    ghost={true}
                    defaultActiveKey={["1"]}
                    onChange={() =>
                      setExpanded({
                        ...isExpanded,
                        feedback: !isExpanded.feedback,
                      })
                    }
                    className="current-student-collapse"
                  >
                    <Panel
                      showArrow={false}
                      header={
                        <Row
                          align="middle"
                          style={{ marginLeft: "-10px", marginBottom: "-20px" }}
                        >
                          <Col>
                            <Header className="twentyFourFont" bolded>
                              Feedback
                            </Header>
                          </Col>
                          <Col className="ml-1">
                            <AnimatedCaret style={{ ...caretStylingFeedback }} />
                          </Col>
                        </Row>
                      }
                      key="1"
                      className="current-student-panel"
                      style={{ marginBottom: "-20px" }}
                    >
                      <FeedbackTable 
                      //data={student.feedback} 
                      />


                    </Panel>
                  </Collapse>
                </div>
                {!isExpanded.feedback && <div className="mb-1-5" />}
                <div ref={attendanceSection}>
                  <Collapse
                    id="attendance"
                    ref={attendanceSection}
                    bordered={false}
                    ghost={true}
                    defaultActiveKey={["1"]}
                    onChange={() =>
                      setExpanded({
                        ...isExpanded,
                        attendance: !isExpanded.attendance,
                      })
                    }
                    className="current-student-collapse"
                    style={{ marginBottom: "-20px" }}
                  >
                    <Panel
                      showArrow={false}
                      header={
                        <Row
                          align="middle"
                          style={{ marginLeft: "-10px", marginBottom: "-20px" }}
                        >
                          <Col>
                            <Header className="twentyFourFont" bolded>
                              Attendance
                            </Header>
                          </Col>
                          <Col className="ml-1">
                            <AnimatedCaret
                              style={{ ...caretStylingAttendance }}
                            />
                          </Col>
                        </Row>
                      }
                      key="1"
                      className="current-student-panel"
                    >
                      <AttendanceTable 
                      //data={student.hours} 
                      />
                    </Panel>
                  </Collapse>
                </div>
                {!isExpanded.attendance && <div className="mb-1-5" />}
              </>
            )}
          </Col>
        </Row>
      </InnerContainer>
    </PageContainer>
  );
};

export default Tasks;
