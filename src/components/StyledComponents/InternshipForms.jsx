import styled from "styled-components";
import { BsInfoCircleFill } from "react-icons/bs";

export const InfoCircle = styled(BsInfoCircleFill)`
  display: inline-block;
  margin-left: 10px;
  color: #bfbfbf;
  vertical-align: center;

  :hover {
      cursor: pointer;
      color: gray;
      transition-duration: .5s;
  }
`;
