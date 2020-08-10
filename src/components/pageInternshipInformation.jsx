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
  Spin
} from "antd";
import { Row, Col } from "antd";
import {
  InboxOutlined
} from "@ant-design/icons";


import "antd/dist/antd.css";
import "../App.css";

//Stream related

import moment from "moment";

//React Routing
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
const { RangePicker } = DatePicker;
const { Dragger } = Upload;

//Formatting
const formGutter = [16, 16];
const standardSpan = 24;
const halfSpan = standardSpan / 2;
const thirdSpan = standardSpan / 3;

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
const paidOrUnpaid = ["Yes", "No"];


//Validation Rules (Required questions)
const validationRules = (required, inputName, type, pattern) => [
  {
    required: required,
    message: "Please input your " + inputName,
    type: type,
    pattern: pattern
  }
];

//The best function to exist within this app
const boldify = text => <strong>{text}</strong>;


/**
 * 
 * All form questions
 * 
 */
const formItemProps = {
  totalForm: {
    name: "pageInternshipInformation",
    layout: "vertical",
    align: "left"
  },
  firstName: {
    key: "firstName",
    label: boldify("First Name"),
    name: "First Name",
    rules: validationRules(true, "first name", "string")
  },
  lastName: {
    key: "lastName",
    label: boldify("Last Name"),
    name: "Last Name",
    rules: validationRules(true, "last name", "string")
  },
  phoneNumber: {
    key: "phoneNumber",
    label: boldify("Phone Number"),
    name: "Phone Number",
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
    name: "Email",
    rules: validationRules(true, "email", "email")
  },
  addressLine: {
    key: "addressLine",
    label: boldify("Address"),
    name: "Address",
    rules: validationRules(
      true,
      "address",
      "string",
      /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/
    )
  },
  city: {
    key: "city",
    name: "City",
    rules: validationRules(
      true,
      "city",
      "string",
      /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
    )
  },
  livingState: {
    key: "state",
    name: "State",
    rules: validationRules(true, "state")
  },
  zip: {
    key: "zip",
    name: "Zip Code",
    rules: validationRules(true, "zip code", "string", /^\d{5}$/)
  },
  yog: {
    key: "yog",
    label: boldify("Year of graduation"),
    name: "Year of Graduation",
    rules: validationRules(true, "year of graduation", "string", /^\d{4}$/)
  },
  industry: {
    key: "industry",
    label: boldify("What industries are you interested in?"),
    name: "Interested Industries",
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
    name: "Unweighted GPA",
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
    name: "Weighted GPA",
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
    name: "Relevant Courses",
    rules: validationRules(true, "relevant courses"),
    extra:
      "Separate each entry with a comma and a space, and capitalize the AP/IB for your AP/IB Classes"
  },
  extracurriculars: {
    key: "extracurriculars",
    label: boldify("Extracurricular Activities"),
    name: "Extracurriculars",
    rules: validationRules(true, "extracurricular activities"),
    extra:
      "Separate each entry with a comma and a space, and in parentheses, show how long you spent on the activity."
  },
  daysToWork: {
    key: "daysToWork",
    label: boldify("What days are you willing to work?"),
    name: "Willing Work Days",
    rules: validationRules(true, "optimal days to work", "array")
  },
  timesToWork: {
    key: "timesToWork",
    label: boldify("What times are you willing to work?"),
    name: "Willing Work Times",
    rules: validationRules(true, "times available to work", "array")
  },
  dateOfStartAndEnd: {
    key: "dateOfStartAndEnd",
    name: "Starting/Ending Dates",
    label: boldify(
      "When can you start working and when do you need to stop working?"
    ),
    rules: validationRules(true, "available dates of work", "array")
  },
  paidUnpaid: {
    key: "paidUnpaid",
    name: "Paid/Unpaid Preference",
    label: boldify("Are you willing to work unpaid?"),
    rules: validationRules(true, "preference for pay")
  },
  resume: {
    key: "resume",
    name: "Resume",
    label: boldify("Resumé (.doc, .docx, .pdf)"),
    rules: validationRules(true, "resume", "object")
  }
};

/**
 * 
 * Upload Files Parameters
 * 
 */
const props = {
  name: "file",
  accept:
    ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf, application/pdf",
  multiple: true
};

/**
 * 
 * Checks Nav Panel state (is completed)
 *
 */
const mapStateToProps = state => {
  return {
    completionState: state.completionState,
    completionChecklist: state.completionChecklist
  };
};

/**
 * 
 * Updates completion state
 * 
 */
const mapDispatchToProps = {
  updateCompletionState,
  updateCompletionChecklist
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
    this.updateFieldData();
  }

  //Renders Nav Panel
  renderNav() {
    this.props.renderNav();
  }

  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <Spin size="large" spinning={!this.state.loaded}>
          <h1>Internship Information</h1>
          <br />

          {/**
           * 
           * Application Form
           * 
           */}
          <Form
            {...formItemProps.totalForm}
            onFinish={this.onFinish}
            ref={this.formRef}
            onValuesChange={this.onValuesChange}
          >

            {/**
 * 
 * First Row (First and Last Name)
 * 
 */}
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

            {/**
             * 
             * Phone Number and Email
             * 
             */}
            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Form.Item {...formItemProps.phoneNumber}>
                  <Input placeholder="(XXX)XXX-XXXX" />
                </Form.Item>
              </Col>

              <Col span={halfSpan}>
                <Form.Item {...formItemProps.email}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            {/**
             * 
             * Address Line
             * 
             */}
            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Form.Item {...formItemProps.addressLine}>
                  <Input placeholder="Address Line" />
                </Form.Item>
              </Col>
            </Row>

            {/**
             * 
             * Address City, State, ZIP
             * 
             */}
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


            {/**
             * 
             * Year of Graduation
             * 
             */}
            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Form.Item {...formItemProps.yog}>
                  <Input placeholder="(e.g.) 2021, 2022, etc." />
                </Form.Item>
              </Col>
            </Row>


            {/**
             * 
             * Weighted and Unweighted GPAs
             * 
             */}
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


            {/**
             * 
             * Relevant Courses
             * 
             */}
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


            {/**
             * 
             * Day and Time Willing to Work
             * 
             */}
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


            {/**
             * 
             * Start and End Date
             * 
             */}
            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Form.Item {...formItemProps.dateOfStartAndEnd}>
                  <RangePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>


            {/**
             * 
             * Willing to work Paid/Unpaid
             * 
             */}
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

            {/**
             * 
             * Upload Resume
             * 
             */}
            <Form.Item {...formItemProps.resume}>
              <Dragger
                {...props}
                style={{ width: "250px", height: "30px" }}
                customRequest={this.customRequestResume}
                onChange={this.onChange}
                fileList={this.state.fileList}
              >
                <h1 style={{ color: "#69c0ff" }}>
                  <InboxOutlined />
                </h1>
                <h5>Click or Drag Files to Upload Here</h5>
              </Dragger>
            </Form.Item>

            {/**
             * 
             * "Save and Continue" Button
             * 
             */}
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

  /**
 * 
 * When Values are Changed
 * 
 */
  onValuesChange = () => {
    let allValues = this.formRef.current.getFieldsValue();
    delete allValues["Weighted GPA"];

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
    if (completionPercentage != this.props.completionState[0])
      this.props.updateCompletionState(0, completionPercentage);

    if (!_.isEqual(checklist, this.props.completionChecklist[0]))
      this.props.updateCompletionChecklist(0, checklist);
  };

  /**
* 
* On Finish
* 
*/
  onFinish = values => {
    console.log("FinishedPageInternship:", values);
    this.props.updateCompletionState(0, 1.0);
    this.props.updateData(values, "0");
    this.routeChange("/apply/personal");
  };


  /**
* 
* Upload User Data
* 
*/
  updateFieldData = async () => {
    const values = await this.formRef.current.getFieldsValue();
    this.props.updateData(values, "0");
  };


  /**
* 
* Load Resume
* 
*/
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

  /**
* 
* File upload function
* 
*/
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


  /**
* 
* Load user data (forms already filled out)
* 
*/
  getUserData = async () => {
    let token = await this.props.getJwt();
    fetch("/api/get_user_data", {
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
            parsedData["Starting/Ending Dates"] = [
              moment(parsedData["Starting/Ending Dates"][0]),
              moment(parsedData["Starting/Ending Dates"][1])
            ];

            let fileList = parsedData.Resume.fileList;
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


  /**
* 
* Route Changing (React Router)
* 
*/
  routeChange = path => {
    console.log(path);
    this.props.clickTwo();
    this.props.history.push(path);
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PageInternshipInformation)
);
