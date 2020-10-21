import React from "react";
import styled from "styled-components";

import { Input } from "antd";
import SearchCompanytab from "../SearchCompanytab.js";
import { Collapse, Checkbox, Pagination, Form, Button, Skeleton } from "antd";
import { Col as AntCol, Row as AntRow, Modal, notification } from "antd";
import { withRouter } from "react-router";

const { Panel } = Collapse;
const { Search } = Input;

const formGutter = [16, 16];
const checkGutter = [8, 8];
const standardSpan = 24;
const thirdSpan = standardSpan / 3;

const industry = [
  "General Business",
  "Consulting",
  "Finance or Accounting",
  "Media or Tellecommunications",
  "Real Estate",
  "Engineering",
  "Science Research",
  "Computer Science",
  "Biotechnology",
  "Vocational",
  "Political",
  "Marketing",
];

const ModuleContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 3%;
  margin-top: 2vh;

  border: 1px solid #d9d9d9;
  box-shadow: 1px 1px 5px -4px;
`;

class AddCompaniesSkeleton extends React.Component {
  render() {
    return (
      <div style={{ paddingBottom: "50%" }}>
        {this.props.version < 1 ? (
          <ModuleContainer>
            <AntRow>
              <Skeleton.Input style={{ width: "24vw" }} />
            </AntRow>
          </ModuleContainer>
        ) : (
          <React.Fragment>
            <h1 className="module-name">Apply to an Entire Industry</h1>
            <Collapse defaultActiveKey={["1"]} expandIconPosition="right">
              <Panel
                header={
                  <strong style={{ fontWeight: "500" }} className="sixteenFont">
                    Choose an entire industry to submit your application to.
                  </strong>
                }
              ></Panel>
            </Collapse>

            <h1 className="module-name" ref={this.myRef}>
              Search Companies
            </h1>
            <Search
              placeholder="Search Company Name"
              size="large"
              style={{ width: "100%", marginBottom: "20px", marginTop: "8px" }}
            />
            <AntRow style={{ width: "100%", marginBottom: "3vh" }}>
              <Collapse defaultActiveKey={["0"]} expandIconPosition="right">
                <Panel
                  header={
                    <strong
                      style={{ fontWeight: "500" }}
                      className="sixteenFont"
                    >
                      Filter by Industry
                    </strong>
                  }
                >
                  <AntRow gutter={formGutter}>
                    <AntCol span={standardSpan}>
                      <Checkbox.Group
                        onChange={(value) => {
                          this.filterIndustries(value);
                        }}
                      >
                        <AntRow gutter={checkGutter}>
                          {industry.map((industry) => (
                            <AntCol
                              span={thirdSpan}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <Checkbox
                                key={industry}
                                value={industry}
                                style={{
                                  lineHeight: "32px",
                                  marginLeft: "25%",

                                  textAlign: "left",
                                }}
                              >
                                {industry}
                              </Checkbox>
                            </AntCol>
                          ))}
                        </AntRow>
                      </Checkbox.Group>
                    </AntCol>
                  </AntRow>
                </Panel>
              </Collapse>
            </AntRow>

            <ModuleContainer style={{ padding: "1%" }}>
              <AntRow style={{ marginTop: "1%" }}>
                <AntCol span={3}>
                  <Skeleton.Avatar size={48} />
                </AntCol>
                <AntCol span={21}>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "7px" }}
                  >
                    <Skeleton.Input
                      size="small"
                      active
                      style={{ width: "25vw" }}
                    />
                  </div>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "0px", width: "15vw" }}
                  >
                    <Skeleton active title={false} paragraph={{ rows: 1 }} />
                  </div>
                </AntCol>
              </AntRow>
            </ModuleContainer>
            <ModuleContainer style={{ padding: "1%" }}>
              <AntRow style={{ marginTop: "1%" }}>
                <AntCol span={3}>
                  <Skeleton.Avatar size={48} />
                </AntCol>
                <AntCol span={21}>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "7px" }}
                  >
                    <Skeleton.Input
                      size="small"
                      active
                      style={{ width: "25vw" }}
                    />
                  </div>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "0px", width: "15vw" }}
                  >
                    <Skeleton active title={false} paragraph={{ rows: 1 }} />
                  </div>
                </AntCol>
              </AntRow>
            </ModuleContainer>
            <ModuleContainer style={{ padding: "1%" }}>
              <AntRow style={{ marginTop: "1%" }}>
                <AntCol span={3}>
                  <Skeleton.Avatar size={48} />
                </AntCol>
                <AntCol span={21}>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "7px" }}
                  >
                    <Skeleton.Input
                      size="small"
                      active
                      style={{ width: "25vw" }}
                    />
                  </div>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "0px", width: "15vw" }}
                  >
                    <Skeleton active title={false} paragraph={{ rows: 1 }} />
                  </div>
                </AntCol>
              </AntRow>
            </ModuleContainer>
            <ModuleContainer style={{ padding: "1%" }}>
              <AntRow style={{ marginTop: "1%" }}>
                <AntCol span={3}>
                  <Skeleton.Avatar size={48} />
                </AntCol>
                <AntCol span={21}>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "7px" }}
                  >
                    <Skeleton.Input
                      size="small"
                      active
                      style={{ width: "25vw" }}
                    />
                  </div>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "0px", width: "15vw" }}
                  >
                    <Skeleton active title={false} paragraph={{ rows: 1 }} />
                  </div>
                </AntCol>
              </AntRow>
            </ModuleContainer>
            <ModuleContainer style={{ padding: "1%" }}>
              <AntRow style={{ marginTop: "1%" }}>
                <AntCol span={3}>
                  <Skeleton.Avatar size={48} />
                </AntCol>
                <AntCol span={21}>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "7px" }}
                  >
                    <Skeleton.Input
                      size="small"
                      active
                      style={{ width: "25vw" }}
                    />
                  </div>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "0px", width: "15vw" }}
                  >
                    <Skeleton active title={false} paragraph={{ rows: 1 }} />
                  </div>
                </AntCol>
              </AntRow>
            </ModuleContainer>
            <ModuleContainer style={{ padding: "1%" }}>
              <AntRow style={{ marginTop: "1%" }}>
                <AntCol span={3}>
                  <Skeleton.Avatar size={48} />
                </AntCol>
                <AntCol span={21}>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "7px" }}
                  >
                    <Skeleton.Input
                      size="small"
                      active
                      style={{ width: "25vw" }}
                    />
                  </div>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "0px", width: "15vw" }}
                  >
                    <Skeleton active title={false} paragraph={{ rows: 1 }} />
                  </div>
                </AntCol>
              </AntRow>
            </ModuleContainer>
            <ModuleContainer style={{ padding: "1%" }}>
              <AntRow style={{ marginTop: "1%" }}>
                <AntCol span={3}>
                  <Skeleton.Avatar size={48} />
                </AntCol>
                <AntCol span={21}>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "7px" }}
                  >
                    <Skeleton.Input
                      size="small"
                      active
                      style={{ width: "25vw" }}
                    />
                  </div>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "0px", width: "15vw" }}
                  >
                    <Skeleton active title={false} paragraph={{ rows: 1 }} />
                  </div>
                </AntCol>
              </AntRow>
            </ModuleContainer>
            <ModuleContainer style={{ padding: "1%", marginBottom: "-40%" }}>
              <AntRow style={{ marginTop: "1%" }}>
                <AntCol span={3}>
                  <Skeleton.Avatar size={48} />
                </AntCol>
                <AntCol span={21}>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "7px" }}
                  >
                    <Skeleton.Input
                      size="small"
                      active
                      style={{ width: "25vw" }}
                    />
                  </div>
                  <div
                    className="universal-left"
                    style={{ marginBottom: "0px", width: "15vw" }}
                  >
                    <Skeleton active title={false} paragraph={{ rows: 1 }} />
                  </div>
                </AntCol>
              </AntRow>
            </ModuleContainer>
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default withRouter(AddCompaniesSkeleton);
