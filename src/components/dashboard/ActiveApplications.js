import React, { Component } from "react";
import ActiveAppCompanytab from './ActiveAppCompanytab.js'
import QueueAnim from "rc-queue-anim";

import styled from 'styled-components'

import { Pagination, Row as AntRow } from 'antd'

const ModuleContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 3%;
  margin-top: 3vh;

  border: 1px solid #d9d9d9;
  box-shadow: 1px 1px 5px -4px;
`;


const DescriptorText = styled.span`
  float: left;
  width: 100%
  font-family: Lato;
  font-weight: bold;
 
  color: black;
`;


class ActiveApplications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: '0'
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }
    render() {
        let { page } = this.state;
        let { activeApplications } = this.props;




        return (
            <React.Fragment>
                <h1 className="module-name" style={{ marginTop: "70px" }}>Active Applications</h1>

                {activeApplications.length < 1 ?
                    <ModuleContainer>
                        <AntRow>
                            <DescriptorText style={{ margin: "auto" }} className="twentyFourFont">You do not have any awaiting applications.</DescriptorText>
                        </AntRow>
                    </ModuleContainer> :


                    <React.Fragment>
                        <QueueAnim
                            type={["right", "left"]}
                            ease={["easeOutQuart", "easeInOutQuart"]}
                        >
                            {activeApplications.slice(page, page + 6).filter(apps => apps.status !== "Pinned").map((pinnedCompany, index) => (
                                <div style={{ marginBottom: "12px" }} key={index}>

                                    <ActiveAppCompanytab
                                        name={pinnedCompany.name}
                                        companyId={pinnedCompany.id}
                                        industry={pinnedCompany.industry}
                                        avatar={pinnedCompany.avatar}
                                        status={pinnedCompany.status}
                                    />


                                </div>
                            ))}
                        </QueueAnim>
                        <Pagination
                            current={parseInt(page) + 1}
                            total={activeApplications.length}
                            onChange={pageChange => this.handlePageChange(pageChange - 1)}
                            pageSize={6}
                        />
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
    handlePageChange = (pageChange) => {
        this.setState({ page: pageChange * 6 });
    }
}

export default ActiveApplications
