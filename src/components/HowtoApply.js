import React from 'react'
import styled from "styled-components";
import Internshipimg from '../How_To_Apply/internshipinfo.JPG'
import Personalimg from '../How_To_Apply/personal.JPG'
import Writtenimg from '../How_To_Apply/written.JPG'
import Referencesimg from '../How_To_Apply/reference.JPG'

//styles
const Banner = styled.div`
background-color: #8fc3d1;
padding:20px;
font-size:36px;
color:white;
font-weight:normal;
`;
const Header = styled.div`
padding:10px;
font-size:24px;
font-weight:bold;
display:flex;
justify-content:align-left;
padding-left:20px;
margin-top:70px;
background-color:blue
`;
const Text = styled.div`
padding:5px;
font-weight:normal;
display:flex;
width:90%;
justify-content:align-left;
padding-left:20px;
`;
const Bullet = styled.div`
font-weight:normal;
display:flex;
justify-content:align-left;
padding-left:40px;

`;
const Image = styled.img`
border-radius:20px;
margin-top:20px;
width:90%;
height:90%;
object-fit:scale-down;
pointer-events: none;
`;
const Caption = styled.div`
padding:5px;
font-weight:normal;
display:flex;
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
                backgroundColor: "green",
                alignItems: 'center'
            }}>

                <Banner style={{ width: '100%' }}>
                    How to Apply
                 </Banner>

                <div style={{
                    width: '70%',
                    backgroundColor: 'red',
                    display: "flex",
                    flexDirection: 'column',
                }}>
                    <Header style={{
                        marginTop: '70px'
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

                    {/**Internship Information */}
                    <Header>
                        Internship Information
                    </Header>
                    <div style={{ backgroundColor: '#ededed', width: '90%', display: 'flex', alignContent: 'center' }}>
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
                    <div style={{ backgroundColor: '#ededed', width: '90%' }}>
                        <Image src={Personalimg} alt='Personal' />
                    </div>
                    <Caption>
                        This is where you will give us personal information about yourself. This includes, gender, race, and educational history.
                    </Caption>


                    {/**Written Work */}
                    <Header>
                        Written Work
                    </Header>
                    <div style={{ backgroundColor: '#ededed', width: '90%' }}>
                        <Image src={Writtenimg} alt='Personal' />
                    </div>
                    <Caption>
                        Please will tell us more about yourself! Remember to be specific and answer in complete sentences.
                        It is also where you will give us additional information that could be useful.
                    </Caption>



                    {/**References */}
                    <Header>
                        References                </Header>
                    <div style={{ backgroundColor: '#ededed', width: '90%' }}>
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