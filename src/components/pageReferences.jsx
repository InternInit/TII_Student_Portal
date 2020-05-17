import React from "react";
import { Form, Divider, Input, Button, } from "antd";
import { Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";


//Formatting
const formGutter = [16, 16];
const standardSpan = 24;
const halfSpan = standardSpan / 2;



export default class PageReferences extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}


    }
    render() {
        return (
            <Ref />


        );
    }
}

const rules = [{ required: true }];


class Ref extends React.Component {

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
            <Form onFinish={this.onFinish} className="my-form">
                <Form.List name="users">
                    {(fields, { add, remove }) => {
                        /**
                         * `fields` internal fill with `name`, `key`, `fieldKey` props.
                         * You can extends this into sub field to support multiple dynamic fields.
                         */
                        return (
                            <div style={{ marginTop: "60px" }}>
                                <Col>
                                    <Divider />
                                    <Row gutter={formGutter}>
                                        <Col span={halfSpan}>
                                            <Form.Item
                                                key="firstName"
                                                label={this.boldify("First Name")}
                                                name="firstName"
                                                rules={this.validationRules("first name", "string")}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={halfSpan}>
                                            <Form.Item
                                                key="lastName"
                                                label={this.boldify("Last Name")}
                                                name="lastName"
                                                rules={this.validationRules("last name", "string")}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row gutter={formGutter}>
                                        <Col span={halfSpan}>
                                            <Form.Item
                                                key="school/Company"
                                                label={this.boldify("School/Company")}
                                                name="school/Company"
                                                rules={this.validationRules("School/Company", "string")}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={halfSpan}>
                                            <Form.Item
                                                key="Title"
                                                label={this.boldify("Title")}
                                                name="title"
                                                rules={this.validationRules("Title", "string")}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>


                                    <Row gutter={formGutter}>
                                        <Col span={halfSpan}>
                                            <Form.Item
                                                key="phoneNumber"
                                                label={this.boldify("Phone Number")}
                                                name="phoneNumber"
                                                extra="Please input your phone number without any formatting."
                                                rules={this.validationRules("phone number")}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={halfSpan}>
                                            <Form.Item
                                                key="email"
                                                label={this.boldify("Email")}
                                                name="email"
                                                rules={this.validationRules("email", "email")}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </Col>

                                {/** These are the forms added by the "add Reference" button */}
                                {fields.map((field, index) => (
                                    <Col>
                                        <Divider />
                                        <Row gutter={formGutter}>
                                            <Col span={halfSpan}>
                                                <Form.Item
                                                    key="firstName"
                                                    label={this.boldify("First Name")}
                                                    name="firstName"
                                                    rules={this.validationRules("first name", "string")}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={halfSpan}>
                                                <Form.Item
                                                    key="lastName"
                                                    label={this.boldify("Last Name")}
                                                    name="lastName"
                                                    rules={this.validationRules("last name", "string")}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <Row gutter={formGutter}>
                                            <Col span={halfSpan}>
                                                <Form.Item
                                                    key="school/Company"
                                                    label={this.boldify("School/Company")}
                                                    name="school/Company"
                                                    rules={this.validationRules("School/Company", "string")}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={halfSpan}>
                                                <Form.Item
                                                    key="Title"
                                                    label={this.boldify("Title")}
                                                    name="title"
                                                    rules={this.validationRules("Title", "string")}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>


                                        <Row gutter={formGutter}>
                                            <Col span={halfSpan}>
                                                <Form.Item
                                                    key="phoneNumber"
                                                    label={this.boldify("Phone Number")}
                                                    name="phoneNumber"
                                                    extra="Please input your phone number without any formatting."
                                                    rules={this.validationRules("phone number")}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={halfSpan}>
                                                <Form.Item
                                                    key="email"
                                                    label={this.boldify("Email")}
                                                    name="email"
                                                    rules={this.validationRules("email", "email")}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>








                                    </Col>
                                ))}
                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => {
                                            add();
                                        }}
                                        style={{ width: "100%" }}
                                    >
                                        <PlusOutlined /> Add Reference
                      </Button>
                                </Form.Item>
                            </div>
                        );
                    }}
                </Form.List>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
              </Button>
                </Form.Item>
            </Form>
        );
    };
}





