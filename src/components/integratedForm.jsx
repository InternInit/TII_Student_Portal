import React, { Component } from "react";
import PageInternshipInformation from "../components/pageInternshipInformation.jsx";
import PageReferences from './PageReferences'
class IntegratedForm extends Component {
  state = {
    page: 0,
    internshipInformation: {
      firstName: "",
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

  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "center",
        }}

      >
        <PageReferences />
      </div>
    );
  }
}

export default IntegratedForm;
