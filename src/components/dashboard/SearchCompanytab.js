import React from 'react'
import styled from 'styled-components'

const CompanyTitle = styled.div`
font-size:36px;
font-weight:500;
color:black;
align-items: center;
height:29px;
margin-bottom:10px;
`


const JobTitle = styled.div`
font-size:14px;
font-weight:normal;
color:#262626;
margin-bottom:10px;
margin-top:6px;
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


const QVCompany = styled.div`
font-size:18px;
font-weight:normal;
color:#262626;
`


const QVTitle = styled.div`
font-size:24px;
font-weight:500;
color:black;
`


const QVCaption = styled.div`
font-size:18px;
font-weight:normal;
color:#262626;
width:75%;
text-align:left;
`
const Col = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`


const Image = styled.img`
width:400px;
height:150px;
background-color:blue;
border-radius:10px;
`


const Logo = styled.img`
width:36px;
height:36px;
object-fit:contain;
background-color:blue;
margin-left:11%;
margin-bottom:14px;
 `

const TabContainer = styled.div`
display:flex;
border-radius:8px;
flex-direction:row;
justify-content:center;
padding-bottom:5px;
padding-top:5px;
outline-style:solid;
outline-width:.5px;
outline-color:#d9d9d9;
background-color:white;
            
 `


class SearchCompanytab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let { show } = this.state;
        let ctab = <CLabel name={this.props.name} />


        if (show === true) {
            ctab = <QuickView name={this.props.name} />
        }

        return (<div
            onClick={this.handleClick}>
            {/**Tab variable, is switched between quickview and standard */}
            {ctab}
        </div >
        )
    }


    //Handles Switching of Tab


    handleClick = () => {
        this.setState({ show: !this.state.show })
    }



} export default SearchCompanytab


/*

Standard View of the Tab.

*/

class CLabel extends React.Component {
    render() {
        let { name } = this.props;

        return (
            <TabContainer>

                {/**Company Logo + Name + Position */}
                < div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center'
                }}>

                    {/**company logo */}
                    < Logo src='' alt='Logo' />

                    {/**company name and job */}
                    < Col style={{
                        marginLeft: '30px',
                        alignItems: 'flex-start',

                    }}>
                        <CompanyTitle>{name}</CompanyTitle>

                        <JobTitle style={{ paddingTop: '4px' }}>Communications/ Data Science</JobTitle>
                    </Col >
                </div >


            </TabContainer >
        )
    }
}


/*

Quick View of the Tab.
Gives additional Information when hovered over

*/
class QuickView extends React.Component {
    render() {
        let { name } = this.props;
        return (<TabContainer style={{
            padding: '24px'
        }}>

            {/**
 * 
 * Left Collumn
 * 
 */}
            < Col style={{
                alignItems: 'flex-start',
                marginLeft: '10%'
            }}>


                <QVCompany>{name}</QVCompany>
                <QVTitle>Communications/ Data Science</QVTitle>
                <QVCompany style={{
                    marginTop: '10px',
                    fontWeight: '500'
                }}>Description</QVCompany>

                <QVCaption>
                    Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don’t know, online.zz It allows users to share pictures...
                </QVCaption>
            </Col >


            {/**
 * 
 * Right Collumn
 * 
 */}
            < Col style={{
                alignItems: 'flex-end',
                marginRight: '10%',
                width: '50%'
            }}>
                <Image src='' alt='Company Visual' />

                <div style={{
                    display: 'flex',
                    marginTop: '5%',
                    justifyContent: 'space-between',
                    marginRight: '5%'
                }}>



                    <Col style={{
                        marginRight: '5%',
                    }}>

                        <QVCompany style={{ fontWeight: '500' }}>
                            Location
                        </QVCompany>
                        <QVCaption style={{ textAlign: 'center', width: '150px' }}>Austin, TX</QVCaption>

                    </Col>

                    <Col>
                        <Button style={{ backgroundColor: '#1890FF' }} >Add</Button>
                        <Button style={{
                            backgroundColor: '#BFBFBF',
                            color: 'black',
                            marginTop: '10px',
                        }}>More Details</Button>
                    </Col>

                </div>
            </Col >
        </TabContainer >)
    }
}
