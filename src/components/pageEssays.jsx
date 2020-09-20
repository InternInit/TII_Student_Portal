import React from "react";
import {
  Form,
  Input,
  Button,
  message,
  Upload,
  Spin,
  Popover,
  Skeleton,
  Row,
  Col,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { InfoCircle } from "./StyledComponents/InternshipForms";
import "../App.css";

//React Routing
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import {
  updateCompletionState,
  updateCompletionChecklist,
} from "../redux/actions";

import _ from "lodash";
import SkeletonButton from "antd/lib/skeleton/Button";

//Object Destructuring
const { TextArea } = Input;
const { Dragger } = Upload;

//Formatting
const standardSpan = 24;
const halfSpan = standardSpan / 2;
const formGutter = [16, 16];

//Handles file uploading
const props = {
  name: "file",
  accept:
    ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf, application/pdf",
  multiple: true,
};

const mapStateToProps = (state) => {
  return {
    completionState: state.completionState,
    completionChecklist: state.completionChecklist,
  };
};

/**
 *
 * Updates User states
 *
 */
const mapDispatchToProps = {
  updateCompletionState,
  updateCompletionChecklist,
};

class PageEssays extends React.Component {
  formRef = React.createRef();

  state = {
    loaded: false,
  };

  waitForRef = (ref) => {
    return new Promise((resolve, reject) => {
      function checkRef() {
        if (ref.current === null) {
          setTimeout(() => {
            checkRef();
          }, 10);
        } else {
          resolve(ref);
        }
      }
      checkRef();
    });
  };

  scrollToRef = async () => {
    let neededRef;
    let offset = 0;
    let hash = this.props.location.hash;
    if (hash === "" || hash === "#Essay1") {
      window.scrollTo(0, 0);
    } else {
      if (hash === "#Essay2") {
        neededRef = this.essayTwoRef;
      } else if (hash === "#AdditionalInformation") {
        neededRef = this.additionalInfoRef;
      }

      let fetchedRef = await this.waitForRef(neededRef);
      window.scrollTo(0, fetchedRef.current.offsetTop);
    }
  };

  componentDidMount() {
    this.getUserData();
    this.scrollToRef();
  }

  componentWillUnmount() {
    this.updateFieldData();
  }

  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
    this.essayOneRef = React.createRef();
    this.essayTwoRef = React.createRef();
    this.additionalInfoRef = React.createRef();
  }

  state = {
    fileListCL: [],
    fileListPortfolio: [],
  };

  render() {
    return (
      <div style={{ marginTop: "40px", width: "100%" }}>
        {/**
         *
         * Spinning Wheel while information loads
         *
         */}
        {!this.state.loaded ? (
          <React.Fragment>
            <div style={{ marginBottom: "40px" }}>
              <Skeleton.Input style={{ width: "25vw" }} size="default" />
            </div>
            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            {/**
             *
             * "Save and Continue" Button
             *
             */}
            <Form.Item>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <SkeletonButton />
                <SkeletonButton />
              </div>
            </Form.Item>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1>Written Work</h1>
            <p>
              Real people are reading your application. Show them that real
              people are applying through your writing!
            </p>

            {/**
             *
             * Written Work Form
             *
             */}
            <Form
              name="pageEssays"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              align="left"
              width="100%"
              onFinish={this.onFinish}
              ref={this.formRef}
              onValuesChange={this.onValuesChange}
            >
              {/**
               *
               * Industry Response
               *
               */}
              <div ref={this.essayOneRef}>
                <Form.Item
                  key="industryEssay"
                  name="Why This Industry Essay"
                  label={this.boldify(
                    "What industries are you interested in and why?",
                    true,
                    <React.Fragment>
                      <p>
                        This is your chance to show why you are a great fit for
                        <br />
                        internships in your industries of interest.
                      </p>
                      <p>
                        Ex: If you are interested in biotechnology, you could
                        write
                        <br />
                        about why biotechnology is a career you're interested
                        in,
                        <br />
                        how your classes may have influenced your decision, or
                        <br />
                        anything else you think will be helpful for the
                        companies in
                        <br />
                        the industries you are applying to.
                      </p>
                    </React.Fragment>
                  )}
                  extra="1000 Character Limit"
                  rules={this.validationRules("response")}
                >
                  <TextArea
                    autoSize={{ minRows: 5, maxRows: 10 }}
                    maxlength={1000}
                  />
                </Form.Item>
              </div>

              {/**
               *
               * Leadership Question
               *
               */}
              <div ref={this.essayTwoRef}>
                <Form.Item
                  key="leadership"
                  name="Leadership Roles Essay"
                  label={this.boldify(
                    "What are your leadership roles in your extracurriculars and what have they taught you?",
                    true,
                    <React.Fragment>
                      <p>
                        This question aims to reveal what activities you spend
                        the most time in and the specific
                        <br />
                        skills you've learned from each one.
                      </p>
                      <p>
                        Ex: You could write about one particular activity that
                        has had a large impact on you,
                        <br />
                        several activities which have together influenced your
                        life, or how being a leader at
                        <br />
                        school can make you a better intern.{" "}
                        <em>There's no right or wrong answer.</em>
                      </p>
                    </React.Fragment>
                  )}
                  extra="1000 Character Limit"
                  rules={this.validationRules("response")}
                >
                  <TextArea
                    autoSize={{ minRows: 5, maxRows: 10 }}
                    maxlength={1000}
                  />
                </Form.Item>
              </div>

              {/**
               *
               * "Additional Information
               *
               */}
              <div ref={this.additionalInfoRef}>
                <Form.Item
                  key="extra"
                  name="Extra Essay"
                  label={this.boldify(
                    "Is there anything more about you that we should know?",
                    true,
                    <React.Fragment>
                      <p>
                        This is an open ended response area where you can write
                        <br />
                        about anything. Really.
                      </p>
                      <p>
                        If you saw want to explain a situation concerning your
                        grades
                        <br />
                        or activites, feel free to fill it in here. If there's
                        another story
                        <br />
                        or skill that you think will improve your chances, feel
                        free to
                        <br />
                        write about it. The options are limitless!
                      </p>
                    </React.Fragment>
                  )}
                  extra="1000 Character Limit"
                  rules={this.validationRules("response")}
                >
                  <TextArea
                    autoSize={{ minRows: 5, maxRows: 10 }}
                    maxlength={1000}
                  />
                </Form.Item>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                {/**
                 *
                 * Cover Letter Upload
                 *
                 */}
                <Form.Item
                  name="Cover Letter"
                  key="CoverLetter"
                  label={this.boldify(
                    "Cover Letter (Optional)",
                    true,
                    <React.Fragment>
                      <p>
                        The cover letter is completely optional, and is moreso
                        <br />
                        there in case you wanted to add more to your response
                        <br />
                        that you couldn't fit for the{" "}
                        <em>"Industries of Interest"</em>
                        <br />
                        response.
                      </p>
                      <p>
                        If you're interested in writing a cover letter, we've
                        got a
                        <br />
                        <Link to="/dashboard/apply-skills/cover-letter">
                          course module
                        </Link>{" "}
                        on writing the perfect cover letter.
                      </p>
                    </React.Fragment>
                  )}
                >
                  <Dragger
                    {...props}
                    style={{ width: "250px", height: "30px" }}
                    customRequest={this.customRequestCL}
                    onChange={this.onChangeCL}
                    fileList={this.state.fileListCL}
                  >
                    <h1 style={{ color: "#69c0ff" }}>
                      <InboxOutlined />
                    </h1>
                    <h5>Click or Drag Files to Upload Here</h5>
                  </Dragger>
                </Form.Item>

                {/**
                 *
                 * Portfolio Upload
                 *
                 */}
                <Form.Item
                  name="Portfolio"
                  key="Portfolio"
                  label={this.boldify(
                    "Portfolio (Optional)",
                    true,
                    <React.Fragment>
                      <p>
                        Your portfolio is any document/pdf/slideshow that shows
                        <br />
                        something special about you that you can't fit into the
                        <br />
                        response areas
                      </p>
                      <p>
                        Example items: class presentation, speech, research
                        paper,
                        <br />
                        art, article, essay, debate case, patent, design, etc.
                      </p>
                    </React.Fragment>
                  )}
                >
                  <Dragger
                    {...props}
                    style={{ width: "250px", height: "30px" }}
                    customRequest={this.customRequestPortfolio}
                    onChange={this.onChangePortfolio}
                    fileList={this.state.fileListPortfolio}
                  >
                    <h1 style={{ color: "#69c0ff" }}>
                      <InboxOutlined />
                    </h1>
                    <h5>Click or Drag Files to Upload Here</h5>
                  </Dragger>
                </Form.Item>
              </div>

              {/**
               *
               * "Back/Save and Continue" Buttons
               *
               */}
              <Form.Item>
                <Button
                  className="back-button"
                  type="primary"
                  htmlType="button"
                  onClick={this.backHandler}
                >
                  Previous
                </Button>
                <Button
                  className="next-button"
                  type="primary"
                  htmlType="submit"
                >
                  Save and Continue
                </Button>
              </Form.Item>
            </Form>
          </React.Fragment>
        )}
      </div>
    );
  }
  //Functions
  //THIS NEEDS TO BE FIXED ASAP!!!
  handleChange = (event) => {
    this.setState({ otherIndustry: event.target.value });
    console.log(this.state);
  };

  /**
   *
   * Requires input on form items
   *
   */
  validationRules = (inputName, type) => [
    {
      required: true,
      message: "Please input your " + inputName,
      type: type,
    },
  ];

  /**
   *
   * Updates user data when values are changes
   *
   */
  onValuesChange = () => {
    let allValues = this.formRef.current.getFieldsValue();
    delete allValues["Cover Letter"];
    delete allValues.Portfolio;

    let completedCount = 0;
    let checklist = [];
    for (var field in allValues) {
      if (allValues.hasOwnProperty(field)) {
        let item = {};
        item.key = field;
        if (
          typeof allValues[field] !== "undefined" &&
          allValues[field] !== ""
        ) {
          completedCount++;
          item.completed = true;
        } else {
          item.completed = false;
        }
        //console.log(item)
        checklist.push(item);
      }
    }
    let completionPercentage = parseFloat(
      (completedCount / Object.keys(allValues).length).toFixed(2)
    );
    if (completionPercentage !== this.props.completionState[2])
      this.props.updateCompletionState(2, completionPercentage);

    if (!_.isEqual(checklist, this.props.completionChecklist[2]))
      this.props.updateCompletionChecklist(2, checklist);
  };

  /**
   *
   * On Finish Function
   *
   */
  onFinish = (values) => {
    console.log("FinishedPageEssays:", values);
    this.props.updateCompletionState(2, 1.0);
    this.props.updateData(values, "2");
    this.routeChange("/apply/references");
  };

  updateFieldData = async () => {
    const values = await this.formRef.current.getFieldsValue();

    this.props.updateData(values, "2");
  };

  backHandler = () => {
    this.props.updateData(this.formRef.current.getFieldsValue(), "2");
    this.routeChange("/apply/personal");
  };

  /**
   *
   * Upload Cover Letter
   *
   */
  customRequestCL = ({ onSuccess, onError, file }) => {
    setTimeout(() => {
      onSuccess(file);
      const source = "CoverLetter";
      let currentFileList = this.state.fileListCL;
      currentFileList.push(file);
      this.setState({ fileListCL: currentFileList });
      this.props.uploadFile(file, source);
    }, 100);
  };

  /**
   *
   * File Upload Function
   *
   */
  onChangeCL = (info) => {
    const { status } = info.file;
    if (status === "removed") {
      let currentFileList = this.state.fileListCL;
      let index = currentFileList.indexOf(info.file);
      if (index > -1) {
        currentFileList.splice(index, 1);
      }
      this.setState({ fileListCL: currentFileList });
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }

    this.props.updateData(this.formRef.current.getFieldsValue(), "2");
  };

  /**
   *
   * Changing Portfolio?
   *
   */
  customRequestPortfolio = ({ onSuccess, onError, file }) => {
    setTimeout(() => {
      onSuccess(file);
      const source = "Portfolio";
      let currentFileList = this.state.fileListPortfolio;
      currentFileList.push(file);
      this.setState({ fileListPortfolio: currentFileList });
      this.props.uploadFile(file, source);
    }, 100);
  };

  /**
   *
   * File Upload function
   *
   */
  onChangePortfolio = (info) => {
    const { status } = info.file;
    if (status === "removed") {
      let currentFileList = this.state.fileListPortfolio;
      let index = currentFileList.indexOf(info.file);
      if (index > -1) {
        currentFileList.splice(index, 1);
      }
      this.setState({ fileListPortfolio: currentFileList });
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }

    this.props.updateData(this.formRef.current.getFieldsValue(), "2");
  };

  /**
   *
   * Get User Data
   *
   */
  getUserData = async () => {
    let token = await this.props.getJwt();
    fetch("/api/get_user_data", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(JSON.stringify(token)),
      },
      body: 2,
    })
      .then((response) => response.json())
      .then((data) => {
        let parsedRecv = JSON.parse(data);
        let parsedData = parsedRecv.formData;
        if (parsedRecv !== "No Info") {
          try {
            console.log(parsedData);
            this.setState({ loaded: true });
            this.formRef.current.setFieldsValue(parsedData);

            try {
              let fileListCL = parsedData["Cover Letter"].fileList;
              for (let i = 0; i < fileListCL.length; i++) {
                fileListCL[i].status = "done";
              }
              this.setState({ fileListCL: fileListCL });
            } catch {}
            try {
              let fileListPortfolio = parsedData.Portfolio.fileList;
              for (let i = 0; i < fileListPortfolio.length; i++) {
                fileListPortfolio[i].status = "done";
              }
              this.setState({ fileListPortfolio: fileListPortfolio });
            } catch (e) {}
          } catch (e) {}
        }
        this.setState({ loaded: true });
      });
  };

  //BOLDIFY!!!
  boldify = (text, info = false, popoverText) =>
    !info ? (
      <strong>{text}</strong>
    ) : (
      <React.Fragment>
        <strong>{text}</strong>
        <Popover style={{ width: "10px" }} title={text} content={popoverText}>
          <InfoCircle size={12} />
        </Popover>
      </React.Fragment>
    );

  /**
   *
   * Route Change (React Router)
   *
   */
  routeChange = (path) => {
    console.log(path);
    if (path === "/apply/personal") {
      this.props.clickTwo();
    } else {
      this.props.clickFour();
    }
    this.props.history.push(path);
  };
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageEssays)
);
