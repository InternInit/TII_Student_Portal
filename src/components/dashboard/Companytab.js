import React from "react";
import styled from "styled-components";
import {
  Collapse,
  Button,
  Modal,
  Input,
  Avatar,
  message,
} from "antd";
import { Link } from "react-router-dom";

const { Panel } = Collapse;
const { TextArea } = Input;

const CompanyTitle = styled.div`
  font-weight: normal;
  color: black;
  align-items: center;
  min-height: 29px;

  text-align: left;

  margin-top: -10px;
  padding-top: 4px;
`;

const JobTitle = styled.div`
  font-weight: 500;
  color: #722ed1;

  margin-top: -2px;
  padding-bottom: 4px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

class Companytab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      //Collapse Tab
      <Collapse
        defaultActiveKey={["0"]}
        expandIconPosition="right"
        style={{
          borderRadius: "8px",
          border: "1",
          boxShadow: "1px 1px 5px -4px",
        }}
      >
        {
          //Dropdown Panel view
        }
        <Panel
          header={
            <CLabel
              name={this.props.name}
              industry={this.props.industry}
              companyid={this.props.companyid}
              avatar={this.props.avatar}
            />
          }
          key="1"
          style={{
            borderRadius: "08px",
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "white",
            border: "1",
            boxShadow: "1px 1px 5px -4px",
          }}
          onClick={this.onClick}
        >
          {/**
           * Dropdown
           */}
          <DroppedView
            companyid={this.props.companyid}
            name={this.props.name}
            updateBusinessStatus={this.props.updateBusinessStatus}
            removeBusiness={this.props.removeBusiness}
          />
        </Panel>
      </Collapse>
    );
  }
}
export default Companytab;

//Tab View of the Company Tab
class CLabel extends React.Component {
  render() {
    let { name, industry } = this.props;
    return (
      <Row
        style={{
          borderRadius: "08px",
          justifyContent: "center",
        }}
      >
        {/**Company Logo + Name + Position */}
        <Row
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          {/**company logo */}
          <Avatar
            size={36}
            shape="square"
            src={this.props.avatar}
            style={{
              marginLeft: "4vw",
              marginBottom: "14px",
            }}
          />

          {/**company name and job */}
          <Col
            style={{
              marginLeft: "30px",
              alignItems: "flex-start",
            }}
          >
            <CompanyTitle className="twentyFourFont">{name}</CompanyTitle>
            <JobTitle className="fourteenFont">{industry}</JobTitle>
          </Col>
        </Row>
      </Row>
    );
  }
}

//Dropped View of the Company Tab
class DroppedView extends React.Component {
  state = {
    visible: false,
  };
  render() {
    let { visible } = this.state;
    let { companyid, name } = this.props;
    return (
      <div
        style={{
          marginTop: "1%",
          paddingBottom: "8px",
        }}
      >
        {/**
         * Custom Response Button
         */}
        <Button
          className="eighteenFont add-button-style "
          onClick={this.showModal}
        >
          Add Custom Response
        </Button>

        {/**
         * Company Information Button
         */}

        <Button
          className="eighteenFont add-button-style "
          style={{
            backgroundColor: "#52C41A",
            color: "white",
          }}
        >
          <Link
            to={`/dashboard/add-companies/company-information/${companyid}`}
          >
            Company Information
          </Link>
        </Button>

        {/**
         *Submit Button
         */}
        <Button
          className="eighteenFont add-button-style "
          type="primary"
          onClick={this.submitResponse}
        >
          Submit Application
        </Button>

        <Modal
          visible={visible}
          title={"Send Custom Response to " + name}
          onCancel={this.cancelReponse}
          onOk={this.okResponse}
          okText="Add"
          width="100vh"
        >
          <TextArea autoSize={{ minRows: 5, maxRows: 10 }} />
        </Modal>
      </div>
    );
  }
  showModal = () => {
    this.setState({ visible: true });
  };
  okResponse = () => {
    this.setState({ visible: false });
  };

  submitResponse = () => {
    message.success("Your application was sent successfully.");
    this.props.updateBusinessStatus(this.props.companyid, "Pending");
  };

  cancelReponse = () => {
    this.setState({ visible: false });
  };
}
