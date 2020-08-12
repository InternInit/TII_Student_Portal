import React, { Component } from "react";
import {
  Form,
  Select,
  Input,
  Button,
  Checkbox,
  DatePicker,
  Radio,
  InputNumber,
  Spin
} from "antd";
import { Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import "../App.css";

import moment from "moment";

//React Routing
import { BrowserRouter as Router, Link } from "react-router-dom";
import { withRouter } from "react-router";

//Redux
import { connect } from "react-redux";
import {
  updateCompletionState,
  updateCompletionChecklist
} from "../redux/actions";

import _ from "lodash";

//Object Destructuring
const { Option } = Select;
const { MonthPicker, RangePicker } = DatePicker;

//Formatting
const formGutter = [16, 16];
const addressGutter = [16, 0];
const standardSpan = 24;
const halfSpan = standardSpan / 2;
const thirdSpan = standardSpan / 3;
const quarterSpan = standardSpan / 4;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  }
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 24, offset: 0 }
  }
};

//items
const genders = ["Male", "Female", "Prefer Not to Say"];
const race = [
  "Caucasian",
  "African American",
  "Middle Eastern",
  "Native American/Native Alaskan",
  "Asian",
  "Native Hawaiian/Other Pacific Islander"
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
  "Wyoming"
];

const mapStateToProps = state => {
  return {
    completionState: state.completionState,
    completionChecklist: state.completionChecklist
  };
};

const mapDispatchToProps = {
  updateCompletionState,
  updateCompletionChecklist
};

class PagePersonal extends Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }

  state = {
    loaded: false
  };

  validationRules = (required, inputName, type, pattern, min, max) => [
    {
      required: required,
      message: "Please input your " + inputName,
      type: type,
      pattern: pattern,
      min: min,
      max: max
    }
  ];

  boldify = text => <strong>{text}</strong>;

  renderFields = () => {
    return <h1>Hello</h1>;
  };

  formRef = React.createRef();

  componentDidMount() {
    this.getUserData();
  }

  componentWillUnmount() {
    this.updateFieldData();
  }

  render() {
    return (
      <div style={{ width: "100%", marginTop: "40px" }}>
        <Spin size="large" spinning={!this.state.loaded}>
          <h1>General Information</h1>

          <br />
          <Form
            name="pagePersonal"
            initialValues={{
              remember: true
            }}
            layout="vertical"
            align="left"
            onFinish={this.onFinish}
            ref={this.formRef}
            onValuesChange={this.onValuesChange}
          >
            {/*GENDER*/}
            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Form.Item
                  key="gender"
                  name="Gender"
                  label={this.boldify("What is your gender?")}
                  rules={this.validationRules(true, "gender")}
                >
                  <Radio.Group>
                    {genders.map(gender => (
                      <Radio key={gender} value={gender}>
                        {gender}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>

            {/*RACE/ETHNICITY*/}
            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Form.Item
                  key="race"
                  label={this.boldify("Race/Ethnicity")}
                  name="Race"
                  extra="Check all that apply"
                >
                  <Checkbox.Group>
                    <Row>
                      {race.map(ethnicity => (
                        <Col span={halfSpan}>
                          <Checkbox
                            value={ethnicity}
                            style={{
                              lineHeight: "32px"
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

            {/*HISPANIC/LATINX*/}
            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Form.Item
                  key="latinx"
                  label={this.boldify("If you are Hispanic/Latinx")}
                  name="Is Latinx"
                >
                  <Checkbox.Group>
                    {latinx.map(ethnicity => (
                      <Col>
                        <Checkbox
                          value={ethnicity}
                          style={{
                            lineHeight: "32px"
                          }}
                        >
                          {ethnicity}
                        </Checkbox>
                      </Col>
                    ))}
                  </Checkbox.Group>
                </Form.Item>
              </Col>
            </Row>

            {/*AGE*/}
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
            <p style={{ paddingBottom: "24px", marginTop: "-12px" }}>
              Fill out only what you're comfortable with, but understand that
              missing factors could weaken your application.
            </p>
            <h1>Please Input Your Educational History</h1>

            <Form.List name="Education">
              {(fields, { add, remove }) => {
                return (
                  <div>
                    {fields.map((field, index) => (
                      <div className="educationBox">
                        <Form.Item
                          {...(index === 0
                            ? formItemLayout
                            : formItemLayoutWithOutLabel)}
                          required={false}
                          key={field.key}
                        >
                          {fields.length > 1 ? (
                            <MinusCircleOutlined
                              className="dynamic-delete-button"
                              style={{
                                fontSize: "18px",
                                padding: "0 8px 0 0"
                              }}
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          ) : null}

                          <h2>School {index + 1}</h2>

                          {/*SCHOOL NAME*/}
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

                          {/*SCHOOL ADDRESS LINE*/}
                          <Row gutter={addressGutter}>
                            <Col span={standardSpan}>
                              <Form.Item
                                key={[field.fieldKey, "schoolAddress"]}
                                label={this.boldify("School Location")}
                                name={[field.name, "Address"]}
                                rules={this.validationRules(
                                  true,
                                  "school's address",
                                  "string",
                                  /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/
                                )}
                              >
                                <Input placeholder="Address Line" />
                              </Form.Item>
                            </Col>
                          </Row>

                          {/*SCHOOL ADDRESS CONT'D (CITY, STATE, ZIPCODE)*/}
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
                                <Select placeholder="State">
                                  {allStates.map(state => (
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

                          {/*COURSE CONCENTRATION AND YEARS COMPLETED*/}
                          <Row gutter={formGutter}>
                            <Col span={halfSpan}>
                              <Form.Item
                                key={[field.fieldKey, "courseConcentration"]}
                                label={this.boldify("Course Concentration")}
                                name={[field.name, "Course Concentration"]}
                                rules={this.validationRules(
                                  "course concentration"
                                )}
                                small="What is the thesis of your high shool career?"
                              >
                                <Input placeholder="(e.g.) Finance, Biology, etc." />
                              </Form.Item>
                            </Col>
                            <Col span={halfSpan}>
                              <Form.Item
                                key={[field.fieldKey, "yearsCompleted"]}
                                label={this.boldify("Years Completed")}
                                name={[field.name, "Years Completed"]}
                                rules={this.validationRules(
                                  true,
                                  "years completed",
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
                          marginBottom: "30px"
                        }}
                      >
                        <PlusOutlined /> Add School
                      </Button>
                    </Form.Item>
                  </div>
                );
              }}
            </Form.List>

            <Form.Item>
              <Button
                className="back-button"
                type="primary"
                htmlType="button"
                onClick={this.backHandler}
              >
                Previous
              </Button>
              <Button className="next-button" type="primary" htmlType="submit">
                Save and Continue
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    );
  }

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
    if (completionPercentage != this.props.completionState[1])
      this.props.updateCompletionState(1, completionPercentage);

    if (!_.isEqual(checklist, this.props.completionChecklist[1]))
      this.props.updateCompletionChecklist(1, checklist);
  };

  onFinish = values => {
    console.log("FinishedPersonalPage:", values);
    this.props.updateCompletionState(1, 1.0);
    this.props.updateData(values, "1");
    this.routeChange("/apply/written-work");
  };

  updateFieldData = async () => {
    const values = await this.formRef.current.getFieldsValue();

    this.props.updateData(values, "1");
  };

  backHandler = () => {
    this.props.updateData(this.formRef.current.getFieldsValue(), "1");
    this.routeChange("/apply/internship-info");
  };

  getUserData = async () => {
    let token = await this.props.getJwt();
    fetch("/api/get_user_data", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(JSON.stringify(token))
      },
      body: 1
    })
      .then(response => response.json())
      .then(data => {
        let parsedRecv = JSON.parse(data);
        let parsedData = parsedRecv.formData;
        if (parsedData !== "No Info") {
          this.setState({ loaded: true });
          this.formRef.current.setFieldsValue(parsedData);
        }
        this.setState({ loaded: true });
      });
  };

  routeChange = path => {
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PagePersonal)
);
