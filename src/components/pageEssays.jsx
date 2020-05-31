import React from "react";
import { Form, Input, Button, message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "../App.css";

//Object Destructuring
const { TextArea } = Input;
const { Dragger } = Upload;

//Handles file uploading
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  multiple: true,
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

export default class pageEssays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ marginTop: "40px", width: "100%" }}>
        <h1 style={{ textAlign: "left" }}>Written Work</h1>
        <p>We'd like to learn more about you!</p>

        <Form
          name="pageEssays"
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
            key="industryEssay"
            name="industryEssay"
            label={this.boldify("Why do you want to apply to this industry?")}
            rules={this.validationRules("response")}
          >
            <TextArea autoSize={{ minRows: 5 }} />
          </Form.Item>

          {/**leadership response */}
          <Form.Item
            key="leadership"
            name="leadership"
            label={this.boldify(
              "What are your leadership roles in your extracurriculars and what have they taught you?"
            )}
            rules={this.validationRules("response")}
          >
            <TextArea autoSize={{ minRows: 5 }} />
          </Form.Item>

          {/**extra information response */}
          <Form.Item
            key="extra"
            name="extra"
            label={this.boldify(
              "Is there anything more about you that we should know?"
            )}
            rules={this.validationRules("response")}
          >
            <TextArea autoSize={{ minRows: 5 }} />
          </Form.Item>

          {/**Cover Letter */}
          <Form.Item
            name="CoverLetter"
            key="CoverLetter"
            label={this.boldify("Cover Letter (Optional)")}
          >
            <Dragger {...props} style={{ width: "250px", height: "30px" }} customRequest={this.customRequestCL}>
              <h1 style={{ color: "blue" }}>
                <InboxOutlined />
              </h1>
              <h5>Click or Drag Files to Upload Here</h5>
            </Dragger>
          </Form.Item>

          {/**Portfolio */}
          <Form.Item
            name="Portfolio"
            key="Portfolio"
            label={this.boldify("Portfolio")}
          >
            <Dragger {...props} style={{ width: "250px", height: "30px" }} customRequest={this.customRequestPortfolio}>
              <h1 style={{ color: "blue" }}>
                <InboxOutlined />
              </h1>
              <h5>Click or Drag Files to Upload Here</h5>
            </Dragger>
          </Form.Item>

          {/*Save and Continue or Next*/}
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
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
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

  onFinish = values => {
    console.log('FinishedPageEssays:', values);
    this.props.onNext(values, "3")
  };

  customRequestCL = ({ onSuccess, onError, file }) => {
    setTimeout(() => {
      onSuccess(file)
      const source = "CoverLetter"
      this.props.uploadFile(file, source);
    }, 100);

  };

  customRequestPortfolio = ({ onSuccess, onError, file }) => {
    setTimeout(() => {
      onSuccess(file)
      const source = "Portfolio"
      this.props.uploadFile(file, source);
    }, 100);

  };

  boldify = text => <strong>{text}</strong>;
}
