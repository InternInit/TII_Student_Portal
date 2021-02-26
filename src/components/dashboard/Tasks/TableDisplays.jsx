import React, { useState } from "react";

import { Row, Col, Breadcrumb, Table } from "antd";
import { Header, Caption } from "../../Styled/FundamentalComponents";

import moment from "moment";

import _ from "underscore";

const attendanceColumns = [
  {
    title: <Header className="pl-2 sixteenFont">Date</Header>,
    dataIndex: "date",
    key: "date",
    render: (date) => (
      <Caption className="pl-2 fourteenFont">
        {moment(date).format("MMMM Do YYYY")}
      </Caption>
    ),
  },
  {
    title: <Header className="pr-2 sixteenFont">Hours</Header>,
    align: "right",
    dataIndex: "time",
    key: "hours",
    render: hour => (
        <Caption className="pr-2 fourteenFont">
        {hour}
      </Caption>
    )
  },
];

const feedbackColumns = [
  {
    title: <Header className="pl-2 sixteenFont">Date</Header>,
    dataIndex: "date",
    width: 200,
    fixed: true,
    key: "date",
    render: (date) => (
      <Caption className="pl-2 fourteenFont">
        {moment(date).format("MMMM Do YYYY")}
      </Caption>
    ),
  },
  {
    title: <Header className="sixteenFont">Feedback</Header>,
    dataIndex: "comment",
    key: "feedback",
    render: feedback => (
        <Caption className="fourteenFont">
        {feedback}
      </Caption>
    )
  },
];

const gradesColumns = [
  {
    title: <Header className="pl-2 sixteenFont">Date</Header>,
    dataIndex: "date",
    width: 200,
    fixed: true,
    key: "date",
    render: (date) => (
      <Caption className="pl-2 fourteenFont">
        {moment(date).format("MMMM Do YYYY")}
      </Caption>
    ),
  },
  {
    title: <Header className="sixteenFont">Grade</Header>,
    dataIndex: "assessment",
    align: "center",
    width: 75,
    fixed: true,
    key: "grade",
    render: grade => (
        <Caption className="fourteenFont">
        {grade}
      </Caption>
    )
  },
  {
    title: <Header className="sixteenFont">Additional Comments</Header>,
    dataIndex: "additionalComments",
    key: "additionalComments",
    render: additionalComment => (
        <Caption className="fourteenFont">
        {additionalComment}
      </Caption>
    )
  },
];

export const AttendanceTable = ({ data }) => {
  console.log(data);
  return (
    <Table columns={attendanceColumns} dataSource={_.sortBy(data, "date")} />
  );
};

export const FeedbackTable = ({ data }) => {
  console.log(data);
  return (
    <Table columns={feedbackColumns} dataSource={_.sortBy(data, "date")} />
  );
};
export const GradesTable = ({ data }) => {
  console.log(data);
  return (
    <Table columns={gradesColumns} dataSource={_.sortBy(data, "date")} />
  );
};
