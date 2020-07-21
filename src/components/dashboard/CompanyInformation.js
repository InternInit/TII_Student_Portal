import React from 'react'
import styled from 'styled-components'
import { Divider, Breadcrumb } from 'antd'

const ModuleContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 3%;
  flex-direction:column;
  margin-top:10px;
`;
const Image = styled.img`
width:40px;
height:40px;
background-color:blue;
border-radius:20px;
`

const Caption = styled.div`
display:flex;
text-align:left;
font-size:18px;
font-weight:normal;
color:#262626;
width:80%;
margin-top:10px;
`

const Header = styled.div`
font-size:28px;
font-weight:500;
color:#595959;
margin-top:50px;
`
const Row = styled.div`
 display:flex;
 flex-direction:column;
 align-items:flex-start;
 `


function CompanyInformation() {

    return (<React.Fragment>
        {/**
                 * 
                 * Breadcrumb
                 * 
                 */}
        <Breadcrumb style={{
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'row',
            fontWeight: '500',
            marginTop: '30px',
            marginLeft: '55px'
        }}>
            <Breadcrumb.Item>
                Add Companies
                </Breadcrumb.Item>
            <Breadcrumb.Item>
                Facebook
                </Breadcrumb.Item>
        </Breadcrumb>


        <ModuleContainer>


            {/**
                 * 
                 * Company Logo and Name
                 * 
                 */}
            <Row style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Image src="" alt="Logo" style={{ marginTop: '10px' }} />
                <Header style={{
                    fontSize: '36px',
                    textAlign: 'left',
                    marginLeft: '15px',
                    color: '#8C8C8C',
                    marginTop: '0px'
                }}>Company Name</Header>
            </Row>


            {/**
                 * 
                 * Divider
                 * 
                 */}
            <Divider >
                <Header style={{
                    color: '#595959',
                    paddingBottom: '25px',
                    marginTop: '25px'
                }}>Company Overview
                     </Header>
            </Divider>


            {/**
                 * 
                 * Company Description
                 * 
                 */}
            <Row>
                <Header >
                    Company Description
                    </Header>
                <Caption>
                    Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don’t know, online.
                    It allows users to share pictures, music, videos, and articles, as well as their own thoughts and opinions with however many people they like.

                    Users send “friend requests” to people who they may – or may not – know.

                    Facebook has over 1 billion users

                    </Caption>
            </Row>


            {/**
                 * 
                 * Images + Caption
                 * 
                 */}
            <Row style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: '45px',
                marginBottom: '45px'
            }}>
                <Row>
                    <Image src="" alt="Logo" style={{ marginTop: '10px', width: '500px', height: '250px', borderRadius: '8px' }} />
                    <Caption> Image of Company</Caption>
                </Row>

                <Row>
                    <Image src="" alt="Logo" style={{ marginTop: '10px', width: '500px', height: '250px', borderRadius: '8px' }} />
                    <Caption> Image of Company</Caption>
                </Row>
            </Row>


            {/**
                 * 
                 * Divider
                 * 
                 */}
            <Divider >
                <Header style={{
                    color: '#595959',
                    paddingBottom: '25px',
                    marginTop: '25px'
                }}>Internship Information
                  </Header>
            </Divider>


            {/**
                 * 
                 * Intership Description
                 * 
                 */}
            <Row>
                <Header >
                    Description
                    </Header>
                <Caption>
                    looking for an object-oriented Java Developer... Java Servlets, HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable.
                    Familiarity with Tomcat and the Java...
                    </Caption>
            </Row>


            {/**
                 * 
                 * Location
                 * 
                 */}
            <Row>
                <Header >
                    Location
                    </Header>
                <Caption>
                    Austin, TX
                    </Caption>
            </Row>


            {/**
                 * 
                 * Location
                 * 
                 */}
            <Row>
                <Header >
                    Industry
                    </Header>
                <Caption>
                    Industry 1, Industry 2
                    </Caption>
            </Row>


            {/**
                 * 
                 * Work Period
                 * 
                 */}
            <Row>
                <Header >
                    Work Period
                    </Header>
                <Caption>
                    Start Date:1, Finish Date:10
                    </Caption>
            </Row>


            {/**
                 * 
                 * Additional Information
                 * 
                 */}
            <Row style={{ marginBottom: '45px' }}>
                <Header >
                    Additional Information
                    </Header>
                <Caption>
                    - AP CSA
                    - AP CSP
                    - Idk man, Python
                    - This could also be where we post acedemic credentials or something
                    - The company needs
                    </Caption>
            </Row>


            {/**
                 * 
                 * Divider
                 * 
                 */}
            <Divider >
                <Header style={{
                    color: '#595959',
                    paddingBottom: '25px',
                    marginTop: '25px'
                }}>Contact Information
                  </Header>
            </Divider>


            {/**
                 * 
                 * Website
                 * 
                 */}
            <Row>
                <Header >
                    Website
                    </Header>
                <Caption>
                    Click Here!
                    </Caption>
            </Row>


            {/**
                 * 
                 * Email
                 * 
                 */}
            <Row>
                <Header >
                    Website
                    </Header>
                <Caption>
                    Email@gmail.com
                    </Caption>
            </Row>


            {/**
                 * 
                 * Phone Number
                 * 
                 */}
            <Row>
                <Header >
                    Phone Number
                    </Header>
                <Caption>
                    123-456-7891
                    </Caption>
            </Row>


            {/**
                 * 
                 * Links To Social
                 * 
                 */}
            <Row>
                <Header >
                    Links
                    </Header>
                <Row style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    width: '20%'
                }}>
                    <Image src="" alt="Logo" style={{ marginTop: '10px' }} />
                    <Image src="" alt="Logo" style={{ marginTop: '10px' }} />
                    <Image src="" alt="Logo" style={{ marginTop: '10px' }} />
                    <Image src="" alt="Logo" style={{ marginTop: '10px' }} />

                </Row>
            </Row>



        </ModuleContainer>
    </React.Fragment>)
}

export default CompanyInformation