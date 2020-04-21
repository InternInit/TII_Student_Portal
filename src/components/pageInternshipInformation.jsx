import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Row, Col } from "antd";

import "antd/dist/antd.css";
import "/Users/hongzhenzhang/Desktop/2019-2020/Extracurriculars/TII/TII-app/src/App.css";

const formGutter = [16, 16];
const standardSpan = 24;
const halfSpan = standardSpan / 2;

class PageInternshipInformation extends Component {
  validationRules = (inputName, type) => [
    {
      required: true,
      message: "Please input your " + inputName,
      type: type
    }
  ];

  render() {
    return (
      <div className="FormArea">
        <Form
          name="basic"
          initialValues={{
            remember: true
          }}
          layout="vertical"
          align="left"
        >
          <Row gutter={formGutter}>
            <Col span={halfSpan}>
              <Form.Item
                key="firstName"
                label="First Name"
                name="firstName"
                rules={this.validationRules("first name", "string")}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={halfSpan}>
              <Form.Item
                key="lastName"
                label="Last Name"
                name="lastName"
                rules={this.validationRules("last name", "string")}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={formGutter}>
            <Col span={halfSpan}>
              <Form.Item
                key="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                extra="Please input your phone number without any formatting."
                rules={this.validationRules("phone number", "number")}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={halfSpan}>
              <Form.Item
                key="email"
                label="Email"
                name="email"
                rules={this.validationRules("email", "email")}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default PageInternshipInformation;
