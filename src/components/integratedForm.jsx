import React, { Component } from "react";
import PageInternshipInformation from "../components/pageInternshipInformation.jsx";
import PagePersonal from "../components/pagePersonal.jsx";

class IntegratedForm extends Component {
  state = {
    internshipInformation: {
      firstName: "porridge",
      lastName: "",
      phone: null,
      email: "",
      addressLine: "",
      city: "",
      usState: "",
      zipcode: "",
      yearOfGraduation: null,
      industry: "",
      unweightedGPA: null,
      weightedGPA: null,
      courses: "",
      Extracurriculars: "",
      daysToWork: null,
      timesToWork: null,
      dateOfStartAndEnd: null,
      paidUnpaid: null,
      resume: null
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { page } = this.props;

    if (page === 0) {
      return (
        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "center"
          }}
        >
          <PageInternshipInformation
            onNext={this.props.onNext}
            submit={this.submit}
          />
        </div>
      );
    } else if (page === 1) {
      return (
        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "center"
          }}
        >
          <PagePersonal onNext={this.props.onNext} />
        </div>
      );
    }
  }
}

export default IntegratedForm;
