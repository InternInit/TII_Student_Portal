import React from "react";
import { Form, Input, Button } from "antd";
import { Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "../App.css";

//Formatting
const formGutter = [16, 16];
const standardSpan = 24;
const halfSpan = standardSpan / 2;

export default class PageReferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Ref />;
  }
}

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

class Ref extends React.Component {
  //Functions
  //THIS NEEDS TO BE FIXED ASAP!!!
  handleChange = event => {
    this.setState({ otherIndustry: event.target.value });
    console.log(this.state);
  };

  validationRules = (inputName, type) => [
    {
      required: true,
      message: "Please input your " + inputName,
      type: type
    }
  ];

  onFinish = () => {
    //TO BE FILLED
    //Format the dates in the array for start and end dates
  };

  boldify = text => <strong>{text}</strong>;

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Form
          layout="vertical"
          align="left"
          onFinish={this.onFinish}
          className="pageReferences"
        >
          <Form.List name="reference">
            {(fields, { add, remove }) => {
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
                        {fields.length > 1 ? (
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
                        ) : null}

                        {/**First row of reference box */}
                        <Row gutter={formGutter}>
                          <Col span={halfSpan}>
                            {/**First name of Reference */}
                            <Form.Item
                              key={[field.fieldKey, "firstname"]}
                              label={this.boldify("First Name")}
                              name={[field.name, "firstName"]}
                              rules={this.validationRules(
                                "first name",
                                "string"
                              )}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={halfSpan}>
                            {/**Last name of Reference */}
                            <Form.Item
                              key={[field.fieldKey, "lastname"]}
                              label={this.boldify("Last Name")}
                              name={[field.name, "lastName"]}
                              rules={this.validationRules(
                                "last name",
                                "string"
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
                              key={[field.fieldKey, "school/Company"]}
                              label={this.boldify("School/Company")}
                              name={[field.name, "school/Company"]}
                              rules={this.validationRules(
                                "School/Company",
                                "string"
                              )}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={halfSpan}>
                            {/**position within company of Reference */}
                            <Form.Item
                              key={[field.fieldKey, "Title"]}
                              label={this.boldify("Title")}
                              name={[field.name, "title"]}
                              rules={this.validationRules("Title", "string")}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>

                        {/*SCHOOL ADDRESS CONT'D (CITY, STATE, ZIPCODE)*/}
                        <Row gutter={formGutter}>
                          <Col span={halfSpan}>
                            <Form.Item
                              key={[field.fieldKey, "PhoneNumber"]}
                              label={this.boldify("Phone Number")}
                              name={[field.name, "phoneNumber"]}
                              extra="Please input your phone number without any formatting."
                              rules={this.validationRules("phone number")}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={halfSpan}>
                            <Form.Item
                              key={[field.fieldKey, "Email"]}
                              label={this.boldify("Email")}
                              name={[field.name, "email"]}
                              rules={this.validationRules("email", "email")}
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
                      type="dashed"
                      size="large"
                      onClick={() => {
                        add();
                      }}
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        marginBottom: "30px"
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
              onClick={this.props.onBack}
            >
              Previous
            </Button>
            <Button className="submit-button" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
