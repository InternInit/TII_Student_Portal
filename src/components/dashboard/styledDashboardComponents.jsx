import styled from "styled-components";

/**
==============================================================================
                            Resuable Tab Components
==============================================================================
**/
export const CompanyTitle = styled.div`
   font-weight: bold;
  color: black;
  align-items: center;
  min-height: 29px;
  margin-bottom: -2vh;

  text-align:left;
`;

export const JobTitle = styled.div`
   font-weight: 500;
  color: #262626;
  margin-bottom: 10px;
  margin-top: 6px;
`;

export const TabContainer = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5px;
  padding-top: 5px;
  background-color: white;

  border: 1px solid #d9d9d9;
  box-shadow: 1px 1px 5px -4px;
  :hover {
    transition-duration: 0.35s;
    cursor: pointer;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
  }
`;
