//Standard React Import
import React, { Component } from "react";
import styled from "styled-components";

//CSS Imports
import "antd/dist/antd.css";
import "../App.scss";

//Ant Design
import { Form, Input, Button, Divider } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const ModalContainer = styled.div`
  border-radius: 15px;
  background: white;
  padding: 30px;
  width: auto;
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

export default function EmailConfirmation(props) {
  return (
    <ModalContainer>
      <span style={{ fontSize: "48px" }} alt="clapping hands">
        👏
      </span>
      <ModalHeading>Thanks for Signing Up!</ModalHeading>
      <Divider orientation="center" />
      <DescriptionText>
        We just sent a confirmation code over to {props.email}
      </DescriptionText>
      <Form ref={props.formRef}>
        <Form.Item name="confirmationCode">
          <Input placeholder="Enter Code" />
        </Form.Item>
      </Form>
      <HelpText>Send me another code.</HelpText>

    </ModalContainer>
  );
}
