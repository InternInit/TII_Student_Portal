import React from 'react'
import styled from 'styled-components'
import { Divider, Breadcrumb, Avatar } from 'antd'
import { TeamOutlined } from '@ant-design/icons'

const ModuleContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 3%;
  flex-direction:column;
  margin-top:10px;
`;
const Image = styled.img`
background-color:#d9d9d9;
width:65vh;
height:225px;
border-radius:8px;

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

let info = {}


class CompanyInformation extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        info: {}
      };
    }

    componentDidMount(){
      let idList = []
      let id = window.location.href.split("/")[6]
      idList.push(id)
      this.matchBusinesses(JSON.stringify(idList))
      window.scrollTo(0,0);
    }

    matchBusinesses(businessList){
      fetch("/api/match_businesses", {
        method: "POST",
        body: JSON.parse(JSON.stringify(businessList))
      })
        .then(response => response.json())
        .then(data => {
          try{
            let matchedBusinessesArray = [];
            JSON.parse(data).hits.hits.forEach(item => matchedBusinessesArray.push(item._source));
            //console.log(matchedBusinessesArray)
            this.setState({info:matchedBusinessesArray[0]})
          } catch (e) {
            console.log(e)
          }
        });
    }

    render(){
      return (
        <React.Fragment >
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
                  {this.state.info.name}
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
                  <Avatar size={40} src={this.state.info.avatar} style={{ marginTop: '10px' }} />
                  <Header style={{
                      fontSize: '36px',
                      textAlign: 'left',
                      marginLeft: '15px',
                      color: '#8C8C8C',
                      marginTop: '0px'
                  }}>{this.state.info.name}</Header>
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
                      {this.state.info.description}

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
                  justifyContent: 'center',
                  marginTop: '45px',
                  marginBottom: '45px'
              }}>
                  <Row>
                      <Image src={this.state.info.avatar} alt="Logo" style={{ marginTop: '10px' }} />
                  </Row>
                  <Row>

                      <Image src="https://citybizlist.com/media/images/large/1545083234_2689.jpg" alt="Logo" style={{ marginTop: '10px' }} />
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
                      {this.state.info.description}
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
                      {this.state.info.location}
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
                      {this.state.info.industry}
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
                      June 10, 2020, September 31st, 2020
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
                      - Must be 18+
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
                      E-Mail
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
                  }}>
                      <Avatar size={36} src="" alt="Logo" style={{ marginTop: '10px' }} />
                      <Avatar size={36} src="" alt="Logo" style={{ marginTop: '10px', marginLeft: '10px' }} />
                      <Avatar size={36} src="" alt="Logo" style={{ marginTop: '10px', marginLeft: '10px' }} />
                      <Avatar size={36} src="" alt="Logo" style={{ marginTop: '10px', marginLeft: '10px' }} />

                  </Row>
              </Row>



          </ModuleContainer>
      </React.Fragment>)
  }
}

export default CompanyInformation
