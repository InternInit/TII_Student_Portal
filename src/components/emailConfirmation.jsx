//Standard React Import
import React, { Component } from "react";
import styled from "styled-components";

//CSS Imports
import "antd/dist/antd.css";
import "../App.css";

//Ant Design
import { Form, Input, Button, Divider } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const ModalContainer = styled.div`
  border-radius: 15px;
  background: white;
  padding: 30px;
  width: 70%;
`;

const ModalHeading = styled.h1`
  font-size: 36px;
  font-family: Lato;
  font-weight: bold;
  align: center;
`;

const Seperator = styled.div`
  border-bottom: 1px gray;
`;

const DescriptionText = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: #1f1f1f;
`;

const HelpText = styled.p`
  text-align: center;
`;

function EmailConfirmation(props) {
  return (
    <ModalContainer>
      <CloseOutlined
        style={{
          display: "block",
          textAlign: "right",
          fontSize: "18px",
          marginTop: "-5px",
          marginRight: "-5px"
        }}
      />
      <span style={{ fontSize: "48px" }} alt="clapping hands">
        👏
      </span>
      <ModalHeading>Thanks for Signing Up!</ModalHeading>
      <Divider orientation="center" />
      <DescriptionText>
        We just sent a confirmation code over to {props.email}
      </DescriptionText>
      <Form>
        <Form.Item>
          <Input placeholder="Enter Code" />
        </Form.Item>
      </Form>
      <HelpText>Send me another code.</HelpText>
      <Button
        type="primary"
        size="large"
        shape="round"
        style={{ width: "150px" }}
      >
        Log In
      </Button>
    </ModalContainer>
  );
}

export default EmailConfirmation;
