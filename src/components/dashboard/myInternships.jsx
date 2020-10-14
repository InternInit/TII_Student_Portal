import React, { Component } from "react";
import ApplicationProgress from "./applicationProgress.jsx";
import ActiveApplications from "./ActiveApplications";
import PinCompany from "./PinCompany";

import { connect } from "react-redux";
import { withRouter } from "react-router";


const mapStateToProps = (state) => {
    return {
      userInfo: state.userInfo,
      completionState: state.completionState,
    };
  };

const MyInternships = props => {
    return (
      <React.Fragment>
        <ApplicationProgress />
        <PinCompany
          pinnedBusinesses={props.userInfo.pinnedBusinesses}
          updateBusinessStatus={props.updateBusinessStatus}
        />
        <ActiveApplications
          activeApplications={props.userInfo.activeApplications}
        />
      </React.Fragment>
    );
}

export default withRouter(connect(mapStateToProps)(MyInternships));
