import React, { Component } from "react";
import { Form, Select, Input, Button, Checkbox, DatePicker, Radio } from "antd";
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
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const timesOfTheDay = ["Mornings", "Afternoons", "Evenings"];
const paidOrUnpaid = ["Yes", "No", "It doesn't matter"];

class PagePersonal extends Component {
  validationRules = (inputName, type) => [
    {
      required: true,
      message: "Please input your " + inputName,
      type: type
    }
  ];

  boldify = text => <strong>{text}</strong>;

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
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
                label={this.boldify("First Name")}
                name="firstName"
                rules={this.validationRules("first name", "string")}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={halfSpan}>
              <Form.Item
                key="lastName"
                label={this.boldify("Last Name")}
                name="lastName"
                rules={this.validationRules("last name", "string")}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default PagePersonal;
