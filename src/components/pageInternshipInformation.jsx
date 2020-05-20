import React, { Component } from "react";
import {
  Form,
  Select,
  Input,
  Button,
  Checkbox,
  DatePicker,
  Radio,
  Upload,
  message
} from "antd";
import { Row, Col } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  InboxOutlined
} from "@ant-design/icons";

import "antd/dist/antd.css";
import "../App.css";

//Object Destructuring
const { Option } = Select;
const { MonthPicker, RangePicker } = DatePicker;
const { Dragger } = Upload;

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
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  multiple: true,
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

class PageInternshipInformation extends Component {
  state = {
    otherIndustry: ""
  };

  //THIS NEEDS TO BE FIXED ASAP!!!
  handleChange = event => {
    this.setState({ otherIndustry: event.target.value });
    console.log(this.state);
  };

  validationRules = (inputName, type) => [
    {
      required: true,
      message: "Please input your " + inputName,
      type: type
    }
  ];

  onFinish = () => {
    //TO BE FILLED
    //Format the dates in the array for start and end dates
  };

  boldify = text => <strong>{text}</strong>;

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <h1>Internship Information</h1>
        <br />

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

          <Row gutter={formGutter}>
            <Col span={halfSpan}>
              <Form.Item
                key="phoneNumber"
                label={this.boldify("Phone Number")}
                name="phoneNumber"
                extra="Please input your phone number without any formatting."
                rules={this.validationRules("phone number")}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={halfSpan}>
              <Form.Item
                key="email"
                label={this.boldify("Email")}
                name="email"
                rules={this.validationRules("email", "email")}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item
                key="addressLine"
                label={this.boldify("Address")}
                name="address"
                rules={this.validationRules("address")}
              >
                <Input placeholder="Address Line" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={formGutter}>
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

          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item
                key="yog"
                label={this.boldify("Year of graduation")}
                name="yog"
                rules={this.validationRules("year of graduation")}
              >
                <Input placeholder="(e.g.) 2021, 2022, etc." />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item
                key="industry"
                label={this.boldify("What industry are you applying to?")}
                name="industry"
                rules={[
                  {
                    required: true,
                    message: "Please input your industries of choice"
                  }
                ]}
              >
                <Checkbox.Group>
                  <Row>
                    <Col span={thirdSpan}>
                      <Checkbox
                        value="genBusiness"
                        style={{
                          lineHeight: "32px"
                        }}
                      >
                        General Business
                      </Checkbox>
                    </Col>
                    <Col span={thirdSpan}>
                      <Checkbox
                        value="consulting"
                        style={{
                          lineHeight: "32px"
                        }}
                      >
                        Consulting
                      </Checkbox>
                    </Col>
                    <Col span={thirdSpan}>
                      <Checkbox
                        value="finance"
                        style={{
                          lineHeight: "32px"
                        }}
                      >
                        Finance/Accounting
                      </Checkbox>
                    </Col>
                    <Col span={thirdSpan}>
                      <Checkbox
                        value="media"
                        style={{
                          lineHeight: "32px"
                        }}
                      >
                        Media/Tellecommunications
                      </Checkbox>
                    </Col>
                    <Col span={thirdSpan}>
                      <Checkbox
                        value="realEstate"
                        style={{
                          lineHeight: "32px"
                        }}
                      >
                        Real Estate
                      </Checkbox>
                    </Col>
                    <Col span={thirdSpan}>
                      <Checkbox
                        value="engineering"
                        style={{
                          lineHeight: "32px"
                        }}
                      >
                        Engineering
                      </Checkbox>
                    </Col>
                    <Col span={thirdSpan}>
                      <Checkbox
                        value="research"
                        style={{
                          lineHeight: "32px"
                        }}
                      >
                        Science Research
                      </Checkbox>
                    </Col>
                    <Col span={thirdSpan}>
                      <Checkbox
                        value="computerScience"
                        style={{
                          lineHeight: "32px"
                        }}
                      >
                        Computer Science
                      </Checkbox>
                    </Col>
                    <Col span={thirdSpan}>
                      <Checkbox
                        value="biotechnology"
                        style={{
                          lineHeight: "32px"
                        }}
                      >
                        Biotechnology
                      </Checkbox>
                    </Col>
                    <Col span={thirdSpan}>
                      <Checkbox
                        value="vocational"
                        style={{
                          lineHeight: "32px"
                        }}
                      >
                        Vocational
                      </Checkbox>
                    </Col>
                    <Col span={thirdSpan}>
                      <Checkbox
                        value="marketing"
                        style={{
                          lineHeight: "32px"
                        }}
                      >
                        Marketing
                      </Checkbox>
                    </Col>
                    <Col span={thirdSpan}>
                      <Checkbox
                        value={this.state.otherIndustry}
                        style={{
                          lineHeight: "32px"
                        }}
                      >
                        Other
                        <Input onChange={this.handleChange} />
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={formGutter}>
            <Col span={halfSpan}>
              <Form.Item
                key="unweightedGPA"
                label={this.boldify("What is your unweighted GPA?")}
                name="unweightedGPA"
                rules={this.validationRules("unweighted GPA")}
                extra="Your GPA should be out of 4.0"
              >
                <Input placeholder="4.0" />
              </Form.Item>
            </Col>
            <Col span={halfSpan}>
              <Form.Item
                key="weightedGPA"
                label={this.boldify("What is your weighted GPA (optional)?")}
                name="weightedGPA"
                extra="Indicate your weighted GPA over the scale"
              >
                <Input placeholder="4.7/5.0" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item
                key="courses"
                label={this.boldify("Relevant courses to your industry.")}
                name="courses"
                rules={this.validationRules("relevant courses")}
                extra="Separate each entry with a comma and a space, and capitalize the AP/IB for your AP/IB Classes"
              >
                <Input.TextArea
                  placeholder="(e.g.) Business Communications, AP Computer Science, etc."
                  style={{ height: "100px" }}
                />
              </Form.Item>
            </Col>
          </Row>

          {/*CHANGE REQUIRED: Switch to a standardized input format*/}
          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item
                key="extracurriculars"
                label={this.boldify("Extracurricular Activities")}
                name="extracurriculars"
                rules={this.validationRules("extracurricular activities")}
                extra="Separate each entry with a comma and a space, and in parentheses, show how long you spent on the activity."
              >
                <Input.TextArea
                  placeholder="(e.g.) Speech and Debate (3), DECA (4), HOSA (2), Student Council (2)"
                  style={{ height: "100px" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={formGutter}>
            <Col span={halfSpan}>
              <Form.Item
                key="daysToWork"
                label={this.boldify("What days are you willing to work?")}
                name="daysToWork"
                rules={this.validationRules("optimal days to work", "array")}
              >
                <Select
                  mode="multiple"
                  placeholder="Please select the days where you can work"
                >
                  {daysOfTheWeek.map(day => (
                    <Option key={day} value={day}>
                      {day}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={halfSpan}>
              <Form.Item
                key="timesToWork"
                label={this.boldify("What times are you willing to work?")}
                name="timesToWork"
                rules={this.validationRules("times available to work", "array")}
              >
                <Select
                  mode="multiple"
                  placeholder="Please select the times when you can work"
                >
                  {timesOfTheDay.map(time => (
                    <Option key={time} value={time}>
                      {time}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item
                key="dateOfStartAndEnd"
                name="dateOfStartAndEnd"
                label={this.boldify(
                  "When can you start working and when do you need to stop working?"
                )}
                rules={this.validationRules("available dates of work", "array")}
              >
                <RangePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item
                key="paidUnpaid"
                name="paidUnpaid"
                label={this.boldify("Are you willing to work unpaid?")}
                rules={this.validationRules("preference for pay")}
              >
                <Radio.Group>
                  {paidOrUnpaid.map(choice => (
                    <Radio key={choice} value={choice}>
                      {choice}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>

          {/** Resumé */}
          <Form.Item
            name="resume"
            key="resume"
            label={this.boldify("Resumé (Optional)")}
          >
            <Dragger {...props} style={{ width: "250px", height: "30px" }}>
              <h1 style={{ color: "blue" }}>
                <InboxOutlined />
              </h1>
              <h5>Click or Drag Files to Upload Here</h5>
            </Dragger>
          </Form.Item>

          {/*Save and Continue or Next*/}
          <Form.Item>
            <Button
              className="next-button"
              type="primary"
              htmlType="submit"
              onClick={this.props.onNext}
            >
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default PageInternshipInformation;
