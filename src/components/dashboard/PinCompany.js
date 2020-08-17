import React, { Component } from "react";
import QueueAnim from "rc-queue-anim";
import Companytab from "./Companytab.js";


class PinCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinnedCompanies: []
    };
  }


  render() {
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
          {this.props.pinnedBusinesses.map((pinnedCompany, index) => (
            <div style={{ marginBottom: "12px" }} key={index}>
              <Companytab
                name={pinnedCompany.name}
                industry={pinnedCompany.industry}
                logo={pinnedCompany.logo}
                companyid={pinnedCompany.id}
              />
            </div>
          ))}
        </QueueAnim>
      </React.Fragment>
    );
  }
}

export default PinCompany;
