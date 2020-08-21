import React from "react";
import styled from "styled-components";

import { CheckOutlined } from "@ant-design/icons";
//styles
import { withRouter } from "react-router-dom";

import { Menu, Layout, Collapse } from "antd";


const BannerStyle = {
    backgroundColor: " #13C2C2",
    paddingTop: "55px",
    paddingBottom: "55px",
    fontSize: "36px",
    color: "white",
    fontWeight: "normal",
    height: "180px",
}

const ContentStyle = {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F5F5F5"
}

const PageStyle = {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "10%",

    minHeight: '100vh',

    marginTop: '7.5vh'
}

const Question = styled.span`
font-size: 24px;
font-weight:500;
color:#000000;

`

const Response = styled.span`
font-size:16px;
font-weight:0;
color:#434343;

white-space:pre-line;
`

//Questions
const QuestionArray = [
    {
        "question": "How long will it take me to be matched with a business?",
        "answer": "As soon as you create an application to apply, your application is sent to all the businesses in our database that are looking for your specific qualifications. If you apply to a specific business, your application is instantly sent to them. \n\n We share your application with businesses as soon as it’s ready to send. Businesses determine when to reach out to you (using the contact information provided in your application). "
    },
    {
        "question": "How long will my profile be in the database? (i.e. Profile expiration date)",
        "answer": "We will keep sending your application to businesses for as long as you are in high school or until you delete your profile. You can always update your profile with more relevant information."
    },
]




const { Content, Header, Sider } = Layout;
const { Panel } = Collapse;



class FAQPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Layout>
                <Header
                    style={BannerStyle}
                >
                    Frequently Asked Questions
        </Header>
                <Layout>
                    <Content
                        style={ContentStyle}
                    >
                        <div
                            style={PageStyle}
                        >

                            {QuestionArray.map(list => (
                                <Collapse expandIconPosition='right' style={{ marginBottom: '2vh' }}>
                                    <Panel header={<Question>{list.question}</Question>} style={{ textAlign: 'left' }}>
                                        <Response>{list.answer}</Response>
                                    </Panel>
                                </Collapse>

                            ))}

                        </div>
                    </Content>

                </Layout>

            </Layout>
        );
    }

}
export default FAQPage;
