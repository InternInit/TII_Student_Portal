import React from "react";
import styled from "styled-components";

import { Input } from "antd";
import SearchCompanytab from "../SearchCompanytab.js";
import AddCompaniesSkeleton from "./AddCompaniesSkeleton";
import { Collapse, Checkbox, Pagination, Form, Button } from "antd";
import { Col as AntCol, Row as AntRow, Modal, notification } from "antd";
import QueueAnim from "rc-queue-anim";
import { withRouter } from "react-router";
import { values } from "underscore";
import { CheckOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

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
  margin-top: 2vh;

  border: 1px solid #d9d9d9;
  box-shadow: 1px 1px 5px -4px;
`;

const DescriptorText = styled.span`
  float: left;
  width: 100%
  font-family: Lato;
  font-weight: 500;
  font-size: 24px;

  color: black;
`;

const industry = [
  "General Business",
  "Consulting",
  "Finance or Accounting",
  "Media or Telecommunications",
  "Real Estate",
  "Engineering",
  "Science Research",
  "Computer Science",
  "Biotechnology",
  "Vocational",
  "Political",
  "Marketing",
];

let Info = [];

const mapStateToProps = (state) => {
  return {
    finishedLoading: state.finishedLoading,
  };
};

class AddCompanies extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      search: "",
      visible: false,
      industries: industry,
      sendingIndustries: [],
      companies: [],
      page: 0,
      busPerPage: 10,
      mergedIndustry:
        "General BusinessConsultingFinance or AccountingMedia or TelecommunicationsReal EstateEngineeringScience ResearchComputer ScienceBiotechnologyVocationalPoliticalMarketing",
    };
    this.searchCompany = this.searchCompany.bind(this);
    this.filterIndustries = this.filterIndustries.bind(this);
    this.mergeIndustries = this.mergeIndustries.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    Info = [];
    this.getBusinesses();
  }

  getBusinesses = () => {
    fetch("/api/get_businesses")
      .then((response) => response.json())
      .then((data) => {
        let companyArray = [];
        JSON.parse(data).hits.hits.forEach((item) =>
          companyArray.push(item._source)
        );
        let excludedBusinesses = [];
        this.props.pinnedBusinesses.forEach((business) =>
          excludedBusinesses.push(business.Id)
        );
        this.props.activeApplications.forEach((business) =>
          excludedBusinesses.push(business.Id)
        );
        console.log(excludedBusinesses);
        //companyArray.filter((company) => )
        this.setState({ companies: companyArray });
      });
  };

  render() {
    let { search, mergedIndustry } = this.state;
    let { page, visible } = this.state;

    //Filtering function for industries
    let industrySearch = this.state.companies.filter((company) => {
      return (
        mergedIndustry.toLowerCase().indexOf(company.industry.toLowerCase()) !==
        -1
      );
    });

    //Filtering function for company names
    let filteredInfo = industrySearch.filter((company) => {
      return company.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    let excludedBusinesses = [];
    this.props.pinnedBusinesses.forEach((business) =>
      excludedBusinesses.push(business.Id)
    );
    this.props.activeApplications.forEach((business) =>
      excludedBusinesses.push(business.Id)
    );

    filteredInfo = filteredInfo.filter(
      (company) => excludedBusinesses.indexOf(company.Id) === -1
    );

    return (
      <>
        {this.props.finishedLoading ? (
          <div style={{ paddingBottom: "50%" }}>
            {this.props.version < 1 ? (
              <ModuleContainer>
                <AntRow>
                  <DescriptorText style={{ margin: "auto" }}>
                    Please fill out your application first
                  </DescriptorText>
                </AntRow>
              </ModuleContainer>
            ) : (
              <React.Fragment>
                <h1 className="module-name">Apply to an Entire Industry</h1>
                <Form>
                  <Collapse defaultActiveKey={["1"]} expandIconPosition="right">
                    <Panel
                      header={
                        <strong
                          style={{ fontWeight: "500" }}
                          className="sixteenFont"
                        >
                          Choose an entire industry to submit your application
                          to.
                        </strong>
                      }
                    >
                      <AntRow gutter={formGutter}>
                        <AntCol span={standardSpan}>
                          <Checkbox.Group
                            value={this.props.checkedIndustries}
                            onChange={(value) => {
                              this.addConfirmIndustry(value);
                            }}
                          >
                            <AntRow gutter={checkGutter}>
                              {industry.map((industry) => (
                                <AntCol
                                  span={thirdSpan}
                                  style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                  }}
                                >
                                  <Checkbox
                                    key={industry}
                                    value={industry}
                                    disabled={this.props.disabledIndustries.includes(
                                      industry
                                    )}
                                    style={{
                                      lineHeight: "32px",
                                      marginLeft: "25%",

                                      textAlign: "left",
                                    }}
                                  >
                                    {industry}
                                  </Checkbox>
                                </AntCol>
                              ))}
                            </AntRow>
                          </Checkbox.Group>
                        </AntCol>
                      </AntRow>
                      <AntRow>
                        <Button
                          type="primary"
                          style={{ margin: "auto" }}
                          onClick={this.showModal}
                          disabled={
                            this.props.checkedIndustries.length === 0
                              ? true
                              : false
                          }
                        >
                          Send my application to these industries
                        </Button>
                      </AntRow>
                    </Panel>
                  </Collapse>
                </Form>
                {/**
                 *
                 * MODAL FOR CONFIRMING INDUSTRIES
                 *
                 */}
                <Modal
                  visible={visible}
                  width={"100vh"}
                  onCancel={this.cancelModal}
                  onOk={this.confirmIndustry}
                  okText="Confirm"
                  title="Confirm Industries"
                >
                  <p>
                    <strong>
                      Your application will be sent to the following industries:
                    </strong>
                  </p>
                  {this.props.checkedIndustries.map((industry) => (
                    <p>{industry}</p>
                  ))}

                  {/**Map the industries here */}
                </Modal>

                <h1 className="module-name" ref={this.myRef}>
                  Search Companies
                </h1>

                {/**
                 *
                 * Search bar
                 *
                 */}
                <Search
                  placeholder="Search Company Name"
                  allowClear="true"
                  size="large"
                  onChange={(value) => this.searchCompany(value)}
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    marginTop: "8px",
                  }}
                />

                {/**
                 *
                 * Filter by industries Collapse Tab
                 *
                 */}
                <AntRow style={{ width: "100%", marginBottom: "3vh" }}>
                  <Collapse defaultActiveKey={["0"]} expandIconPosition="right">
                    <Panel
                      header={
                        <strong
                          style={{ fontWeight: "500" }}
                          className="sixteenFont"
                        >
                          Filter by Industry
                        </strong>
                      }
                    >
                      <AntRow gutter={formGutter}>
                        <AntCol span={standardSpan}>
                          <Checkbox.Group
                            onChange={(value) => {
                              this.filterIndustries(value);
                            }}
                          >
                            <AntRow gutter={checkGutter}>
                              {industry.map((industry) => (
                                <AntCol
                                  span={thirdSpan}
                                  style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                  }}
                                >
                                  <Checkbox
                                    key={industry}
                                    value={industry}
                                    style={{
                                      lineHeight: "32px",
                                      marginLeft: "25%",

                                      textAlign: "left",
                                    }}
                                  >
                                    {industry}
                                  </Checkbox>
                                </AntCol>
                              ))}
                            </AntRow>
                          </Checkbox.Group>
                        </AntCol>
                      </AntRow>
                    </Panel>
                  </Collapse>
                </AntRow>

                {/**
                 *
                 * Mapping of search results
                 *
                 */}
                <QueueAnim
                  type="scale"
                  ease={["easeOutQuart", "easeInOutQuart"]}
                >
                  {filteredInfo
                    .slice(
                      page * this.state.busPerPage,
                      (page + 1) * this.state.busPerPage
                    )
                    .map((company, index) => (
                      <div style={{ marginBottom: "12px" }} key={index}>
                        <SearchCompanytab
                          companyFull={company}
                          key={company.name}
                          name={company.name}
                          industry={company.industry}
                          logo={company.avatar}
                          image={company.avatar}
                          description={company.description}
                          location={company.location}
                          companyid={company.Id}
                          updateBusinessStatus={this.props.updateBusinessStatus}
                        />
                      </div>
                    ))}
                </QueueAnim>
                <Pagination
                  current={parseInt(page) + 1}
                  total={filteredInfo.length}
                  onChange={(pageChange) =>
                    this.handlePageChange(pageChange - 1)
                  }
                  pageSize={this.state.busPerPage}
                  style={{ marginBottom: "-40%" }}
                />
              </React.Fragment>
            )}
          </div>
        ) : (
          <AddCompaniesSkeleton />
        )}
      </>
    );
  }

  showModal = () => {
    this.setState({ visible: true });
  };
  cancelModal = () => {
    this.setState({ visible: false });
  };
  confirmIndustry = () => {
    this.setState({ visible: false });
    this.props.updateData({}, -1);
    notification.open({
      //notification
      message: "Success!",
      description: "Your application was sent.",
      icon: <CheckOutlined style={{ color: "green" }} />,
    });
  };

  addConfirmIndustry = (event) => {
    let { sendingIndustries } = this.state;
    this.setState({ sendingIndustries: event });
    //console.log(event);
    this.props.updateCheckedIndustries(event);
  };

  //handles pagination bar change
  handlePageChange = (pageChange) => {
    //console.log(pageChange, this.state.page);
    this.setState({ page: pageChange });
    window.scrollTo(0, this.myRef.current.offsetTop - 25);
  };

  //Handles search bar changes
  searchCompany = (event) => {
    this.setState({ search: event.target.value.substring(0, 20), page: 0 });
  };

  //Filtering industry checkboxes
  filterIndustries = (event) => {
    this.setState({ industries: event }, this.stateCallback);
  };

  //Logging info in console
  stateCallback = () => {
    console.log(this.state.industries);
    this.mergeIndustries();
  };

  //Sending information to filter function
  mergeIndustries = () => {
    let { industries } = this.state;
    let tempVar = "";
    //Creates a variable with all desired industries
    industries.map((industry) => (tempVar += industry));
    //Sets the industries state to the temporary variable
    this.setState({ mergedIndustry: tempVar, page: 0 });

    //Handles 'all industries'
    if (tempVar === "") {
      this.setState({
        page: 0,
        mergedIndustry:
          "General BusinessBusinessConsultingFinance or AccountingMedia or TelecommunicationsReal EstateEngineeringScience ResearchComputer ScienceBiotechnologyVocationalPoliticalMarketing",
      });
    }
  };
}
export default withRouter(connect(mapStateToProps)(AddCompanies));
