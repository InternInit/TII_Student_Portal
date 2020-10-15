import React from "react";
import ApplicationProgress from "./applicationProgress";
import MyInternshipSkeleton from "./myInternshipSkeleton";
import ActiveApplications from "./ActiveApplications.jsx";
import PinCompany from "./PinCompany.jsx";

import { connect } from "react-redux";
import { withRouter } from "react-router";

const mapStateToProps = (state) => {
  return {
    finishedLoading: state.finishedLoading,
    userInfo: state.userInfo,
    completionState: state.completionState,
  };
};

const MyInternships = (props) => {
  return (
    <React.Fragment>
      {!props.finishedLoading ? (
        <>
          <ApplicationProgress />
          <PinCompany
            pinnedBusinesses={props.userInfo.pinnedBusinesses}
            updateBusinessStatus={props.updateBusinessStatus}
          />
          <ActiveApplications
            activeApplications={props.userInfo.activeApplications}
          />
        </>
      ) : (
        <div>
          <MyInternshipSkeleton />
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(connect(mapStateToProps)(MyInternships));
