import React, { Component } from "react";
import {
  Form,
  Select,
  Input,
  Button,
  Checkbox,
  Radio,
  InputNumber,
  Spin,
  Popover,
  Skeleton,
} from "antd";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { InfoCircle } from "./StyledComponents/InternshipForms";
import { GoX } from "react-icons/go";

import "antd/dist/antd.css";
import "../App.scss";

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
const { Option } = Select;

//Formatting
const formGutter = [16, 16];
const addressGutter = [16, 0];
const standardSpan = 24;
const halfSpan = standardSpan / 2;
const thirdSpan = standardSpan / 3;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 24, offset: 0 },
  },
};

//items
const genders = ["Male", "Female", "Prefer Not to Say", "Other"];
const race = [
  "Caucasian",
  "African American",
  "Middle Eastern",
  "Native American/Native Alaskan",
  "Asian",
  "Native Hawaiian/Other Pacific Islander",
];
const latinx = ["Yes, I AM Hispanic/Latinx", "No, I am NOT Hispanic/Latinx"];
const allStates = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

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

class PagePersonal extends Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
    this.eduRef = React.createRef();
  }

  state = {
    loaded: false,
    value: "",
  };

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
   * Requires Form to be filled
   *
   */
  validationRules = (required, inputName, type, pattern, min, max) => [
    {
      required: required,
      message: "Please enter a valid " + inputName,
      type: type,
      pattern: pattern,
      min: min,
      max: max,
    },
  ];

  /**Makes Text Bold */

  formRef = React.createRef();

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
    if (hash === "" || hash === "#PersonalInformation") {
      window.scrollTo(0, 0);
    } else {
      if (hash === "#Education") {
        neededRef = this.eduRef;
      }

      let fetchedRef = await this.waitForRef(neededRef);
      window.scrollTo(0, fetchedRef.current.offsetTop);
    }
  };

  onCheckChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  componentDidMount() {
    this.getUserData();
    this.scrollToRef();
  }

  componentWillUnmount() {
    this.updateFieldData();
  }

  render() {
    return (
      <div style={{ width: "100%", marginTop: "40px" }}>
        {/**
         *
         * Loading wheel while information is being pulled from backend
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
              <Col span={halfSpan}></Col>
              <Col span={halfSpan}></Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={halfSpan}></Col>
              <Col span={halfSpan}></Col>

              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={halfSpan}></Col>
              <Col span={halfSpan}></Col>

              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Col span={halfSpan}></Col>
                <Col span={halfSpan}></Col>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>

              <Col span={standardSpan}>
                <Col span={halfSpan}></Col>
                <Col span={halfSpan}></Col>

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
            <h1 className="apply-header twentyEightFont">
              Personal Information
            </h1>
            <br />
            {/**
             *
             * Only Fill out What you feel confortable filling out
             *
             */}
            <p style={{ paddingBottom: "24px", marginTop: "-12px" }}>
              Fill out only what you're comfortable with, but understand that
              missing factors could weaken your application.
            </p>

            <Form
              name="pagePersonal"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              align="left"
              onFinish={this.onFinish}
              ref={this.formRef}
              onValuesChange={this.onValuesChange}
            >
              {/**
               *
               * Enter Gender Form
               *
               */}
              <Row gutter={formGutter}>
                <Col span={standardSpan}>
                  <Form.Item
                    key="gender"
                    name="Gender"
                    label={this.boldify(
                      "What is your gender?",
                      true,
                      <React.Fragment>
                        What gender do you identify as?
                        <br />
                        <br /> You do not have to answer if you do not want to.
                      </React.Fragment>
                    )}
                    rules={this.validationRules(true, "gender")}
                    style={{ textAlign: "left" }}
                  >
                    <Radio.Group
                      onChange={this.onCheckChange}
                      className="universal-left radio-styling"
                    >
                      {genders.map((gender) =>
                        gender !== "Other" ? (
                          <Radio key={gender} value={gender}>
                            {gender}
                          </Radio>
                        ) : (
                          <Radio key={gender} value={gender}>
                            {gender}
                            {this.state.value === "Other" ? (
                              <Input
                                size="small"
                                style={{ width: 100, marginLeft: 10 }}
                              />
                            ) : null}
                          </Radio>
                        )
                      )}
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              {/**
               *
               * Enter Race/Ethnicity
               *
               */}
              <Row gutter={formGutter}>
                <Col span={standardSpan}>
                  <Form.Item
                    key="race"
                    label={this.boldify(
                      "Race/Ethnicity",
                      true,
                      <React.Fragment>
                        You do not have to answer this question, but this
                        information <br />
                        could be usefule for preventing discrimation in the
                        hiring process.
                      </React.Fragment>
                    )}
                    name="Race"
                    extra="Check all that apply"
                    style={{ textAlign: "left" }}
                  >
                    <Checkbox.Group>
                      <Row gutter={[64, 0]}>
                        {race.map((ethnicity) => (
                          <Col className="universal-left" span={12}>
                            <Checkbox
                              value={ethnicity}
                              style={{
                                lineHeight: "32px",
                              }}
                            >
                              {ethnicity}
                            </Checkbox>
                          </Col>
                        ))}
                      </Row>
                    </Checkbox.Group>
                  </Form.Item>
                </Col>
              </Row>

              {/**
               *
               * Enter Latina/X
               *
               */}
              <Row gutter={formGutter}>
                <Col span={standardSpan} className="universal-left">
                  <Form.Item
                    key="latinx"
                    label={this.boldify(
                      "If you are Hispanic/Latinx",
                      true,
                      <React.Fragment>
                        You do not have to answer this question, but this
                        information <br />
                        could be usefule for preventing discrimation in the
                        hiring process.
                      </React.Fragment>
                    )}
                    name="Is Latinx"
                  >
                    <Checkbox.Group>
                      {latinx.map((ethnicity) => (
                        <Row>
                          <Checkbox
                            value={ethnicity}
                            style={{
                              lineHeight: "32px",
                            }}
                          >
                            {ethnicity}
                          </Checkbox>
                        </Row>
                      ))}
                    </Checkbox.Group>
                  </Form.Item>
                </Col>
              </Row>

              {/**
               *
               * Enter Age Form
               *
               */}
              <Row gutter={formGutter}>
                <Col span={standardSpan}>
                  <Form.Item
                    key="age"
                    label={this.boldify("Age")}
                    name="Age"
                    rules={this.validationRules(
                      true,
                      "age",
                      "number",
                      null,
                      0,
                      100
                    )}
                  >
                    <InputNumber style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
              </Row>

              {/**
               *
               * Education History
               *
               */}
              <h1 className="apply-header twentyFourFont" ref={this.eduRef}>
                Please Input Your Educational History
              </h1>

              {/**
               *
               * School Box
               *
               */}
              <Form.List name="Education">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      <QueueAnim>
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
                                  School {index + 1}
                                </h2>
                              </Row>

                              {/**
                               *
                               * School Name
                               *
                               */}
                              <Form.Item
                                {...field}
                                key={[field.fieldKey, "schoolName"]}
                                name={[field.name, "Name"]}
                                label={this.boldify("School Name")}
                                validateTrigger={["onChange", "onBlur"]}
                                rules={this.validationRules(
                                  true,
                                  "school name",
                                  "string"
                                )}
                              >
                                <Input placeholder="School name" />
                              </Form.Item>

                              {/**
                               *
                               * School Addresss Line
                               *
                               */}
                              <Row gutter={addressGutter}>
                                <Col span={standardSpan}>
                                  <Form.Item
                                    key={[field.fieldKey, "schoolAddress"]}
                                    label={this.boldify("School Location")}
                                    name={[field.name, "Address"]}
                                    rules={this.validationRules(
                                      true,
                                      "address",
                                      "string",
                                      /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/
                                    )}
                                  >
                                    <Input placeholder="Address Line" />
                                  </Form.Item>
                                </Col>
                              </Row>

                              {/**
                               *
                               * School Address (CITY, STATE, ZIP)
                               *
                               */}
                              <Row gutter={addressGutter}>
                                <Col span={thirdSpan}>
                                  <Form.Item
                                    key={[field.fieldKey, "city"]}
                                    name={[field.name, "City"]}
                                    rules={this.validationRules(
                                      true,
                                      "city",
                                      "string",
                                      /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
                                    )}
                                  >
                                    <Input placeholder="City" />
                                  </Form.Item>
                                </Col>
                                <Col span={thirdSpan}>
                                  <Form.Item
                                    key={[field.fieldKey, "state"]}
                                    name={[field.name, "State"]}
                                    rules={this.validationRules(true, "state")}
                                  >
                                    <Select
                                      placeholder="State"
                                      style={{ textAlign: "left" }}
                                    >
                                      {allStates.map((state) => (
                                        <Option key={state} value={state}>
                                          {state}
                                        </Option>
                                      ))}
                                    </Select>
                                  </Form.Item>
                                </Col>
                                <Col span={thirdSpan}>
                                  <Form.Item
                                    key={[field.fieldKey, "zip"]}
                                    name={[field.name, "Zip Code"]}
                                    rules={this.validationRules(
                                      true,
                                      "zip code",
                                      "string",
                                      /^\d{5}$/
                                    )}
                                  >
                                    <Input placeholder="Zip Code" />
                                  </Form.Item>
                                </Col>
                              </Row>

                              {/**
                               *
                               * Course Concentration
                               *
                               */}
                              <Row gutter={formGutter}>
                                <Col span={halfSpan}>
                                  <Form.Item
                                    key={[
                                      field.fieldKey,
                                      "courseConcentration",
                                    ]}
                                    label={this.boldify(
                                      "Course Interests",
                                      true,
                                      <React.Fragment>
                                        What subjects did you focus on at this
                                        school?
                                        <br />
                                        <br />
                                        Ex: If I took multiple STEM courses at
                                        this school,
                                        <br /> I would include subjects like{" "}
                                        <em>Chemistry, Biology,</em> etc.
                                      </React.Fragment>
                                    )}
                                    name={[field.name, "Course Concentration"]}
                                    rules={this.validationRules(
                                      true,
                                      "course",
                                      "string"
                                    )}
                                    small="What is the thesis of your high shool career?"
                                  >
                                    <Input placeholder="(e.g.) Finance, Biology, etc." />
                                  </Form.Item>
                                </Col>
                                <Col span={halfSpan}>
                                  <Form.Item
                                    key={[field.fieldKey, "yearsCompleted"]}
                                    label={this.boldify(
                                      "Years Completed",
                                      true,
                                      <React.Fragment>
                                        The number of years you spend at a
                                        school gives
                                        <br /> companies a time reference for
                                        your course concentration.
                                      </React.Fragment>
                                    )}
                                    name={[field.name, "Years Completed"]}
                                    rules={this.validationRules(
                                      true,
                                      "number of years",
                                      "string",
                                      /^\d{1,3}$/
                                    )}
                                  >
                                    <Input />
                                  </Form.Item>
                                </Col>
                              </Row>
                            </Form.Item>
                          </div>
                        ))}
                      </QueueAnim>

                      {/**
                       *
                       * Add School Button
                       *
                       */}
                      <Form.Item>
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
                          <PlusOutlined /> Add School
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>

              {/**
               *
               * Previous/Save Buttons
               *
               */}
              <Form.Item>
                <Button
                  className="back-button"
                  type="primary"
                  htmlType="button"
                  onClick={this.backHandler}
                >
                  <Link to="/apply/internship-info">Previous</Link>
                </Button>
                <Button
                  className="next-button"
                  type="primary"
                  htmlType="submit"
                >
                  <Link to="/apply/written-work">Save and Continue</Link>
                </Button>
              </Form.Item>
            </Form>
          </React.Fragment>
        )}
      </div>
    );
  }

  /**
   *
   * Updates user data when values are changes
   *
   */
  onValuesChange = () => {
    let allValues = this.formRef.current.getFieldsValue();
    delete allValues["Is Latinx"];
    delete allValues.Race;

    let completedCount = 0;
    let checklist = [];
    for (var field in allValues) {
      if (allValues.hasOwnProperty(field)) {
        let item = {};
        item.key = field;
        if (
          typeof allValues[field] !== "undefined" &&
          allValues[field] !== null &&
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
    if (completionPercentage !== this.props.completionState[1])
      this.props.updateCompletionState(1, completionPercentage);

    if (!_.isEqual(checklist, this.props.completionChecklist[1]))
      this.props.updateCompletionChecklist(1, checklist);
  };

  /**
   *
   * Handles form application completion
   *
   */
  onFinish = (values) => {
    console.log("FinishedPersonalPage:", values);
    this.props.updateCompletionState(1, 1.0);
    this.props.updateData(values, "1");
  };

  updateFieldData = async () => {
    const values = await this.formRef.current.getFieldsValue();

    this.props.updateData(values, "1");
  };

  /**
   *
   * Handles "Back" Button
   *
   */
  backHandler = () => {
    this.props.updateData(this.formRef.current.getFieldsValue(), "1");
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
      body: 1,
    })
      .then((response) => response.json())
      .then((data) => {
        let parsedRecv = JSON.parse(data);
        let parsedData = parsedRecv.formData;
        if (parsedRecv !== "No Info") {
          this.setState({ loaded: true });
          this.formRef.current.setFieldsValue(parsedData);
        }
        this.setState({ loaded: true });
      });
  };

  /**
   *
   * Changes Route (React Router)
   *
   */
  routeChange = (path) => {
    console.log(path);
    if (path === "/apply/written-work") {
      this.props.clickThree();
    } else {
      this.props.clickOne();
    }
    this.props.history.push(path);
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PagePersonal)
);
