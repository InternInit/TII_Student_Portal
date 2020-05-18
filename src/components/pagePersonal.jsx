import React, { Component } from "react";
import {
  Form,
  Select,
  Input,
  Button,
  Checkbox,
  DatePicker,
  Radio,
  InputNumber
} from "antd";
import { Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import "../App.css";

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
const latinx = [
  "I am not Hispanic/Latino",
  "Black or African American",
  "White or Caucasian",
  "Native American/Native Alaskan",
  "Asian",
  "Native Hawaiian/Other Pacific Islander"
];
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

class PagePersonal extends Component {
  validationRules = (inputName, type) => [
    {
      required: true,
      message: "Please input your " + inputName,
      type: type
    }
  ];

  boldify = text => <strong>{text}</strong>;

  renderFields = () => {
    return <h1>Hello</h1>;
  };

  render() {
    return (
      <div style={{ width: "100%", marginTop: "50px" }}>
        <h1>General Information</h1>
        <p>
          Fill out only what your comfortable with, but understand that missing
          factors could prevent your application from getting evaluated.
        </p>
        <br />
        <Form
          name="basic"
          initialValues={{
            remember: true
          }}
          layout="vertical"
          align="left"
        >
          {/*GENDER*/}
          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item
                key="gender"
                name="gender"
                label={this.boldify("What is your gender?")}
                rules={this.validationRules("gender")}
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
                name="race"
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
                name="latinx"
                extra="Check all that apply"
              >
                <Checkbox.Group>
                  <Row>
                    {latinx.map(ethnicity => (
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

          {/*AGE*/}
          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item
                key="age"
                label={this.boldify("Age")}
                name="firstName"
                rules={this.validationRules("age")}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>

          <h1>Please Input Your Educational History</h1>

          <Form.List name="education">
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
                          name="schoolName"
                          label={this.boldify("School Name")}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={this.validationRules("gender")}
                        >
                          <Input placeholder="School name" />
                        </Form.Item>

                        {/*SCHOOL ADDRESS LINE*/}
                        <Row gutter={addressGutter}>
                          <Col span={standardSpan}>
                            <Form.Item
                              key="schoolAddress"
                              label={this.boldify("School Location")}
                              name="schoolAddress"
                              rules={this.validationRules("school's address")}
                            >
                              <Input placeholder="Address Line" />
                            </Form.Item>
                          </Col>
                        </Row>

                        {/*SCHOOL ADDRESS CONT'D (CITY, STATE, ZIPCODE)*/}
                        <Row gutter={addressGutter}>
                          <Col span={thirdSpan}>
                            <Form.Item
                              key="city"
                              name="city"
                              rules={this.validationRules("city")}
                            >
                              <Input placeholder="City" />
                            </Form.Item>
                          </Col>
                          <Col span={thirdSpan}>
                            <Form.Item
                              key="state"
                              name="state"
                              rules={this.validationRules("state")}
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
                              key="zip"
                              name="zip"
                              rules={this.validationRules("zip code")}
                            >
                              <Input placeholder="Zip Code" />
                            </Form.Item>
                          </Col>
                        </Row>

                        {/*COURSE CONCENTRATION AND YEARS COMPLETED*/}
                        <Row gutter={formGutter}>
                          <Col span={halfSpan}>
                            <Form.Item
                              key="courseConcentration"
                              label={this.boldify("Course Concentration")}
                              name="courseConcentration"
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
                              key="yearsCompleted"
                              label={this.boldify("Years Completed")}
                              name="yearsCompleted"
                              rules={this.validationRules("years completed")}
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
                      type="primary"
                      size="large"
                      onClick={() => {
                        add();
                      }}
                      style={{ width: "20%", marginTop: "30px" }}
                    >
                      <PlusOutlined /> Add School
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
        </Form>
      </div>
    );
  }
}

export default PagePersonal;
