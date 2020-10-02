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
  Spin,
  Popover,
  Skeleton,
  Grid
} from "antd";
import { Row, Col } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { InfoCircle } from "./StyledComponents/InternshipForms";

import "antd/dist/antd.css";
import "../App.scss";

//Stream related

import moment from "moment";

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
import SkeletonInput from "antd/lib/skeleton/Input";
import SkeletonButton from "antd/lib/skeleton/Button";
import SkeletonImage from "antd/lib/skeleton/Image";

//Object Destructuring
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Dragger } = Upload;
const { useBreakpoint } = Grid;

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
  "Wyoming",
];
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const timesOfTheDay = ["Mornings", "Afternoons", "Evenings"];
const paidOrUnpaid = ["Yes", "No"];

//Validation Rules (Required questions)
const validationRules = (required, inputName, type, pattern) => [
  {
    required: required,
    message: "Please enter a valid " + inputName,
    type: type,
    pattern: pattern,
  },
];

//The best function to exist within this app
const boldify = (text, info = false, popoverText) =>
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
 * All form questions
 *
 */
const formItemProps = {
  totalForm: {
    name: "pageInternshipInformation",
    layout: "vertical",
    align: "left",
  },
  firstName: {
    key: "firstName",
    label: boldify("First Name"),
    name: "First Name",
    rules: validationRules(true, "first name", "string"),
  },
  lastName: {
    key: "lastName",
    label: boldify("Last Name"),
    name: "Last Name",
    rules: validationRules(true, "last name", "string"),
  },
  phoneNumber: {
    key: "phoneNumber",
    label: boldify(
      "Phone Number",
      true,
      "Your phone number is a key method that companies will use to communicate with you."
    ),
    name: "Phone Number",
    rules: validationRules(
      true,
      "phone number",
      "string",
      /^(1?([-\s]?\(?\d{3}\)?)[-\s]?)(\d{3})([-\s]?\d{4})$/
    ),
  },
  email: {
    key: "email",
    label: boldify(
      "Email",
      true,
      "Your email is a key method that companies will use to communicate with you."
    ),
    name: "Email",
    rules: validationRules(true, "email", "email"),
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
    ),
  },
  city: {
    key: "city",
    name: "City",
    rules: validationRules(
      true,
      "city",
      "string",
      /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
    ),
  },
  livingState: {
    key: "state",
    name: "State",
    rules: validationRules(true, "state"),
  },
  zip: {
    key: "zip",
    name: "Zip Code",
    rules: validationRules(true, "zip code", "string", /^\d{5}$/),
  },
  yog: {
    key: "yog",
    label: boldify("Year of graduation"),
    name: "Year of Graduation",
    rules: validationRules(true, "year of graduation", "string", /^\d{4}$/),
  },
  unweightedGPA: {
    className: "text-left",
    key: "unweightedGPA",
    label: boldify(
      "What is your unweighted GPA?",
      true,
      "Your unweighted GPA does not include the difficulty of your class"
    ),
    name: "Unweighted GPA",
    rules: validationRules(
      true,
      "unweighted GPA",
      "string",
      /^(([0-3]\.\d{1,2})|([4]\.[0]{1,2})|([0-4]))$/
    ),
    extra: "Your GPA should be out of 4.0",
  },
  weightedGPA: {
    className: "text-left",
    key: "weightedGPA",
    label: boldify(
      "What is your weighted GPA (optional)?",
      true,
      <React.Fragment>
        <p>
          Your weighted GPA takes into factor your school's unique grading scale
          <br />
          and the grade you received in that class.
        </p>
        <p>Ex: 4.43/5.0 </p>
        <p>
          Check out this{" "}
          <a href="https://gpacalculator.net/high-school-gpa-calculator/">
            GPA calculator
          </a>{" "}
          if you're feeling stuck
        </p>
      </React.Fragment>
    ),
    name: "Weighted GPA",
    extra: "Indicate your weighted GPA over the scale",
    rules: validationRules(
      false,
      "weighted GPA",
      "string",
      /^(\d+(\.\d+)?)\/(\d+(\.\d+)?)$/
    ),
  },
  courses: {
    className: "text-left",
    key: "courses",
    label: boldify(
      "Relevant courses to your industry.",
      true,
      <React.Fragment>
        <p>
          Relevant courses are any courses you've taken
          <br />
          which you think are helpful for your application
          <br />
          to a specific position or industry
        </p>
        <p>
          Ex: If you are applying for an internship in,
          <br />
          <strong>business</strong>, you might add classes such as
          <br />
          <em>accounting, business finance, </em>
          <br />
          <em> management essentials.</em>
        </p>
      </React.Fragment>
    ),
    name: "Relevant Courses",
    rules: validationRules(true, "course"),
    extra:
      "Separate each entry with a comma and a space, and capitalize the AP/IB for your AP/IB Classes",
  },
  extracurriculars: {
    className: "text-left",
    key: "extracurriculars",
    label: boldify(
      "Extracurricular Activities",
      true,
      <React.Fragment>
        <p>
          Your extracurricular activities show employers
          <br />
          how you spend your time outside of the classroom
          <br />
          and what your interests are. These activities can
          <br />
          show a business why you are particularly qualified
          <br />
          for their specific internship position.
        </p>
        <p>
          Ex: If you are applying for an internship in,
          <br />
          <strong>business</strong>, you might include activities
          <br />
          such as <em>FBLA, Student Council Treasurer,</em>
          <br />
          <em>Investment Club</em>
        </p>
      </React.Fragment>
    ),
    name: "Extracurriculars",
    rules: validationRules(true, "extracurricular activity"),
    extra:
      "Separate each entry with a comma and a space, and in parentheses, show how long you spent on the activity.",
  },
  daysToWork: {
    key: "daysToWork",
    label: boldify(
      "What days are you willing to work?",
      true,
      <React.Fragment>
        <p>What days can you spend on your internship?</p>
        <p>
          Make sure that your only put in days you are
          <br />
          sure that you can make.
        </p>
      </React.Fragment>
    ),
    name: "Willing Work Days",
    rules: validationRules(true, "day", "array"),
  },
  timesToWork: {
    key: "timesToWork",
    label: boldify(
      "What times are you willing to work?",
      true,
      <React.Fragment>
        <p>
          What times of the day are you available to work
          <br />
          on your internship?
        </p>
        <p>
          Make sure that you only put in times you are
          <br />
          sure that you can make.
        </p>
      </React.Fragment>
    ),
    name: "Willing Work Times",
    rules: validationRules(true, "time", "array"),
  },
  dateOfStartAndEnd: {
    key: "dateOfStartAndEnd",
    name: "Starting/Ending Dates",
    label: boldify(
      "When can you start working and when do you need to stop working?",
      true,
      <React.Fragment>
        <p>
          This is the range of times when you can expect to take on an
          internship.
        </p>
        <p>These times narrow down which internships you are available for.</p>
      </React.Fragment>
    ),
    rules: validationRules(true, "available dates of work", "array"),
  },
  paidUnpaid: {
    key: "paidUnpaid",
    name: "Paid/Unpaid Preference",
    label: boldify(
      "Are you willing to work unpaid?",
      true,
      <React.Fragment>
        <p>Are you willing to take on an unpaid internship?</p>
        <p>
          If you answer <em>no</em>, then your application will only
          <br />
          be sent to companies with paid positions
        </p>
        <p>
          If you answer <em>yes</em>, your application will be sent to
          <br />
          companies with paid AND unpaid positions. If you
          <br />
          take on an unpaid position, you will need to
          <br />
          arrange for academic credit.
        </p>
        <p>
          <em>
            All unpaid internship programs require interns to receive
            <br />
            academic credit in accordance with labor laws
          </em>
        </p>
      </React.Fragment>
    ),
    rules: validationRules(true, "preference for pay"),
  },
  resume: {
    key: "resume",
    name: "Resume",
    label: boldify(
      "Resumé (.doc, .docx, .pdf)",
      true,
      <React.Fragment>
        <p>
          Your resumé is a brief summary of your work experience,
          <br />
          skills, or any other relevant items that you can't cover
          <br />
          through the application.
        </p>
        <p>
          If you are unsure of what to upload, check out our free
          <br />
          <Link to="/dashboard/apply-skills">apply skills course</Link> to learn
          how to write a stunning
          <br />
          resumé.
        </p>
      </React.Fragment>
    ),
    rules: validationRules(true, "resume", "object"),
  },
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
  multiple: true,
};

/**
 *
 * Checks Nav Panel state (is completed)
 *
 */
const mapStateToProps = (state) => {
  return {
    completionState: state.completionState,
    completionChecklist: state.completionChecklist,
  };
};

/**
 *
 * Updates completion state
 *
 */
const mapDispatchToProps = {
  updateCompletionState,
  updateCompletionChecklist,
};

class PageInternshipInformation extends Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
    this.gpaRef = React.createRef();
    this.resumeRef = React.createRef();
  }
  state = {
    otherIndustry: "",
    fileList: [],
    loaded: false,
  };

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
    if (hash === "" || hash === "#ContactInformation") {
      window.scrollTo(0, 0);
    } else {
      if (hash === "#InternshipInformation") {
        neededRef = this.gpaRef;
      } else if (hash === "#Resume") {
        neededRef = this.resumeRef;
      }

      let fetchedRef = await this.waitForRef(neededRef);
      window.scrollTo(0, fetchedRef.current.offsetTop);
    }
  };

  componentDidMount() {
    this.getUserData();
    this.scrollToRef();
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
      <div style={{ width: "100%", marginTop: "40px" }}>
        {!this.state.loaded ? (
          <React.Fragment>
            <div style={{ marginBottom: "40px" }}>
              <Skeleton.Input style={{ width: "25vw" }} size="default" />
            </div>
            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>

              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            {/**
             *
             * Phone Number and Email
             *
             */}
            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>

              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            {/**
             *
             * Address Line
             *
             */}
            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            {/**
             *
             * Address City, State, ZIP
             *
             */}
            <Row gutter={formGutter}>
              <Col span={thirdSpan}>
                <Skeleton.Input style={{ width: "16vw" }} size="small" />
              </Col>

              <Col span={thirdSpan}>
                <Skeleton.Input style={{ width: "16vw" }} size="small" />
              </Col>

              <Col span={thirdSpan}>
                <Skeleton.Input style={{ width: "16vw" }} size="small" />
              </Col>
            </Row>

            {/**
             *
             * Year of Graduation
             *
             */}
            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            {/**
             *
             * Weighted and Unweighted GPAs
             *
             */}
            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            {/**
             *
             * Relevant Courses
             *
             */}
            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            {/**
            Extracurriculars
            CHANGE REQUIRED: Switch to a standardized input format
            */}
            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            {/**
             *
             * Day and Time Willing to Work
             *
             */}
            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            {/**
             *
             * Start and End Date
             *
             */}
            <Row gutter={formGutter}>
              <Col span={standardSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
            </Row>

            {/**
             *
             * Willing to work Paid/Unpaid
             *
             */}

            {/**
             *
             * Upload Resume
             *
             */}
            <Row gutter={formGutter}>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
                <Skeleton.Input style={{ width: "25vw" }} size="small" />
              </Col>
              <Col span={halfSpan}>
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
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <SkeletonButton />
              </div>
            </Form.Item>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1 className="apply-header twentyEightFont">Internship Information</h1>
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
                      {allStates.map((state) => (
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
              <Row gutter={formGutter} ref={this.gpaRef}>
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
                      {daysOfTheWeek.map((day) => (
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
                      {timesOfTheDay.map((time) => (
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
                    <Radio.Group className="universal-left">
                      {paidOrUnpaid.map((choice) => (
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
              <div ref={this.resumeRef}>
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
              </div>

              {/**
               *
               * "Save and Continue" Button
               *
               */}
              <Form.Item>
                <Button
                  className="next-button"
                  type="primary"
                  htmlType="submit"
                >
                  Save and Continue
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
    if (completionPercentage !== this.props.completionState[0])
      this.props.updateCompletionState(0, completionPercentage);

    if (!_.isEqual(checklist, this.props.completionChecklist[0]))
      this.props.updateCompletionChecklist(0, checklist);
  };

  /**
   *
   * On Finish
   *
   */
  onFinish = (values) => {
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
  onChange = (info) => {
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
        Authorization: "Bearer " + JSON.parse(JSON.stringify(token)),
      },
      body: 0,
    })
      .then((response) => response.json())
      .then((data) => {
        let parsedRecv = JSON.parse(data);
        let parsedData = parsedRecv.formData;

        if (parsedRecv !== "No Info") {
          console.log(parsedData);
          try {
            parsedData["Starting/Ending Dates"] = [
              moment(parsedData["Starting/Ending Dates"][0]),
              moment(parsedData["Starting/Ending Dates"][1]),
            ];
          } catch (e) {
            console.log(e);
          }

          try {
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
  routeChange = (path) => {
    console.log(path);
    this.props.clickTwo();
    this.props.history.push(path);
  };
}

const StandardInputs = (props) => {
  const screens = useBreakpoint();

  return (
    <React.Fragment>
      <Row></Row>
    </React.Fragment>
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageInternshipInformation)
);
