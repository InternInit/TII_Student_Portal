import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFoundImage from '../PageNotFoundImage.png';

class PageNotFound extends React.Component{
    render(){
        return <div>
            <img src={PageNotFoundImage} width="740px"/>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}export default PageNotFound;
