import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd';
import SearchCompanytab from './SearchCompanytab.js'
import { Collapse, Checkbox } from 'antd'
import { Col as antCol, Row as antRow } from 'antd'

const { Search } = Input;
const { Panel } = Collapse;


//Formatting
const formGutter = [16, 16];
const checkGutter = [8, 8];
const standardSpan = 24;
const thirdSpan = standardSpan / 3;


const ModuleContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 3%;
`;

const Row = styled.div`
margin-bottom:22px;
 display:flex;
 flex-direction:row;
align-items:flex-start;
 `

const Button = styled.div`
color:white;
background-color:#BCDFFF;
font-size:18px;
border-radius:2px;
width:100px;
height:36px;
display:flex;
align-self:center;
align-items:center;
justify-content:center;
box-shadow: 1px 3px 1px #d9d9d9;
:hover{
    cursor:pointer;
    background-color:#a6c5e0;
}
`

const industry = [
    "General Business",
    "Consulting",
    "Finance or Accounting",
    "Media or Tellecommunications",
    "Real Estate",
    "Engineering",
    "Science Research",
    "Computer Science",
    "Biotechnology",
    "Vocational",
    "Political",
    "Marketing"
];


let Info = [
    { name: 'Apple', industry: 'Computer Science' },
    { name: 'Facebook', industry: 'Computer Science' },
    { name: 'Github', industry: 'Computer Science' },
    { name: 'Grindr', industry: 'Consulting' },
    { name: 'Grubhub', industry: 'Real Estate' },
    { name: 'Hello Brandon', industry: 'Media or Tellecommunications' },
    { name: 'Hubspot', industry: 'Marketing' },
    { name: 'Joseph Zhang', industry: 'General Business' },
    { name: 'LinkedIn', industry: 'General Business' },
    { name: 'Microsoft', industry: 'Computer Science' },
    { name: 'NASA', industry: 'Engineering' },
    { name: 'Netflix', industry: 'Media or Tellecommunications' },
    { name: 'qgy type letters', industry: 'Political' },
    { name: 'Tesla', industry: 'Biotechnology' },
    { name: 'Tinder', industry: 'Vocational' },
]


class AddCompanies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            industries: industry,
            mergedIndustry: 'General BusinessBusinessConsultingFinance or AccountingMedia or TellecommunicationsReal EstateEngineeringScience ResearchComputer ScienceBiotechnologyVocationalPoliticalMarketing',
        }
        this.searchCompany = this.searchCompany.bind(this);
        this.filterIndustries = this.filterIndustries.bind(this);
        this.mergeIndustries = this.mergeIndustries.bind(this);

    }

    render() {
        let { search,
            mergedIndustry,
        } = this.state;

        //Filtering function for industries
        let industrySearch = Info.filter(
            (rice) => {
                return mergedIndustry.toLowerCase().indexOf(rice.industry.toLowerCase()) !== -1;
            }
        )

        //Filtering function for company names
        let filteredInfo = industrySearch.filter(
            (rice) => {
                return rice.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            }
        )


        return (
            <div style={{ paddingBottom: '50%' }} >
                <h1 className="module-name">Pinned Companies</h1>
                {/**
                 *
                 * Pinned Companies
                 *
                 */}
                <ModuleContainer>
                    Not done yet
                </ModuleContainer>


                <h1 className="module-name" style={{ marginTop: '100px' }}>Search Companies</h1>

                {/**
                 *
                 * Search bar
                 *
                 */}
                <Search
                    placeholder="Search Company Name"
                    allowClear='true'
                    size='large'
                    onChange={value => this.searchCompany(value)}
                    style={{ width: '100%', marginBottom: '20px' }}
                />


                {/**
                 *
                 * Filter by industries Collapse Tab
                 *
                 */}
                <Row>
                    <Collapse defaultActiveKey={['0']} expandIconPosition='right' >
                        <Panel header='Filter by Industry' >
                            <antRow gutter={formGutter}>
                                <antCol span={standardSpan}>
                                    <Checkbox.Group onChange={value => this.filterIndustries(value)}>
                                        <antRow gutter={checkGutter}>
                                            {industry.map(industry => (
                                                <antCol span={thirdSpan}>
                                                    <Checkbox
                                                        key={industry}
                                                        value={industry}
                                                        style={{
                                                            lineHeight: "32px"
                                                        }}
                                                    >
                                                        {industry}
                                                    </Checkbox>
                                                </antCol>
                                            ))}

                                        </antRow>
                                    </Checkbox.Group>
                                </antCol>
                            </antRow>
                        </Panel>
                    </Collapse>
                </Row>




                {/**
                 *
                 * Mapping of search results
                 *
                 */}
                {
                    filteredInfo.map(rice => (
                        <div style={{ marginBottom: '12px' }}>
                            <SearchCompanytab key={rice.name}
                                name={rice.name}
                            />
                        </div>
                    ))
                }





            </div >)
    }



    //Handles search bar changes
    searchCompany(event) {
        this.setState({ search: event.target.value.substring(0, 20) })
    }
    //Filtering industry checkboxes
    filterIndustries(event) {
        this.setState({ industries: event }, this.stateCallback)
    }

    //Logging info in console
    stateCallback() {
        console.log(this.state.industries)
        this.mergeIndustries()
    }

    //Sending information to filter function
    mergeIndustries() {
        let { industries } = this.state;
        let tempVar = "";
        //Creates a variable with all desired industries
        industries.map(camel => (
            tempVar += camel
        ))
        //Sets the industries state to the temporary variable
        this.setState({ mergedIndustry: tempVar })


        //Handles 'all industries'
        if (tempVar === '') {
            this.setState({ mergedIndustry: 'General BusinessBusinessConsultingFinance or AccountingMedia or TellecommunicationsReal EstateEngineeringScience ResearchComputer ScienceBiotechnologyVocationalPoliticalMarketing' })
        }
        console.log("This is the merged: ", this.state.mergedIndustry)
    }
}
export default AddCompanies