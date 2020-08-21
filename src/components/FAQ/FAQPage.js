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
font-size: 22px;
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
    {
        "question": "How is my information being handled?",
        "answer": "As high schoolers, we know the importance of handling user data responsibly and ethically. This is why we have a minimalist approach when asking for information; we only ask what is essential to a job application. However, if you don’t feel comfortable with providing even this information, we don’t require you to. \n\nFor the information we do receive, it is being managed securly and responsibly."
    },
    {
        "question": "How will I know when I’m matched with a business?",
        "answer": "Once a business decides to move forward with your application, then they will reach out to you via the contact information provided in your application."
    },
    {
        "question": "Is this really free?",
        "answer": "100%. We don’t have any hidden fees and we don’t sell your data. If we’re trying to level the playing field by reducing barriers to internship opportunities, it wouldn’t make sense for us to create a price barrier for students. The way we generate revenue is through charging a small service fee for businesses."
    },
    {
        "question": "How many businesses can I apply to?",
        "answer": "As many as are in our database. What’s better? You only have to use one application.\n\nAmazing right?"
    },
    {
        "question": "What if I don’t know how to make a resume, cover letter, etc.?",
        "answer": "We anticipated this question and created a compilation of educational resources to answer your specific questions in our APPLY SKILLS Tab. There, you will find different articles covering topics from resumes to interview prep. to help you strengthen your application. "
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
                                <Collapse expandIconPosition='right' style={{ marginBottom: '8vh', border: '0', backgroundColor: '#f5f5f5' }}>
                                    <Panel header={<Question>{list.question}</Question>} style={{ textAlign: 'left', border: '0', }}>
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
