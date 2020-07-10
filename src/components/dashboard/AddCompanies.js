import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd';
import SearchCompanytab from './SearchCompanytab.js'
import CompanyInformation from './CompanyInformation.js';
import { Collapse, Col, Checkbox } from 'antd'

const { Search } = Input;
const { Panel } = Collapse;

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
            industries: '',
            mergedIndustry: 'BusinessConsultingFinance or AccountingMedia or TellecommunicationsReal EstateEngineeringScience ResearchComputer ScienceBiotechnologyVocationalPoliticalMarketing',
            tabDropped: '1'



        }
        this.searchCompany = this.searchCompany.bind(this);
        this.filterIndustries = this.filterIndustries.bind(this);
        this.mergeIndustries = this.mergeIndustries.bind(this);

    }

    render() {
        let { search,
            mergedIndustry,
            tabDropped
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
                    placeholder="Search Companies"
                    style={{ width: '100%', marginBottom: '20px' }}
                    allowClear='true'

                    onChange={value => this.searchCompany(value)}

                />


                {/**
                 *
                 * Filter by industries
                 *
                 */}
                <Row>
                    <Collapse defaultActiveKey={['1']} expandIconPosition='right' >
                        <Panel header='Filter by Industry' >
                            <Checkbox.Group onChange={value => this.filterIndustries(value)}>
                                <Row style={{ flexDirection: 'column' }}>
                                    {industry.map(industry => (
                                        <div >
                                            <Checkbox
                                                key={industry}
                                                value={industry}
                                                style={{
                                                    lineHeight: "32px"
                                                }}

                                            >
                                                {industry}
                                            </Checkbox>
                                        </div>
                                    ))}
                                    <Row style={{ marginTop: '20px' }}>

                                        <Button onClick={this.mergeIndustries}>
                                            Search
                                        </Button>
                                    </Row>
                                </Row>
                            </Checkbox.Group>
                        </Panel>
                    </Collapse>
                </Row>




                {/**
                 *
                 * Mapping of results
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

    searchCompany(event) {
        this.setState({ search: event.target.value.substring(0, 20) })
    }

    filterIndustries(event) {
        this.setState({ industries: event }, this.stateCallback)
    }

    stateCallback() {
        console.log(this.state.industries)
    }

    mergeIndustries() {
        let { industries, mergedIndustry } = this.state;
        let tempVar = "";
        //Creates a variable with all desired industries
        industries.map(camel => (
            tempVar += camel
        ))
        //Sets the industries state to the temporary variable
        this.setState({ mergedIndustry: tempVar })


        //Handles 'all industries'
        if (tempVar === '') {
            this.setState({ mergedIndustry: 'BusinessConsultingFinance or AccountingMedia or TellecommunicationsReal EstateEngineeringScience ResearchComputer ScienceBiotechnologyVocationalPoliticalMarketing' })
        }

        console.log("This is the merged: ", this.state.mergedIndustry)
    }

}
export default AddCompanies
