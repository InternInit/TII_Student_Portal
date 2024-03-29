//Standard React Import
import React from "react";
import styled from "styled-components";

//CSS Imports
import "antd/dist/antd.css";
import "../App.scss";

//Ant Design
import { Form, Input, Divider } from "antd";

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
      <ModalHeading>
        <span alt="clapping hands">👏</span> Thanks for Signing Up!
      </ModalHeading>
      <Divider orientation="center" />
      <DescriptionText>
        We just sent a confirmation code over to {props.email}
      </DescriptionText>
      <Form ref={props.formRef}>
        <Form.Item name="confirmationCode">
          <Input placeholder="Enter Code" />
        </Form.Item>
      </Form>
      <HelpText onClick={() => props.resendConfirmCode()}>
        <a href="#">Send me another code.</a>
      </HelpText>
    </ModalContainer>
  );
}
