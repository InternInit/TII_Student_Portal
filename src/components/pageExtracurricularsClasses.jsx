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
  Grid,
  Space,
} from "antd";
import { Row, Col } from "antd";
import {
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
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

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 24, offset: 0 },
  },
};

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

class PageExtracurricularsClasses extends Component {
  render() {
    return (
      <div>
        <Extracurriculars />
      </div>
    );
  }
}

const Extracurriculars = (props) => {
  return (
    <React.Fragment>
      <Form.List name="users">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field) => (
                <div className="educationBox" key={field.key}>
                  <Row gutter={formGutter} style={{ width: "100%" }}>
                    <Col span={6}>
                      <Form.Item
                        {...field}
                        name={[field.name, "activityType"]}
                        fieldKey={[field.fieldKey, "activityType"]}
                      >
                        <Input placeholder="Activity Type" />
                      </Form.Item>
                    </Col>
                    <Col span={18}>
                      <Form.Item
                        {...field}
                        name={[field.name, "position"]}
                        fieldKey={[field.fieldKey, "position"]}
                      >
                        <Input placeholder="Position" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={formGutter} style={{ width: "100%" }}>
                    <Col span={standardSpan / 4}>
                      <Form.Item
                        {...field}
                        name={[field.name, "activityType"]}
                        fieldKey={[field.fieldKey, "activityType"]}
                      >
                        <Input placeholder="Activity Type" />
                      </Form.Item>
                    </Col>
                    <Col span={(standardSpan * 3) / 4}>
                      <Form.Item
                        {...field}
                        name={[field.name, "position"]}
                        fieldKey={[field.fieldKey, "position"]}
                      >
                        <Input placeholder="Position" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <MinusCircleOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Row>
                </div>
              ))}

              {/**
               *
               * Add Field Button
               *
               */}
              <Form.Item style={{ width: "100%" }}>
                <Button
                  type="dashed"
                  size="large"
                  onClick={() => {
                    add();
                  }}
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    marginBottom: "30px",
                  }}
                >
                  <PlusOutlined /> Add {props.officialName}
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
    </React.Fragment>
  );
};
