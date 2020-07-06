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

const Tab = styled.div`
font-size:22px;
display:flex;
align-self:center;
:hover{
    cursor:pointer;
}
`



class Companytab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: <CLabel />,
            dropheight: '90px'

        }
    }
    render() {
        let { label, dropheight } = this.state;
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
            <div style={{

                borderRadius: '08px',
                flexDirection: 'row',
                justifyContent: 'center',
                display: 'flex',
                backgroundColor: 'white'

            }}>
                {/**Company Logo + Name + Position */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    width: '92.5%',
                    alignItems: 'center'
                }}>

                    {/**company logo */}
                    <img style={{
                        width: '36px',
                        height: '36px',
                        objectFit: 'contain',
                        backgroundColor: 'blue',
                        marginLeft: '3.5%',
                        marginBottom: '18px'
                    }} src='' alt='Logo' />

                    {/**company name and job */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        marginLeft: '30px',
                        alignItems: 'flex-start',

                    }}>
                        <CompanyTitle>Tesla</CompanyTitle>
                        <JobTitle>Communications/ Data Science</JobTitle>
                    </div>
                </div>


            </div>
        )
    }
}

class DroppedView extends React.Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '12px'
            }}>
                <AProgressTab />
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: '1%',
                    paddingTop: '8px',
                    paddingBottom: '8px'
                }}>
                    <Button style={{
                        backgroundColor: '#BFBFBF',
                        color: 'black'
                    }}>
                        Add Custom Response
                    </Button>

                    <Button style={{
                        backgroundColor: '#52C41A',
                        color: 'white'
                    }}>
                        Company Information
                    </Button>

                    <Button style={{
                        backgroundColor: '#BCDFFF',
                        color: 'blawhiteck'
                    }}>
                        Submit
                    </Button>
                </div>
            </div>
        )
    }
}






