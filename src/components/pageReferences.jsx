import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "../App.css";
import styled from "styled-components";

//Formatting
const formGutter = [16, 16];
const standardSpan = 24;
const halfSpan = standardSpan / 2;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  }
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 24, offset: 0 }
  }
};

//Functions
const validationRules = (inputName, type) => [
  {
    required: true,
    message: "Please input your " + inputName,
    type: type
  }
];
const boldify = text => <strong>{text}</strong>;

//Props
const formItemProps = {
  totalForm: {
    layout: "vertical",
    align: "left",
    className: "pageReferences"
  },
  inputField: function (field, label, name, validationType) {
    return {
      key: [field.fieldKey, name],
      label: boldify(label),
      name: [field.name, name],
      rules: validationRules(label, validationType ? validationType : "string")
    };
  },
  addButton: {
    type: "dashed",
    size: "large",
    style: { width: "100%", marginTop: "10px", marginBottom: "30px" }
  }
};

class PageReferences extends Component {
  render() {
    return (
      <div style={{ width: "100%", marginTop: "40px", }}>
        <h1 style={{ textAlign: "left" }}> References</h1>
        <p>Add a reference here. This could be someone who has worked with you in the past.</p>
        <Form  {...formItemProps.totalForm} onFinish={this.onFinish}>
          <Form.List name="reference">
            {(fields, { add, remove }) => {
              console.log(fields);

              return (
                <div style={{ marginTop: "40px" }}>
                  {fields.map((field, index) => (
                    <div className="educationBox">
                      <Form.Item
                        {...(index === 0
                          ? formItemLayout
                          : formItemLayoutWithOutLabel)}
                        required={false}
                        key={field.key}
                      >
                        {/*Minus button removes field when clicked*/}
                        {this.renderMinusButton(fields, field, remove)}

                        {/**First row of reference box */}
                        <Row gutter={formGutter}>
                          <Col span={halfSpan}>
                            {/**First name of Reference */}
                            <Form.Item
                              {...formItemProps.inputField(
                                field,
                                "First Name",
                                "firstName"
                              )}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={halfSpan}>
                            {/**Last name of Reference */}
                            <Form.Item
                              {...formItemProps.inputField(
                                field,
                                "Last Name",
                                "lastName"
                              )}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>

                        {/**Second row of the reference box */}
                        <Row gutter={formGutter}>
                          <Col span={halfSpan}>
                            {/**Company of Reference */}
                            <Form.Item
                              {...formItemProps.inputField(
                                field,
                                "School/Company",
                                "schoolCompany"
                              )}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={halfSpan}>
                            {/**position within company of Reference */}
                            <Form.Item
                              {...formItemProps.inputField(
                                field,
                                "Title",
                                "title"
                              )}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>

                        {/*SCHOOL ADDRESS CONT'D (CITY, STATE, ZIPCODE)*/}
                        <Row gutter={formGutter}>
                          <Col span={halfSpan}>
                            <Form.Item
                              {...formItemProps.inputField(
                                field,
                                "Phone Number",
                                "phoneNumber"
                              )}
                              extra="Please input your phone number without any formatting."
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={halfSpan}>
                            <Form.Item
                              {...formItemProps.inputField(
                                field,
                                "Email",
                                "email",
                                "email"
                              )}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form.Item>
                    </div>
                  ))}
                  {/**Outside Reference Box */}

                  {/**Add Reference Button */}
                  <Form.Item>
                    <Button
                      {...formItemProps.addButton}
                      onClick={() => {
                        add();
                      }}
                    >
                      <PlusOutlined /> Add Reference
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>

          {/**Submit Button */}
          <Form.Item>
            <Button
              className="back-button"
              type="primary"
              htmlType="submit"
              href="#top"
              onClick={this.props.onBack}
            >
              Previous

            </Button>
            <Button
              className="next-button"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
  renderMinusButton = (fields, field, remove) => {
    return fields.length > 1 ? (
      <MinusCircleOutlined
        className="dynamic-delete-button"
        style={{
          fontSize: "18px",
          padding: "0 8px 0 0"
        }}
        onClick={() => {
          remove(field.name);
        }}
      />
    ) : null;
  };

  onFinish = values => {
    console.log('FinishRefPage:', values);
    this.props.onSubmit(values, "page4")
  };

}

export default PageReferences;
