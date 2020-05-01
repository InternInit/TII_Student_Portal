import React from "react";
import { Form, Select, Input, Button, Checkbox, DatePicker, Radio } from "antd";
import { Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";


//Formatting
const formGutter = [16, 16];
const standardSpan = 24;
const halfSpan = standardSpan / 2;



export default class pageReferences extends React.Component {
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


class Ref extends React.Component {
    render() {
        return (
            <div>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true
                    }}
                    layout="vertical"
                    align="left"
                >

                    {/**First and Lastname form */}
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

                    {/**Company and school form */}
                    <Row gutter={formGutter}>
                        <Col span={halfSpan}>
                            <Form.Item
                                key="Company/School"
                                label={this.boldify("Company/School")}
                                name="Company/School"
                                rules={this.validationRules("Company/School", "string")}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={halfSpan}>
                            <Form.Item
                                key="title"
                                label={this.boldify("Title")}
                                name="title"
                                rules={this.validationRules("title", "string")}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/**Phone number and email form */}
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

                </Form>
            </div>


        )
    }

}



