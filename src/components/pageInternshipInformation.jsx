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
  message,
  Spin
} from "antd";
import { Row, Col } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  InboxOutlined
} from "@ant-design/icons";

import "antd/dist/antd.css";
import "../App.css";

//Stream related
import axios from "axios";

import moment from "moment";

//React Routing
import { BrowserRouter as Router, Link } from "react-router-dom";
import { withRouter } from "react-router";
import TiiNav from "./TiiNav";

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
const validationRules = (required, inputName, type, pattern) => [
  {
    required: required,
    message: "Please input your " + inputName,
    type: type,
    pattern: pattern
  }
];

const boldify = text => <strong>{text}</strong>;

//Props
const formItemProps = {
  totalForm: {
    name: "pageInternshipInformation",
    layout: "vertical",
    align: "left"
  },
  firstName: {
    key: "firstName",
    label: boldify("First Name"),
    name: "firstName",
    rules: validationRules(true, "first name", "string")
  },
  lastName: {
    key: "lastName",
    label: boldify("Last Name"),
    name: "lastName",
    rules: validationRules(true, "last name", "string")
  },
  phoneNumber: {
    key: "phoneNumber",
    label: boldify("Phone Number"),
    name: "phoneNumber",
    extra: "Please input your phone number without any formatting.",
    rules: validationRules(
      true,
      "phone number",
      "string",
      /^(1?([-\s]?\(?\d{3}\)?)[-\s]?)(\d{3})([-\s]?\d{4})$/
    )
  },
  email: {
    key: "email",
    label: boldify("Email"),
    name: "email",
    rules: validationRules(true, "email", "email")
  },
  addressLine: {
    key: "addressLine",
    label: boldify("Address"),
    name: "address",
    rules: validationRules(
      true,
      "address",
      "string",
      /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/
    )
  },
  city: {
    key: "city",
    name: "city",
    rules: validationRules(
      true,
      "city",
      "string",
      /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
    )
  },
  livingState: {
    key: "state",
    name: "state",
    rules: validationRules(true, "state")
  },
  zip: {
    key: "zip",
    name: "zip",
    rules: validationRules(true, "zip code", "string", /^\d{5}$/)
  },
  yog: {
    key: "yog",
    label: boldify("Year of graduation"),
    name: "yog",
    rules: validationRules(true, "year of graduation", "string", /^\d{4}$/)
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
    rules: validationRules(
      true,
      "unweighted GPA",
      "string",
      /^(([0-3]\.\d{1,2})|([4]\.[0]{1,2})|([0-4]))$/
    ),
    extra: "Your GPA should be out of 4.0"
  },
  weightedGPA: {
    key: "weightedGPA",
    label: boldify("What is your weighted GPA (optional)?"),
    name: "weightedGPA",
    extra: "Indicate your weighted GPA over the scale",
    rules: validationRules(
      false,
      "weighted GPA",
      "string",
      /^(\d+(\.\d+)?)\/(\d+(\.\d+)?)$/
    )
  },
  courses: {
    key: "courses",
    label: boldify("Relevant courses to your industry."),
    name: "courses",
    rules: validationRules(true, "relevant courses"),
    extra:
      "Separate each entry with a comma and a space, and capitalize the AP/IB for your AP/IB Classes"
  },
  extracurriculars: {
    key: "extracurriculars",
    label: boldify("Extracurricular Activities"),
    name: "extracurriculars",
    rules: validationRules(true, "extracurricular activities"),
    extra:
      "Separate each entry with a comma and a space, and in parentheses, show how long you spent on the activity."
  },
  daysToWork: {
    key: "daysToWork",
    label: boldify("What days are you willing to work?"),
    name: "daysToWork",
    rules: validationRules(true, "optimal days to work", "array")
  },
  timesToWork: {
    key: "timesToWork",
    label: boldify("What times are you willing to work?"),
    name: "timesToWork",
    rules: validationRules(true, "times available to work", "array")
  },
  dateOfStartAndEnd: {
    key: "dateOfStartAndEnd",
    name: "dateOfStartAndEnd",
    label: boldify(
      "When can you start working and when do you need to stop working?"
    ),
    rules: validationRules(true, "available dates of work", "array")
  },
  paidUnpaid: {
    key: "paidUnpaid",
    name: "paidUnpaid",
    label: boldify("Are you willing to work unpaid?"),
    rules: validationRules(true, "preference for pay")
  },
  resume: {
    name: "resume",
    key: "resume",
    label: boldify("Resumé (.doc, .docx, .pdf)"),
    rules: validationRules(true, "resume", "object")
  }
};
const props = {
  name: "file",
  accept:
    ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf, application/pdf",
  multiple: true
};

class PageInternshipInformation extends Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }
  state = {
    otherIndustry: "",
    fileList: [],
    loaded: false
  };

  formRef = React.createRef();

  componentDidMount() {
    this.getUserData();
  }

  componentWillUnmount() {
    this.setCompletionState();
  }

  renderNav() {
    this.props.renderNav();
  }

  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <Spin size="large" spinning={!this.state.loaded}>
          <h1>Internship Information</h1>
          <br />

          <Form
            {...formItemProps.totalForm}
            onFinish={this.onFinish}
            ref={this.formRef}
          >
            {/*First and Last Name*/}
            <Row name="first" gutter={formGutter}>
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
              <Dragger
                {...props}
                style={{ width: "250px", height: "30px" }}
                customRequest={this.customRequestResume}
                onChange={this.onChange}
                fileList={this.state.fileList}
              >
                <h1 style={{ color: "blue" }}>
                  <InboxOutlined />
                </h1>
                <h5>Click or Drag Files to Upload Here</h5>
              </Dragger>
            </Form.Item>

            {/*Save and Continue or Next*/}
            <Form.Item>
              <Button className="next-button" type="primary" htmlType="submit">
                Save and Continue
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    );
  }

  onFinish = values => {
    console.log("FinishedPageInternship:", values);
    this.props.setCompletionState(0, true);
    this.props.updateData(values, "0");
    this.routeChange("/apply/personal");
  };

  setCompletionState = async () => {
    try {
      const values = await this.formRef.current.validateFields();
      console.log(values);
      this.props.setCompletionState(0, true);
      this.props.updateData(values, "0");
    } catch (errorInfo) {
      this.props.setCompletionState(0, false);
      this.props.updateData(errorInfo.values, "0");
    }
  };

  customRequestResume = ({ onSuccess, onError, file }) => {
    setTimeout(() => {
      onSuccess(file);
      const source = "Resume";
      let currentFileList = this.state.fileList;
      currentFileList.push(file);
      this.setState({ fileList: currentFileList });
      this.props.uploadFile(file, source);
    }, 100);
  };

  onChange = info => {
    const { status } = info.file;
    if (status === "removed") {
      let currentFileList = this.state.fileList;
      let index = currentFileList.indexOf(info.file);
      if (index > -1) {
        currentFileList.splice(index, 1);
      }
      this.setState({ fileList: currentFileList });
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
    this.props.updateData(this.formRef.current.getFieldsValue(), "0");
  };

  getUserData = async () => {
    let token = await this.props.getJwt();
    fetch("/get_user_data", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(JSON.stringify(token))
      },
      body: 0
    })
      .then(response => response.json())
      .then(data => {
        let parsedRecv = JSON.parse(data);
        let parsedData = parsedRecv[0];

        if (parsedData !== "No Info") {
          try {
            parsedData.dateOfStartAndEnd = [
              moment(parsedData.dateOfStartAndEnd[0]),
              moment(parsedData.dateOfStartAndEnd[1])
            ];
            //delete parsedData.resume

            let fileList = parsedData.resume.fileList;
            for (var i = 0; i < fileList.length; i++) {
              fileList[i].status = "done";
            }

            this.setState({ fileList: fileList });
          } catch (e) {
            console.log(e);
          }
          this.setState({ loaded: true });
          this.formRef.current.setFieldsValue(parsedData);
        }
        this.setState({ loaded: true });
      });
  };

  routeChange = path => {
    console.log(path);
    this.props.clickTwo();
    this.props.history.push(path);
  };
}

export default withRouter(PageInternshipInformation);
