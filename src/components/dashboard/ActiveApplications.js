import React, { Component } from "react";
import ActiveAppCompanytab from './ActiveAppCompanytab.js'
import QueueAnim from "rc-queue-anim";


// BUG: THIS NEEDS TO BE REPLACED BY THE REACT STORE
let pinnedCompanies = [
    { name: "This", industry: "Computer Science", status: 'Pending' },
    { name: "is", industry: "Computer Science", status: 'Accepted' },
    { name: "Pinned", industry: "Computer Science", status: 'Rejected' },
    { name: "Company", industry: "Consulting", status: 'Accepted' },
    { name: "Grubhub", industry: "Real Estate", status: 'Pending' }
];


class ActiveApplications extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="module-name" style={{ marginTop: "70px" }}>Active Application</h1>
                <QueueAnim
                    type={["right", "left"]}
                    ease={["easeOutQuart", "easeInOutQuart"]}
                >
                    {pinnedCompanies.map((pinnedCompany, index) => (
                        <div style={{ marginBottom: "12px" }} key={index}>

                            <ActiveAppCompanytab
                                name={pinnedCompany.name}
                                industry={pinnedCompany.industry}
                                logo={pinnedCompany.logo}
                                status={pinnedCompany.status}
                            />


                        </div>
                    ))}
                </QueueAnim>
            </React.Fragment>
        );
    }
}

export default ActiveApplications
