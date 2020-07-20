import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
const { Panel } = Collapse;


const CompanyTitle = styled.div`
font-size:32px;
font-weight:bold;
color:black;
align-items: center;
height:29px;
`

const JobTitle = styled.div`
font-size:14px;
font-weight:500;
color:#262626;
padding-top:2px;
margin-bottom:4px;
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
border-radius:6px;
`


class Companytab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: <CLabel name={this.props.name} industry={this.props.industry} />,

        }
    }
    render() {
        let { label } = this.state;
        return (
            //Collapse Tab
            <Collapse defaultActiveKey={['0']} expandIconPosition='right'
                style={{ borderRadius: '8px', border: '0' }}
            >
                {
                    //Dropdown Panel view
                }
                <Panel header={label} key='1'
                    style={{
                        height: { DroppedView },
                        borderRadius: '08px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingBottom: '5px',
                        paddingTop: '5px',
                        backgroundColor: 'white',
                        border: '0'
                    }}
                    onClick={this.onClick}
                >
                    {/**
                     * Dropdown
                     */}
                    <DroppedView />
                </Panel>
            </Collapse >
        )
    }
} export default Companytab


//Tab View of the Company Tab
class CLabel extends React.Component {
    render() {
        let { name, industry } = this.props;
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
                        <CompanyTitle>{name}</CompanyTitle>
                        <JobTitle>{industry}</JobTitle>
                    </Col>
                </Row>
            </Row>
        )
    }
}

//Dropped View of the Company Tab
class DroppedView extends React.Component {
    render() {
        return (
            <Row style={{
                justifyContent: 'space-evenly',
                marginTop: '1%',
                paddingBottom: '8px'
            }}>

                {/**
                     * Custom Response Button
                    */}
                <Button style={{
                    backgroundColor: '#BFBFBF',
                    color: '#434343',
                    fontWeight: '500'
                }}>
                    Add Custom Response
                    </Button>


                {/**
                     * Company Information Button 
                     */}
                <Button style={{
                    backgroundColor: '#52C41A',
                    color: 'white'
                }}>
                    Company Information
                    </Button>


                {/**
                     *Submit Button
                     */}
                <Button style={{
                    backgroundColor: '#BCDFFF',
                    color: 'white'
                }}>
                    Submit
                    </Button>
            </Row>
        )
    }
}