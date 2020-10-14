import React, { Component } from "react";
import {
  Form,
  Select,
  Input,
  Button,
  DatePicker,
  Radio,
  Upload,
  message,
  Spin,
  Popover,
  Skeleton,
  Grid,
  Space,
  InputNumber,
} from "antd";
import { Row, Col } from "antd";
import {
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { InfoCircle } from "./StyledComponents/InternshipForms";
import { GoX } from "react-icons/go";

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
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Dragger } = Upload;
const { useBreakpoint } = Grid;
const { TextArea } = Input;

//Formatting
const formGutter = [16, 4];
const standardSpan = 24;
const halfSpan = standardSpan / 2;
const thirdSpan = standardSpan / 3;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 24, offset: 0 },
  },
};

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

class PageExtracurricularsClasses extends Component {
  render() {
    return (
      <div style={{ width: "100%", marginTop: "40px" }}>
        <h1 className="apply-header twentyEightFont">Activities and Classes</h1>
        <Form layout="vertical" align="left">
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
}

const Extracurriculars = (props) => {
  return (
    <React.Fragment>
      <Form.List name="extracurriculars" key="extracurriculars">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <div className="educationBox" key={field.key}>
                  <Form.Item
                    required={false}
                    key={field.key}
                    style={{marginBottom: "0px"}}
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
                          name={[field.name, "activityType"]}
                          fieldKey={[field.fieldKey, "activityType"]}
                          label={boldify("Activity Type")}
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
                          name={[field.name, "years-involved"]}
                          fieldKey={[field.fieldKey, "years-involved"]}
                          label={boldify("Years Involved")}
                        >
                          <InputNumber style={{ width: "100%" }} />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          {...field}
                          name={[field.name, "position"]}
                          fieldKey={[field.fieldKey, "position"]}
                          label={boldify("Position/Title")}
                        >
                          <Input placeholder="Position" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={formGutter} style={{ width: "100%" }}>
                      <Col span={24}>
                        <Form.Item
                          {...field}
                          name={[field.name, "description"]}
                          fieldKey={[field.fieldKey, "description"]}
                          label={boldify("Activity Description")}
                          extra="150 characters"
                        >
                          <TextArea
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
      <Form.List name="courses" key="courses">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <div className="educationBox" key={field.key}>
                  <Form.Item
                    required={false}
                    key={field.key}
                    style={{marginBottom: "0px"}}
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
                          name={[field.name, "courseLevel"]}
                          fieldKey={[field.fieldKey, "courseLevel"]}
                          label={boldify("Course Level")}
                        >
                          <Select
                            showSearch
                            placeholder="Level"
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
                      <Col span={18}>
                        <Form.Item
                          {...field}
                          name={[field.name, "position"]}
                          fieldKey={[field.fieldKey, "position"]}
                          label={boldify("Course Title")}
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
            </div>
          );
        }}
      </Form.List>
    </React.Fragment>
  );
};

export default withRouter(PageExtracurricularsClasses);
