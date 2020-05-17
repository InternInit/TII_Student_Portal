import React, { Component } from "react";
import PageInternshipInformation from "../components/pageInternshipInformation.jsx";

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
    const formRef = React.createRef();
  }

  /*
  submit = () => {
    this.formRef.current.SetFieldValues
  };
  */

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
          ref={this.myRef}
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
          ref={this.myRef}
        >
          <h1>Hello!</h1>
        </div>
      );
    }
  }
}

export default IntegratedForm;
