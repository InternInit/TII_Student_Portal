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
const checkGutter = [8, 8];
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
const industry = [
  "General Business",
  "Consulting",
  "Finance or Accounting",
  "Media or Tellecommunications",
  "Real Estate",
  "Engineering",
  "Science Research",
  "Computer Science",
  "Biotechnology",
  "Vocational",
  "Political",
  "Marketing"
];

//Functions
const validationRules = (inputName, type) => [
  {
    required: true,
    message: "Please input your " + inputName,
    type: type
  }
];

const boldify = text => <strong>{text}</strong>;


//Props
const formItemProps = {
  totalForm: {
    name: "pageInternshipInformation",
    initialValues: {
      remember: true
    },
    layout: "vertical",
    align: "left"
  },
  firstName: {
    key: "firstName",
    label: boldify("First Name"),
    name: "firstName",
    rules: validationRules("first name", "string")
  },
  lastName: {
    key: "lastName",
    label: boldify("Last Name"),
    name: "lastName",
    rules: validationRules("last name", "string")
  },
  phoneNumber: {
    key: "phoneNumber",
    label: boldify("Phone Number"),
    name: "phoneNumber",
    extra: "Please input your phone number without any formatting.",
    rules: validationRules("phone number")
  },
  email: {
    key: "email",
    label: boldify("Email"),
    name: "email",
    rules: validationRules("email", "email")
  },
  addressLine: {
    key: "addressLine",
    label: boldify("Address"),
    name: "address",
    rules: validationRules("address")
  },
  city: {
    key: "city",
    name: "city",
    rules: validationRules("city")
  },
  livingState: {
    key: "state",
    name: "state",
    rules: validationRules("state")
  },
  zip: {
    key: "zip",
    name: "zip",
    rules: validationRules("zip code")
  },
  yog: {
    key: "yog",
    label: boldify("Year of graduation"),
    name: "yog",
    rules: validationRules("year of graduation")
  },
  industry: {
    key: "industry",
    label: boldify("What industry are you applying to?"),
    name: "industry",
    rules: [
      {
        required: true,
        message: "Please input your industries of choice"
      }
    ]
  },
  unweightedGPA: {
    key: "unweightedGPA",
    label: boldify("What is your unweighted GPA?"),
    name: "unweightedGPA",
    rules: validationRules("unweighted GPA"),
    extra: "Your GPA should be out of 4.0"
  },
  weightedGPA: {
    key: "weightedGPA",
    label: boldify("What is your weighted GPA (optional)?"),
    name: "weightedGPA",
    extra: "Indicate your weighted GPA over the scale"
  },
  courses: {
    key: "courses",
    label: boldify("Relevant courses to your industry."),
    name: "courses",
    rules: validationRules("relevant courses"),
    extra:
      "Separate each entry with a comma and a space, and capitalize the AP/IB for your AP/IB Classes"
  },
  extracurriculars: {
    key: "extracurriculars",
    label: boldify("Extracurricular Activities"),
    name: "extracurriculars",
    rules: validationRules("extracurricular activities"),
    extra:
      "Separate each entry with a comma and a space, and in parentheses, show how long you spent on the activity."
  },
  daysToWork: {
    key: "daysToWork",
    label: boldify("What days are you willing to work?"),
    name: "daysToWork",
    rules: validationRules("optimal days to work", "array")
  },
  timesToWork: {
    key: "timesToWork",
    label: boldify("What times are you willing to work?"),
    name: "timesToWork",
    rules: validationRules("times available to work", "array")
  },
  dateOfStartAndEnd: {
    key: "dateOfStartAndEnd",
    name: "dateOfStartAndEnd",
    label: boldify(
      "When can you start working and when do you need to stop working?"
    ),
    rules: validationRules("available dates of work", "array")
  },
  paidUnpaid: {
    key: "paidUnpaid",
    name: "paidUnpaid",
    label: boldify("Are you willing to work unpaid?"),
    rules: validationRules("preference for pay")
  },
  resume: {
    name: "resume",
    key: "resume",
    label: boldify("Resumé (Optional)")
  }
};
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

  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <h1>Internship Information</h1>
        <br />

        <Form {...formItemProps.totalForm} onFinish={this.onFinish}>
          {/*First and Last Name*/}
          <Row name = "first" gutter={formGutter}>
            <Col span={halfSpan}>
              <Form.Item {...formItemProps.firstName}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={halfSpan}>
              <Form.Item {...formItemProps.lastName}>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          {/*Phone Number and Email*/}
          <Row gutter={formGutter}>
            <Col span={halfSpan}>
              <Form.Item {...formItemProps.phoneNumber}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={halfSpan}>
              <Form.Item {...formItemProps.email}>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          {/*Address Line*/}
          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item {...formItemProps.addressLine}>
                <Input placeholder="Address Line" />
              </Form.Item>
            </Col>
          </Row>

          {/*City, State, and ZipCode*/}
          <Row gutter={formGutter}>
            <Col span={thirdSpan}>
              <Form.Item {...formItemProps.city}>
                <Input placeholder="City" />
              </Form.Item>
            </Col>

            <Col span={thirdSpan}>
              <Form.Item {...formItemProps.livingState}>
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
              <Form.Item {...formItemProps.zip}>
                <Input placeholder="Zip Code" />
              </Form.Item>
            </Col>
          </Row>

          {/*Year of Graduation*/}
          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item {...formItemProps.yog}>
                <Input placeholder="(e.g.) 2021, 2022, etc." />
              </Form.Item>
            </Col>
          </Row>

          {/*Industry*/}
          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item {...formItemProps.industry}>
                <Checkbox.Group>
                  <Row gutter={checkGutter}>
                    {industry.map(industry => (
                      <Col span={thirdSpan}>
                        <Checkbox
                          key={industry}
                          value={industry}
                          style={{
                            lineHeight: "32px"
                          }}
                        >
                          {industry}
                        </Checkbox>
                      </Col>
                    ))}
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

          {/*Unweighted and Weighted GPAs*/}
          <Row gutter={formGutter}>
            <Col span={halfSpan}>
              <Form.Item {...formItemProps.unweightedGPA}>
                <Input placeholder="4.0" />
              </Form.Item>
            </Col>
            <Col span={halfSpan}>
              <Form.Item {...formItemProps.weightedGPA}>
                <Input placeholder="4.7/5.0" />
              </Form.Item>
            </Col>
          </Row>

          {/*Courses*/}
          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item {...formItemProps.courses}>
                <Input.TextArea
                  placeholder="(e.g.) Business Communications, AP Computer Science, etc."
                  style={{ height: "100px" }}
                />
              </Form.Item>
            </Col>
          </Row>

          {/**
            Extracurriculars
            CHANGE REQUIRED: Switch to a standardized input format
          */}
          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item {...formItemProps.extracurriculars}>
                <Input.TextArea
                  placeholder="(e.g.) Speech and Debate (3), DECA (4), HOSA (2), Student Council (2)"
                  style={{ height: "100px" }}
                />
              </Form.Item>
            </Col>
          </Row>

          {/*Days and Times available for work*/}
          <Row gutter={formGutter}>
            <Col span={halfSpan}>
              <Form.Item {...formItemProps.daysToWork}>
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
              <Form.Item {...formItemProps.timesToWork}>
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

          {/*Start and End dates available for work*/}
          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item {...formItemProps.dateOfStartAndEnd}>
                <RangePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>

          {/*Paid or Unpaid Internship Chooser*/}
          <Row gutter={formGutter}>
            <Col span={standardSpan}>
              <Form.Item {...formItemProps.paidUnpaid}>
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
          <Form.Item {...formItemProps.resume}>
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
            >
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  onFinish = values => {
    console.log('FinishedPageInternship:', values);
    this.props.onNext()
  };

}

export default PageInternshipInformation;
