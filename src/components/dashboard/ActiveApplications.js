import React, { Component } from "react";
import ActiveAppCompanytab from './ActiveAppCompanytab.js'
import QueueAnim from "rc-queue-anim";

import { Pagination } from 'antd'


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
                <h1 className="module-name" style={{ marginTop: "70px" }}>Active Application</h1>
                <QueueAnim
                    type={["right", "left"]}
                    ease={["easeOutQuart", "easeInOutQuart"]}
                >
                    {activeApplications.slice(page, page + 6).filter(apps => apps.status !== "Pinned").map((pinnedCompany, index) => (
                        <div style={{ marginBottom: "12px" }} key={index}>

                            <ActiveAppCompanytab
                                name={pinnedCompany.name}
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
        );
    }
    handlePageChange = (pageChange) => {
        this.setState({ page: pageChange * 6 });
    }
}

export default ActiveApplications
