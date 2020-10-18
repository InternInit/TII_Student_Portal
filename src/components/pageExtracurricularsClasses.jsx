import React, { Component } from "react";
import {
  Form,
  Select,
  Input,
  Button,
  Popover,
  Skeleton,
  Grid,
  Space,
  InputNumber,
} from "antd";
import { Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { InfoCircle } from "./StyledComponents/InternshipForms";
import { GoX } from "react-icons/go";
import QueueAnim from "rc-queue-anim";

import "../App.scss";

//Stream related

import moment from "moment";

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
import SkeletonInput from "antd/lib/skeleton/Input";
import SkeletonButton from "antd/lib/skeleton/Button";
import SkeletonImage from "antd/lib/skeleton/Image";

//Object Destructuring
const { useBreakpoint } = Grid;

//Formatting
const formGutter = [16, 4];

//items
const activityCategories = [
  "Academic",
  "Art",
  "Athletics-Club",
  "Athletics",
  "Career-Oriented",
  "Community Service",
  "Technology",
  "Cultural",
  "Dance",
  "Debate and Speech",
  "Environmental",
  "Family Responsibilities",
  "Foreign Exchange",
  "Journalism or Publication",
  "Junior R.O.T.C.",
  "LGBT",
  "Music-Instrumental",
  "Music-Vocal",
  "Religious",
  "Research",
  "Robotics",
  "School Spirit",
  "Science or Math",
  "Student Govt or Politics",
  "Theater or Drama",
  "Work (paid)",
  "Other Club/Activity",
];

const courseLevels = [
  "College Prep",
  "Standard",
  "Accelerated",
  "Advanced",
  "AP",
  "IB",
  "Enriched",
  "Gifted",
  "Honors",
  "High Honors",
  "College Level",
  "Other",
];

//Validation Rules (Required questions)
const validationRules = (required, inputName, type, pattern) => [
  {
    required: required,
    message: "Please enter a valid " + inputName,
    type: type,
    pattern: pattern,
  },
];

//The best function to exist within this app
const boldify = (text, info = false, popoverText) =>
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

  const formItemProps = {
    totalForm: {
      layout: "vertical",
      align: "left",
      className: "pageReferences",
    },
    inputField: function (
      required,
      field,
      label,
      name,
      validationType,
      pattern,
      popoverText,
      showPopOver
    ) {
      return {
        key: [field.fieldKey, name],
        label: boldify(label, showPopOver, popoverText),
        name: [field.name, name],
        rules: validationRules(
          required,
          label,
          validationType ? validationType : "string",
          pattern
        ),
      };
    },
    addButton: {
      type: "dashed",
      size: "large",
      style: { width: "100%", marginTop: "10px", marginBottom: "30px" },
    },
  };

const mapStateToProps = (state) => {
  return {
    completionState: state.completionState,
    completionChecklist: state.completionChecklist,
  };
};

const mapDispatchToProps = {
  updateCompletionState,
  updateCompletionChecklist,
};

class PageExtracurricularsClasses extends Component {
  formRef = React.createRef();

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getUserData();
  }

  componentWillUnmount() {
    this.updateFieldData();
  }

  render() {
    return (
      <div style={{ width: "100%", marginTop: "40px" }}>
        <h1 className="apply-header twentyEightFont">Activities and Classes</h1>
        <Form
          layout="vertical"
          align="left"
          ref={this.formRef}
          onValuesChange={this.onValuesChange}
          onFinish={this.onFinish}
        >
          <h1 className="apply-header twentyFourFont universal-left mt-2">
            Activities
          </h1>
          <p className="mb-3" style={{ marginTop: "-12px" }}>
            Your extracurricular activities show employers how you spend your
            time outside of the classroom and what your interests are. These
            activities can show a business why you are particularly qualified
            for their specific internship position.
          </p>

          <Extracurriculars />

          <h1 className="apply-header twentyFourFont universal-left mt-1">
            Classes
          </h1>
          <p className="mb-3" style={{ marginTop: "-12px" }}>
            Relevant courses are any courses you've taken which you think are
            helpful for your application to a specific position or industry.
            Only list the classes which you have taken recently or are{" "}
            <em>specifically</em> relevant to your industries of interest.
          </p>

          <Courses />

          <Form.Item>
            <Button className="back-button" type="primary" htmlType="button">
              <Link to="/apply/written-work">Previous</Link>
            </Button>
            <Button className="next-button" type="primary" htmlType="submit">
              <Link to="/apply/references">Save and Continue</Link>
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  onValuesChange = () => {
    let allValues = this.formRef.current.getFieldsValue();

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
        //console.log(item);
        checklist.push(item);
      }
    }
    let completionPercentage = parseFloat(
      (completedCount / Object.keys(allValues).length).toFixed(2)
    );
    if (completionPercentage !== this.props.completionState[3])
      this.props.updateCompletionState(3, completionPercentage);

    if (!_.isEqual(checklist, this.props.completionChecklist[3]))
      this.props.updateCompletionChecklist(3, checklist);
  };

  updateFieldData = async () => {
    const values = await this.formRef.current.getFieldsValue();
    console.log(values);
    this.props.updateData(values, "3");
  };

  onFinish = (values) => {
    console.log("FinishECPage:", values);
    this.props.updateCompletionState(3, 1.0);
    this.props.updateData(values, "3");
  };

  getUserData = async () => {
    let token = await this.props.getJwt();
    fetch("/api/get_user_data", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(JSON.stringify(token)),
      },
      body: 3,
    })
      .then((response) => response.json())
      .then((data) => {
        let parsedRecv = JSON.parse(data);
        let parsedData = parsedRecv.formData;
        if (parsedRecv !== "No Info") {
          try {
            this.setState({ loaded: true });
            console.log(parsedData);
            this.formRef.current.setFieldsValue(parsedData);
          } catch (e) {}
        }
        this.setState({ loaded: true });
      });
  };
}

const Extracurriculars = (props) => {
  return (
    <React.Fragment>
      <Form.List name="Extracurriculars" key="extracurriculars">
        {(fields, { add, remove }) => {
          return (
            <div>
              <QueueAnim>
                {fields.map((field, index) => (
                  <div className="educationBox" key={field.key}>
                    <Form.Item
                      required={false}
                      key={field.key}
                      style={{ marginBottom: "0px" }}
                    >
                      <Row>
                        {fields.length > 1 ? (
                          <div className="education-box-remove-button">
                            <GoX
                              size={22}
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          </div>
                        ) : null}
                        <h2 className="application-box-heading twentyTwoFont">
                          Activity {index + 1}
                        </h2>
                      </Row>
                      <Row gutter={formGutter} style={{ width: "100%" }}>
                        <Col span={6}>
                          <Form.Item
                            {...field}
                            className="universal-left"
                            name={[field.name, "Activity Type"]}
                            fieldKey={[field.fieldKey, "activityType"]}
                            label={boldify("Activity Type")}
                            {...formItemProps.inputField(
                              true,
                              field,
                              "Activity Type",
                              "activityType"
                            )}
                          >
                            <Select
                              showSearch
                              placeholder="Category"
                              optionFilterProp="children"
                              style={{ textAlign: "left" }}
                            >
                              {activityCategories.map((category) => (
                                <option
                                  key={category}
                                  value={category}
                                  style={{ wordWrap: "break-word" }}
                                >
                                  {category}
                                </option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col span={6}>
                          <Form.Item
                            {...field}
                            className="universal-left"
                            name={[field.name, "Years Involved"]}
                            fieldKey={[field.fieldKey, "yearsInvolved"]}
                            label={boldify("Years Involved")}
                            {...formItemProps.inputField(
                              true,
                              field,
                              "Years Involved",
                              "yearsInvolved",
                              "number",
                              null
                            )}
                          >
                            <InputNumber style={{ width: "100%" }} />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                            {...field}
                            name={[field.name, "Position/Title"]}
                            fieldKey={[field.fieldKey, "position"]}
                            label={boldify("Position/Title")}
                            {...formItemProps.inputField(
                              true,
                              field,
                              "Position/Title",
                              "Position/Title"
                            )}
                          >
                            <Input placeholder="Position" />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={formGutter} style={{ width: "100%" }}>
                        <Col span={24}>
                          <Form.Item
                            {...field}
                            name={[field.name, "Description"]}
                            fieldKey={[field.fieldKey, "description"]}
                            label={boldify("Activity Description")}
                            extra="150 characters"
                          >
                            <Input.TextArea
                              placeholder="Activity Description"
                              autoSize={{ minRows: 2, maxRows: 4 }}
                              maxlength={150}
                              className="universal-left"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form.Item>
                  </div>
                ))}

                {/**
                 *
                 * Add Field Button
                 *
                 */}
                <Form.Item style={{ width: "100%" }}>
                  <Button
                    type="dashed"
                    size="large"
                    onClick={() => {
                      add();
                    }}
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      marginBottom: "30px",
                    }}
                  >
                    <PlusOutlined /> Add Activity
                  </Button>
                </Form.Item>
              </QueueAnim>
            </div>
          );
        }}
      </Form.List>
    </React.Fragment>
  );
};

const Courses = (props) => {
  return (
    <React.Fragment>
      <Form.List name="Courses" key="courses">
        {(fields, { add, remove }) => {
          return (
            <div>
              <QueueAnim>
                {fields.map((field, index) => (
                  <div className="educationBox" key={field.key}>
                    <Form.Item
                      required={false}
                      key={field.key}
                      style={{ marginBottom: "0px" }}
                    >
                      <Row>
                        {fields.length > 1 ? (
                          <div className="education-box-remove-button">
                            <GoX
                              size={22}
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          </div>
                        ) : null}
                        <h2 className="application-box-heading twentyTwoFont">
                          Class {index + 1}
                        </h2>
                      </Row>
                      <Row gutter={formGutter} style={{ width: "100%" }}>
                        <Col span={6}>
                          <Form.Item
                            {...field}
                            className="universal-left"
                            name={[field.name, "Course Level"]}
                            fieldKey={[field.fieldKey, "courseLevel"]}
                            label={boldify("Course Level")}
                            {...formItemProps.inputField(
                              true,
                              field,
                              "Course Level",
                              "courseLevel"
                            )}
                          >
                            <Select
                              showSearch
                              placeholder="Level"
                              optionFilterProp="children"
                              style={{ textAlign: "left" }}
                            >
                              {courseLevels.map((category) => (
                                <option
                                  key={category}
                                  value={category}
                                  style={{ wordWrap: "break-word" }}
                                >
                                  {category}
                                </option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col span={18}>
                          <Form.Item
                            {...field}
                            name={[field.name, "courseTitle"]}
                            fieldKey={[field.fieldKey, "courseTitle"]}
                            label={boldify("Course Title")}
                            {...formItemProps.inputField(
                              true,
                              field,
                              "Course Title",
                              "courseTitle"
                            )}
                          >
                            <Input placeholder="Course Title" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form.Item>
                  </div>
                ))}

                {/**
                 *
                 * Add Field Button
                 *
                 */}
                <Form.Item style={{ width: "100%" }}>
                  <Button
                    type="dashed"
                    size="large"
                    onClick={() => {
                      add();
                    }}
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      marginBottom: "30px",
                    }}
                  >
                    <PlusOutlined /> Add Class
                  </Button>
                </Form.Item>
              </QueueAnim>
            </div>
          );
        }}
      </Form.List>
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageExtracurricularsClasses)
);
