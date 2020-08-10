import React, { Component } from "react";
import QueueAnim from "rc-queue-anim";
import Companytab from "./Companytab.js";

// BUG: THIS NEEDS TO BE REPLACED BY THE REACT STORE
let pinnedCompanies = [
  { name: "This", industry: "Computer Science", status: "pending" },
  { name: "is", industry: "Computer Science", status: "accepted" },
  { name: "Pinned", industry: "Computer Science", status: "rejected" },
  { name: "Company", industry: "Consulting", status: "accepted" },
  { name: "Grubhub", industry: "Real Estate", status: "pending" }
];

class PinCompany extends Component {

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
          {pinnedCompanies.map((pinnedCompany, index) => (
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
