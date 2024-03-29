import React from "react";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../PageNotFoundImage.png";
import "../App.scss";

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <img
          className="image_404"
          alt="404 Page Not Found"
          src={PageNotFoundImage}
        />
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default PageNotFound;
