import React from 'react';
import styled from 'styled-components';
import { RightOutlined, DownOutlined } from "@ant-design/icons";
import { Menu, Collapse } from 'antd';
import AProgressTab from "./applicationProgressTabView.js";
const { Panel } = Collapse;


const CompanyTitle = styled.div`
font-size:36px;
font-weight:500;
color:black;
align-items: center;
height:29px;
`

const JobTitle = styled.div`
font-size:14px;
font-weight:normal;
color:#262626;
padding-top:6px;
`
const Button = styled.div`
color:white;
background-color:green;
font-size:18px;
border-radius:2px;
width:336px;
height:36px;
display:flex;
align-self:center;
align-items:center;
justify-content:center;
box-shadow: 1px 3px 1px #d9d9d9;
:hover{
    cursor:pointer;
}
`

const Col = styled.div`
display:flex;
flex-direction:column;
`

const Row = styled.div`
display:flex;
flex-direction:row;
`


const Image = styled.img`
width:36px;
height:36px;
object-fit:contain;
background-color:blue;
margin-left:3.5%;
margin-bottom:24px;
`


class Companytab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: <CLabel />,

        }
    }
    render() {
        let { label } = this.state;
        return (
            <Collapse defaultActiveKey={['0']} expandIconPosition='right'

            >
                <Panel header={label} key='1' style={{
                    height: { DroppedView },
                    borderRadius: '08px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    display: 'flex',
                    paddingBottom: '5px',
                    paddingTop: '5px',
                    backgroundColor: 'white',
                }}

                    onClick={this.onClick}


                >
                    <DroppedView />
                </Panel>

            </Collapse >
        )
    }
} export default Companytab



class CLabel extends React.Component {
    render() {
        return (
            <Row style={{
                borderRadius: '08px',
                justifyContent: 'center',

            }}>
                {/**Company Logo + Name + Position */}
                <Row style={{
                    width: '92.5%',
                    alignItems: 'center'
                }}>

                    {/**company logo */}
                    <Image src='' alt='Logo' />

                    {/**company name and job */}
                    <Col style={{
                        marginLeft: '30px',
                        alignItems: 'flex-start',

                    }}>
                        <CompanyTitle>Tesla</CompanyTitle>
                        <JobTitle>Communications/ Data Science</JobTitle>
                    </Col>
                </Row>
            </Row>
        )
    }
}


class DroppedView extends React.Component {
    render() {
        return (
            <Col style={{ padding: '12px' }}>

                <AProgressTab />
                <Row style={{
                    justifyContent: 'space-evenly',
                    marginTop: '1%',
                    paddingTop: '8px',
                    paddingBottom: '8px'
                }}>

                    {/**Button */}
                    <Button style={{
                        backgroundColor: '#BFBFBF',
                        color: 'black'
                    }}>
                        Add Custom Response
                    </Button>


                    {/**Button */}
                    <Button style={{
                        backgroundColor: '#52C41A',
                        color: 'white'
                    }}>
                        Company Information
                    </Button>


                    {/**Button */}
                    <Button style={{
                        backgroundColor: '#BCDFFF',
                        color: 'white'
                    }}>
                        Submit
                    </Button>
                </Row>
            </Col>
        )
    }
}