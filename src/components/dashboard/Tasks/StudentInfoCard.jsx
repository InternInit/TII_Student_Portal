import React from "react";
import { Row, Col, Progress, Avatar, Tooltip, Anchor, Divider } from "antd";
import {
  TabContainer,
  Header,
  Caption,
  BorderlessTag,
  COLORS,
} from "../../Styled/FundamentalComponents";
import SmartAvatar from "./SmartAvatar.jsx";
import { FiMail, FiFileText } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
  };
};

const { Link: AnchorLink } = Anchor;

const StudentInfoCard = (props) => {


  /**
   * A simple function to determine what color the industry tag
   * should be on intern dashboards
   *
   * Takes the modulus of the length of the tag and indexes that num
   * against an array of colors
   *
   * @param {string} tag
   */
  const randomizeColor = (tag) => {
    const colors = [
      COLORS.GEEKBLUE_M,
      COLORS.PURPLE_M,
      COLORS.CYAN_M,
      COLORS.GOLD_M,
      COLORS.VOLCANO_M,
    ];

    return colors[tag.length % 5];
  };

  return (
    <TabContainer className="px-3 py-2">
      {/**
       * First row for avatar, name, and status
       *
       * @if status is Intern:
       *   - Displays intern view: contact supervisor
       */}
      <Row align="top" justify="space-between">
        <Col>
          <Row gutter={[16, 0]} align="top">
            <Col>
              {/* <SmartAvatar
                name="Oscar"
                size={50}
              /> */}
              <Avatar
               //style={{height: "50px"}}
               size={50}
               src="data:image/png;base64,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"/>
            </Col>
            <Col flex="auto">
              <Row style={{ marginTop: "-4px" }}>
                <Header className="twentyFourFont">
                  {/* {student["0"]["First Name"] + " " + student["0"]["Last Name"]} */}
                  Microhard
                </Header>
              </Row>
              <Row justify="space-between" style={{ marginTop: "-8px" }}>
                <Caption
                  className="sixteenFont"
                  color={
                    true
                      ? COLORS.BLUE_M
                      : true
                      ? COLORS.GREEN_M
                      : COLORS.VOLCANO_M
                  }
                >
                  Oscar Hong
                </Caption>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="universal-middle">
          <Row>
              <Col>
                <Tooltip title="View Application">
                  <Link
                    to={"/apply"}
                  >
                    <FiFileText className="student-info-card-contact" />
                  </Link>
                </Tooltip>
              </Col>
          </Row>
        </Col>
      </Row>

     
          <Row className="mt-1-5 pb-point-25" justify="center">
            <Col
              onClick={() => props.scrollTo("grades")}
              className="universal-center student-info-card-nav"
              span={8}
            >
              <span className="sixteenFont student-info-card-nav-text">
                Grades
              </span>
            </Col>
            <Col
              onClick={() => props.scrollTo("feedback")}
              className="universal-center student-info-card-nav"
              span={8}
            >
              <span className="sixteenFont student-info-card-nav-text">
                Feedback
              </span>
            </Col>
            <Col
              onClick={() => props.scrollTo("attendance")}
              className="universal-center student-info-card-nav"
              span={8}
            >
              <span className="sixteenFont student-info-card-nav-text">
                Attendance
              </span>
            </Col>
          </Row>
        

      {/**
       * Three pronged terniary operator logic to determine
       * what sidebox information to display for the student
       *
       * IN ORDER
       *
       * Applying: Progress bar, checklist of sections
       * Applied: Full progress bar, applied to companies
       * Intern: Company information & contact, industry
       *
       */}

      {/* {props.status === "Applying" ? (
        <ApplyingView
          checklist={checklist}
          applicationProgress={applicationProgress}
        />
      ) : props.status === "Applied" ? (
        <>
          <Row className="mt-1-5 mb-point-5" justify="center">
            <Header className="twentyTwoFont" bolded>
              Application Progress
            </Header>
          </Row>
          <Row justify="center">
            <Progress
              percent={100}
              type="dashboard"
              format={() => "100%"}
            />
          </Row>
          <Row className="mb-point-5">
            <Header className="twentyFont">Applied To</Header>
          </Row>
          {appliedTo.map((company) => (
            <Row className="mb-point-5" align="middle">
              <Col>
                <Avatar src={props.businesses[company].logo} size={28} />
              </Col>
              <Col className="pl-point-5">
                <Caption className="sixteenFont">
                  {props.businesses[company].name}
                </Caption>
              </Col>
            </Row>
          ))}
        </>
      ) : (
        <> */}
          <Row className="mt-1-5 mb-point-5" justify="center">
            <Header className="twentyTwoFont" bolded>
              Internship Details
            </Header>
          </Row>
          <Row className="mb-point-25" align="middle">
            <Header className="twentyFont">Contact</Header>
          </Row>
          <Row className="mb-point-5" align="middle">
            <Caption className="sixteenFont" light>
              Company:{" "}
              <Caption className="sixteenFont">
                {/* {props.businesses[appliedTo].name} */}
                AssetGrade LLC
              </Caption>
            </Caption>
          </Row>
          <Row className="mb-point-5" align="middle">
            <Caption className="sixteenFont" light>
              Supervisor:{" "}
              <Caption className="sixteenFont">
                {/* {props.businesses[appliedTo].supervisor} */}
                LeBron James
              </Caption>
            </Caption>
          </Row>
          <Row className="mb-point-5" align="middle">
            <Caption className="sixteenFont" light>
              Phone:{" "}
              <Caption className="sixteenFont">
                {/* {props.businesses[appliedTo].phoneNumber} */}
                123 456 7890
              </Caption>
            </Caption>
          </Row>
          <Row className="mb-point-5" align="middle">
            <Caption className="sixteenFont" light>
              Email:{" "}
              <Caption className="sixteenFont">
                {/* {props.businesses[appliedTo].email} */}
                oscarhong25@gmail.com
              </Caption>
            </Caption>
          </Row>
          <Row className="pt-point-5 mb-point-25" align="middle">
            <Header className="twentyFont">Industry</Header>
          </Row>
          <Row>
            <BorderlessTag
              className="px-1-5 fourteenFont"
              color="white"
              background={randomizeColor(
                "Finance"
                //props.businesses[appliedTo].industry
                )}
            >
              {/* {props.businesses[appliedTo].industry} */}
              Finance
            </BorderlessTag>
          </Row>

    </TabContainer>
  );
};

/**
 * The display for the student if status is Applying
 *
 * Pulled into a seperate component for conciseness on
 * the main render
 *
 * @param {Array} checklist
 * @param {Float} applicationProgress
 */
// const ApplyingView = ({ status, checklist, applicationProgress }) => {
//   return (
//     <>
//       <Row className="mt-1-5 mb-point-5" justify="center">
//         <Header className="twentyTwoFont" bolded>
//           Application Progress
//         </Header>
//       </Row>
//       <Row justify="center">
//         <Progress
//           percent={status ? 100 : Math.round(applicationProgress * 100)}
//           type="dashboard"
//         />
//       </Row>
//       <Row className="mb-point-5">
//         <Header className="twentyFont">Checklist</Header>
//       </Row>
//       <Row className="mb-point-25">
//         {checklist[0] === 1 ? (
//           <>
//             <Col>
//               <div className="universal-middle universal-center student-info-card-finished">
//                 <FaCheck className="student-info-card-check" />
//               </div>
//             </Col>
//           </>
//         ) : (
//           <>
//             <Col>
//               <div className="universal-middle universal-center student-info-card-unfinished" />
//             </Col>
//           </>
//         )}
//         <Col className="pl-point-5">
//           <Caption
//             className="sixteenFont"
//             color={checklist[0] === 1 && COLORS.GREEN_M}
//           >
//             Internship Information
//           </Caption>
//         </Col>
//       </Row>
//       <Row className="mb-point-25">
//         {checklist[1] === 1 ? (
//           <>
//             <Col>
//               <div className="universal-middle universal-center student-info-card-finished">
//                 <FaCheck className="student-info-card-check" />
//               </div>
//             </Col>
//           </>
//         ) : (
//           <>
//             <Col>
//               <div className="universal-middle universal-center student-info-card-unfinished" />
//             </Col>
//           </>
//         )}
//         <Col className="pl-point-5">
//           <Caption
//             className="sixteenFont"
//             color={checklist[1] === 1 && COLORS.GREEN_M}
//           >
//             Personal Information
//           </Caption>
//         </Col>
//       </Row>
//       <Row className="mb-point-25">
//         {checklist[2] === 1 ? (
//           <>
//             <Col>
//               <div className="universal-middle universal-center student-info-card-finished">
//                 <FaCheck className="student-info-card-check" />
//               </div>
//             </Col>
//           </>
//         ) : (
//           <>
//             <Col>
//               <div className="universal-middle universal-center student-info-card-unfinished" />
//             </Col>
//           </>
//         )}
//         <Col className="pl-point-5">
//           <Caption
//             className="sixteenFont"
//             color={checklist[2] === 1 && COLORS.GREEN_M}
//           >
//             Essays
//           </Caption>
//         </Col>
//       </Row>
//       <Row className="mb-point-25">
//         {checklist[3] === 1 ? (
//           <>
//             <Col>
//               <div className="universal-middle universal-center student-info-card-finished">
//                 <FaCheck className="student-info-card-check" />
//               </div>
//             </Col>
//           </>
//         ) : (
//           <>
//             <Col>
//               <div className="universal-middle universal-center student-info-card-unfinished" />
//             </Col>
//           </>
//         )}
//         <Col className="pl-point-5">
//           <Caption
//             className="sixteenFont"
//             color={checklist[3] === 1 && COLORS.GREEN_M}
//           >
//             Activities and Classes
//           </Caption>
//         </Col>
//       </Row>
//       <Row className="mb-point-25">
//         {checklist[4] === 1 ? (
//           <>
//             <Col>
//               <div className="universal-middle universal-center student-info-card-finished">
//                 <FaCheck className="student-info-card-check" />
//               </div>
//             </Col>
//           </>
//         ) : (
//           <>
//             <Col>
//               <div className="universal-middle universal-center student-info-card-unfinished" />
//             </Col>
//           </>
//         )}
//         <Col className="pl-point-5">
//           <Caption
//             className="sixteenFont"
//             color={checklist[4] === 1 && COLORS.GREEN_M}
//           >
//             References
//           </Caption>
//         </Col>
//       </Row>
//     </>
//   );
// };

export default connect(mapStateToProps)(StudentInfoCard);
