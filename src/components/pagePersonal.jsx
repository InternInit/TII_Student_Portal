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

import "antd/dist/antd.css";
import "../App.css";

//Object Destructuring
const { Option } = Select;
const { MonthPicker, RangePicker } = DatePicker;

//Formatting
const formGutter = [16, 16];
const standardSpan = 24;
const halfSpan = standardSpan / 2;
const thirdSpan = standardSpan / 3;
const quarterSpan = standardSpan / 4;

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
        <Form
          name="basic"
          initialValues={{
            remember: true
          }}
          layout="vertical"
          align="left"
        >
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

          <h1>
            <strong>Please Input Your Educational History</strong>
          </h1>
          <Button type="primary" size="large" onClick={this.renderFields}>
            Add School
          </Button>
        </Form>
      </div>
    );
  }
}

export default PagePersonal;
