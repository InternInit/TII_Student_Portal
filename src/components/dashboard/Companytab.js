import React from 'react';
import styled from 'styled-components';
import { Collapse, Button, Modal, Input, notification, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { CheckOutlined, TeamOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { TextArea } = Input;



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
            label: <CLabel name={this.props.name} industry={this.props.industry} companyid={this.props.companyid} />,

        }
    }
    render() {
        let { label } = this.state;
        return (
            //Collapse Tab
            <Collapse defaultActiveKey={['0']} expandIconPosition='right'
                style={{ borderRadius: '8px', border: '1', boxShadow: '1px 1px 5px -4px' }}

            >
                {
                    //Dropdown Panel view
                }
                <Panel header={label} key='1'
                    style={{
                        borderRadius: '08px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        display: 'flex',
                        backgroundColor: 'white',
                        border: '1',
                        boxShadow: '1px 1px 5px -4px'
                    }}
                    onClick={this.onClick}
                >
                    {/**
                     * Dropdown
                     */}
                    <DroppedView companyid={this.props.companyid} name={this.props.name} />
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
                    <Avatar
                        size={36}
                        shape="square"
                        icon={<TeamOutlined />}
                        src={" "}
                        style={{ marginLeft: "8%", marginBottom: "14px" }}
                    />

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
    state = {
        visible: false,
    }
    render() {
        let { visible } = this.state;
        let { companyid, name } = this.props;
        return (
            <Row style={{
                justifyContent: 'space-evenly',
                marginTop: '1%',
                paddingBottom: '8px'
            }}>

                {/**
                     * Custom Response Button
                    */}
                <Button
                    className='button-style'
                    onClick={this.showModal}
                >
                    Add Custom Response
                    </Button>

                {/**
                     * Company Information Button 
                     */}
                <Link to={`/dashboard/add-companies/company-information/${companyid}`}>
                    <Button
                        className='button-style'
                        style={{
                            backgroundColor: '#52C41A',
                            color: 'white'
                        }}
                    >
                        Company Information
                    </Button>
                </Link>


                {/**
                     *Submit Button
                     */}
                <Button
                    className='button-style'
                    type='primary'
                >
                    Submit
                    </Button>

                <Modal visible={visible}
                    title={"Send Custom Response to " + name}
                    onCancel={this.cancelReponse}
                    onOk={this.submitResponse}

                    okText="Submit"
                    width='100vh'
                >

                    <TextArea
                        autoSize={{ minRows: 5, maxRows: 10 }}

                    />

                </Modal>
            </Row>
        )
    }
    showModal = () => {
        this.setState({ visible: true })
    }
    submitResponse = () => {
        this.setState({ visible: false })
        notification.open({
            //notification
            message: "Success!",
            description: "Your response was sent successfully.",
            icon: <CheckOutlined style={{ color: "green" }} />
        });
    }

    cancelReponse = () => {
        this.setState({ visible: false })
    }
}