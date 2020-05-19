import React from 'react'
import { Form, Select, Input, Button, Checkbox, DatePicker, Radio } from "antd";
import { Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { TextArea } = Input;

//Object Destructuring
const { Option } = Select;
const { MonthPicker, RangePicker } = DatePicker;

//Formatting
const formGutter = [16, 16];
const standardSpan = 24;
const halfSpan = standardSpan / 2;
const thirdSpan = standardSpan / 3;
const quarterSpan = standardSpan / 4;


export default class pageEssays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


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

    onFinish = (values) => {
        console.log(values)
        //TO BE FILLED
        //Format the dates in the array for start and end dates
    };

    boldify = text => <strong>{text}</strong>;




    render() {
        return (
            <div style={{ marginTop: "40px", width: "100%" }}>
                <h1 style={{ textAlign: "left" }}>Written Work</h1>
                <p>We'd like to learn more about you!</p>

                <Form
                    name="basic"
                    initialValues={{
                        remember: true
                    }}
                    layout="vertical"
                    align="left"
                    width="100%"
                    onFinish={this.onFinish}
                >

                    {/**Industry response */}
                    <Form.Item
                        key="industry"
                        name="industry"
                        label={this.boldify("Why do you want to apply to this industry?")}
                        rules={this.validationRules("response")}
                    >
                        <TextArea autoSize={{ minRows: 5 }} />
                    </Form.Item>


                    {/**leadership response */}
                    <Form.Item
                        key="leadership"
                        name="leadership"
                        label={this.boldify("What are your leadership roles in your extracurriculars and what have they taught you?")}
                        rules={this.validationRules("response")}
                    >
                        <TextArea autoSize={{ minRows: 5 }} />
                    </Form.Item>


                    {/**extra information response */}
                    <Form.Item
                        key="extra"
                        name="extra"
                        label={this.boldify("Is there anything more about you that we should know?")}
                        rules={this.validationRules("response")}
                    >
                        <TextArea autoSize={{ minRows: 5 }} />
                    </Form.Item>




                    {/*Save and Continue or Next*/}
                    <Form.Item style={{ marginTop: "30px" }}>
                        <Button
                            className="next-button"
                            type="primary"
                            htmlType="submit"
                            onClick={this.props.onNext}
                        >
                            Next
                     </Button>
                    </Form.Item>

                </Form>

            </div>
        )
    }



}

