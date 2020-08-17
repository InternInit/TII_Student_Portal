import React, { Component } from "react";
import QueueAnim from "rc-queue-anim";
import Companytab from "./Companytab.js";

import { Pagination } from 'antd'

class PinCompany extends Component {
  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);

    this.state = {
      pinnedCompanies: [],
      page: '0'
    };
  }


  render() {
    let { page } = this.state;
    let { pinnedBusinesses, updateBusinessStatus } = this.props;
    return (
      <React.Fragment>
        {/**
         *
         * Pinned Companies
         *
         */}
        <h1 className="module-name" style={{ marginTop: "70px" }}>
          Pinned Companies
        </h1>

        <QueueAnim
          type={["right", "left"]}
          ease={["easeOutQuart", "easeInOutQuart"]}
        >
          {pinnedBusinesses.slice(page, page + 5).map((pinnedCompany, index) => (
            <div style={{ marginBottom: "12px" }} key={index}>
              <Companytab
                name={pinnedCompany.name}
                industry={pinnedCompany.industry}
                avatar={pinnedCompany.avatar}
                companyid={pinnedCompany.id}
                updateBusinessStatus={updateBusinessStatus}
              />
            </div>
          ))}
        </QueueAnim>
        <Pagination
          current={parseInt(page) + 1}
          total={pinnedBusinesses.length}
          onChange={pageChange => this.handlePageChange(pageChange - 1)}
          pageSize={5}
        />
      </React.Fragment>
    );
  }

  handlePageChange = (pageChange) => {
    this.setState({ page: pageChange * 5 });
  }


}

export default PinCompany;
