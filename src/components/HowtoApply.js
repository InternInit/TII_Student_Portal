import React from 'react'
import styled from "styled-components";
import Internshipimg from '../How_To_Apply/internshipinfo.JPG'
import Personalimg from '../How_To_Apply/personal.JPG'
import Writtenimg from '../How_To_Apply/written.JPG'
import Referencesimg from '../How_To_Apply/reference.JPG'
import { CheckOutlined } from '@ant-design/icons';
//styles
const Banner = styled.div`
background-color: #8fc3d1;
padding:55px;
font-size:36px;
color:white;
font-weight:normal;
`;
const Header = styled.div`
padding:10px;
font-size:28px;
font-weight:bold;
display:flex;
justify-content:align-left;
padding-left:20px;
margin-top:90px;
`;
const Text = styled.div`
padding:5px;
font-weight:normal;
display:flex;
width:90%;
font-size:18px;
justify-content:align-left;
padding-left:30px;
`;
const Bullet = styled.div`
font-weight:normal;
display:flex;
font-size:18px;
justify-content:align-left;
padding-left:50px;

`;
const Image = styled.img`
border-radius:20px;
padding:30px;
width:70%;
height:70%;
object-fit:scale-down;
pointer-events: none;
`;
const Caption = styled.div`
padding:5px;
font-weight:normal;
display:flex;
font-size:18px;
width:90%;
`;

//THIS IS BEING TESTED INSTEAD OF INTERNSHIPINFORMATION, MAKE SURE TO CHANGE ROUTE BACK WHEN FINISHED!

class HowtoApply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div style={{
                display: "flex",
                width: "100%",
                height: "100%",
                flexDirection: "column",
                alignItems: 'center'
            }}>

                <Banner style={{ width: '100%' }}>
                    How to Apply
                 </Banner>

                <div style={{
                    width: '70%',
                    display: "flex",
                    flexDirection: 'column',
                }}>
                    <Header style={{
                        marginTop: '110px'
                    }}>
                        It's Simple!
                    </Header>
                    <Text>
                        Fill out the information form found on the "Apply" tab. When filling out the form, make sure to:
                    </Text>
                    <Bullet>
                        - Be specific, give us as much information as you can.
                    </Bullet>
                    <Bullet>
                        - Make sure to fill out all the necessary forms so we can fulfill company requirements
                    </Bullet>
                    <Bullet>
                        - Submit when everything is filled out!
                    </Bullet>

                    {/**Things you will Need */}
                    <Header>
                        Things you need
                    </Header>
                    <Text>
                        In order to apply, make sure you have the following information:
                    </Text>
                    <Bullet style={{ marginTop: '15px' }}>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />Weighted and Unweighted Grade Point Average (GPA)
                        </Bullet>
                    <Bullet>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />List of interested industries (Ie. Finance or Biotechnology)
                        </Bullet>
                    <Bullet>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />List of relevant courses taken
                        </Bullet>
                    <Bullet>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />List of extracurricular activities
                        </Bullet>
                    <Bullet>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />Year of Graduation (Must be at least a high school Sophomore to high school Senior)
                        </Bullet>
                    <Bullet>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />Availability to work
                        </Bullet>
                    <Bullet>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />Resumé or CV
                        </Bullet>
                    <Bullet>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />List Item
                        </Bullet>
                    <Bullet>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />Cover Letter (Optional)
                        </Bullet>
                    <Bullet>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />Letters of Recommendation (1 required, but 2 is advised)
                        </Bullet>
                    <Bullet>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />Transcript
                        </Bullet>
                    <Bullet>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />School Profile
                        </Bullet>
                    <Bullet>
                        <CheckOutlined style={{ color: 'green', paddingRight: '10px' }} />List of Accomplishments/Achievements
                        </Bullet>



                    {/**Internship Information */}
                    <Header>
                        Internship Information
                    </Header>
                    <div style={{ backgroundColor: '#ededed', width: '100%' }}>
                        <Image src={Internshipimg} alt='internshipinfo' />
                    </div>
                    <Caption>
                        This is where you will fill out information regarding your preferences and desires in internships.
                        For example, if you wanted to apply for a company in the Real Estate industry,
                        this is where you would state that information.
                    </Caption>


                    {/**Personal Information */}
                    <Header>
                        Personal Information
                    </Header>
                    <div style={{ backgroundColor: '#ededed', width: '100%' }}>
                        <Image src={Personalimg} alt='Personal' />
                    </div>
                    <Caption>
                        This is where you will give us personal information about yourself. This includes, gender, race, and educational history.
                    </Caption>


                    {/**Written Work */}
                    <Header>
                        Written Work
                    </Header>
                    <div style={{ backgroundColor: '#ededed', width: '100%' }}>
                        <Image src={Writtenimg} alt='Personal' />
                    </div>
                    <Caption>
                        Please will tell us more about yourself! Remember to be specific and answer in complete sentences.
                        It is also where you will give us additional information that could be useful.
                    </Caption>



                    {/**References */}
                    <Header>
                        References                </Header>
                    <div style={{ backgroundColor: '#ededed', width: '100%' }}>
                        <Image src={Referencesimg} alt='Personal' />
                    </div>
                    <Caption>
                        Fill out the reference tab and and add references as needed.
                        A reference could be someone you worked with in the past, or a trusted adult.
                    </Caption>

                </div >
            </div>
        )
    }
}
export default HowtoApply;