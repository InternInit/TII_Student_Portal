import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd';
import SearchCompanytab from './SearchCompanytab.js'
import Companytab from './Companytab.js';
const { CLabel } = SearchCompanytab;
const { Search } = Input;

const ModuleContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 3%;
`;



class AddCompanies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="module-name">Pinned Companies</h1>
                <SearchCompanytab />



                <h1 className="module-name" style={{ marginTop: '100px' }}>Search Companies</h1>
                <Search
                    placeholder="Search Companies or Industries"
                    onSearch={value => console.log(value)}
                    style={{ width: '100%', marginBottom: '40px' }}
                />
                <SearchCompanytab handleClick={this.handleClick} />



            </React.Fragment>)
    }

    handleClick = () => {
        console.log("HI")
        this.setState({ ctab: <CLabel /> })
    }
}
export default AddCompanies