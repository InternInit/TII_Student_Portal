import React, { useState, createRef } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  Tooltip,
  DatePicker,
  TimePicker,
  Form,
} from "antd";
import {
  TabContainer,
  Header,
  Caption,
  COLORS,
} from "../../Styled/FundamentalComponents";
import AddTagButton from "./AddTagButton";
import { BiCheckSquare } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineCalendar, AiOutlineForm } from "react-icons/ai";

const { TextArea } = Input;

const TaskDisplay = (props) => {
  const formRef = createRef(null);

  const onClear = () => {
    formRef.current.resetFields();
  }

  return (
    <>
      <Form ref={formRef} onFinish={values => props.createTask(values)}>
        <Row className="mt-1">
          <Header className="eighteenFont mb-point-25">Feedback</Header>
        </Row>
        <Form.Item name="task">
          <TextArea  
          placeholder=""
          rows={2} />
        </Form.Item>

        <Row className="mt-1-5" justify="space-between">
          <Button key="clearTask" onClick={onClear}>Clear</Button>
          <Button key="submitTask" type="primary" htmlType="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </>
  );
};

const ScheduleMeeting = (props) => {
  return (
    <Form onFinish={(values) => props.scheduleMeeting(values)}>
      <Row className="mt-1">
        <Header className="eighteenFont mb-point-25">Date</Header>
      </Row>
      <Form.Item name="meetingDate">
        <DatePicker picker="date" style={{ width: "100%" }} />
      </Form.Item>
      <Row>
        <Header className="eighteenFont mb-point-25">Hours Worked</Header>
      </Row>
      <Form.Item name="meetingTime">
        <Input placeholder="Ex. 2.5"/>
      </Form.Item>
      <Row justify="end">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Row>
    </Form>
  );
};

const CreateTaskCard = (props) => {
  const [page, updatePage] = useState(1);

  const scheduleMeeting = (values) => {
    console.log(values);
  };
  
  const createTask = (values) => {
    console.log(values);
  };

  return (
    <TabContainer className="pb-2 pt-1">
      <Row
        className="px-2 pb-point-5"
        style={{
          borderBottom: `2px solid ${COLORS.GRAY_L}`,
          position: "relative",
        }}
      >
        <Col className="pr-1-5">
          <div
            className={
              page === 1
                ? "twentyFont createTask-selected"
                : "twentyFont createTask-inactive"
            }
            onClick={() => updatePage(1)}
          >
            <AiOutlineForm className="mr-point-25 createTask-icon-task" /> Send Feedback
          </div>
        </Col>
        <Col className="pr-1-5">
          <div
            className={
              page === 2
                ? "twentyFont createTask-selected"
                : "twentyFont createTask-inactive"
            }
            onClick={() => updatePage(2)}
          >
            <AiOutlineCalendar className="mr-point-25 createTask-icon-grade" />{" "}
            Upload Attendance
          </div>
        </Col>
      </Row>
      <div className="px-2">
        {page === 1 ? (
          <TaskDisplay createTask={(values) => createTask(values)} />
        ) : (
          <ScheduleMeeting
            scheduleMeeting={(values) => scheduleMeeting(values)}
          />
          )}
      </div>
    </TabContainer>
  );
};

export default CreateTaskCard;
