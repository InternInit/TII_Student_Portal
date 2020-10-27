import React, { Component } from "react";
import QueueAnim from "rc-queue-anim";
import Companytab from "../Companytab.js";

import styled from "styled-components";

import { Pagination, Row as AntRow } from "antd";

const ModuleContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 3%;
  margin-top: 3vh;

  border: 1px solid #d9d9d9;
  box-shadow: 1px 1px 5px -4px;
`;

const DescriptorText = styled.span`
  float: left;
  width: 100%
  font-family: Lato;
  font-weight: 500;

  color: black;
`;

class PinCompany extends Component {
  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);

    this.state = {
      page: 0,
      busPerPage: 5,
    };
  }

  render() {
    let { page, busPerPage } = this.state;
    let {
      pinnedBusinesses,
      updateBusinessStatus,
      disassociatePinnedBusiness,
    } = this.props;
    return (
      <React.Fragment>
        {/**
         *
         * Pinned Companies
         *
         */}
        <h1 className="module-name" style={{ marginTop: "70px" }}>
          Added Companies
        </h1>
        {pinnedBusinesses.length < 1 ? (
          <ModuleContainer>
            <AntRow>
              <DescriptorText
                style={{ margin: "auto" }}
                className="twentyFourFont"
              >
                You have not added any companies yet.
              </DescriptorText>
            </AntRow>
          </ModuleContainer>
        ) : (
          <React.Fragment>
            <QueueAnim
              type={["right", "left"]}
              ease={["easeOutQuart", "easeInOutQuart"]}
            >
              {pinnedBusinesses
                .slice(page * busPerPage, (page + 1) * busPerPage)
                .map((pinnedCompany, index) => (
                  <div style={{ marginBottom: "12px" }} key={index}>
                    <Companytab
                      name={pinnedCompany.name}
                      industry={pinnedCompany.industry}
                      avatar={pinnedCompany.avatar}
                      companyid={pinnedCompany.Id}
                      updateBusinessStatus={updateBusinessStatus}
                      disassociatePinnedBusiness={disassociatePinnedBusiness}
                    />
                  </div>
                ))}
            </QueueAnim>
            <Pagination
              current={parseInt(page) + 1}
              total={pinnedBusinesses.length}
              onChange={(pageChange) => this.handlePageChange(pageChange - 1)}
              pageSize={busPerPage}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }

  handlePageChange = (pageChange) => {
    this.setState({ page: pageChange });
  };
}

export default PinCompany;
