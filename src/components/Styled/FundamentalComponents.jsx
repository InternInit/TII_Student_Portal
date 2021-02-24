import styled from "styled-components";
import { Button } from "antd";

/*============================================================================================================
 * ***********************************************************************************************************
 *
 *                                      Tab-Based Components
 *
 * ***********************************************************************************************************
 * ============================================================================================================
 */

export const TabContainer = styled.div`
  background-color: white;
  position: relative;

  width: 100%;

  border-radius: 10px;
  border: 1px solid #d8def3;
  box-shadow: 1px 1px 5px -2px #bfbfbf;
`;

export const TabKanban = styled.div`
  background-color: white;
  position: relative;

  width: 100%;

  border-radius: 5px;
  border: 1px solid #d8def3;
  box-shadow: 1px 1px 5px -2px #bfbfbf;
`;

export const TabOutlineContainer = styled.div`
  background-color: white;
  position: relative;

  width: 100%;

  border-radius: 10px;
  border: 1px solid #f0f0f0;
`;

/*============================================================================================================
 * ***********************************************************************************************************
 *
 *                                      Containers
 *
 * ***********************************************************************************************************
 * ============================================================================================================
 */

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebeff2;
  min-height: 100vh;
  height: auto;
`;

export const InnerContainer = styled.div`
  width: 90%;
  marginbottom: 4vh;
`;

export const FormContainer = styled.div`
  position: relative;

  background-color: white;
  border-radius: 4px;
  box-shadow: 1px 1px 5px -4px;
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 1em;
  padding-top: 5.5em;
`;

/*============================================================================================================
 * ***********************************************************************************************************
 *
 *                                      Text Components
 *
 * ***********************************************************************************************************
 * ============================================================================================================
 */

export const Header = styled.span`
  font-weight: ${(props) => (props.bolded ? "500" : "400")};
  font-family: Roboto;
  color: ${(props) =>
    props.subheading ? "#262626" : props.color ? props.color : "#000000"};
`;

export const Caption = styled.span`
  text-align: ${(props) =>
    props.left ? "left" : props.right ? "right" : "center"};
  font-weight: ${(props) => (props.thin ? 300 : 400)};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  font-family: roboto;
  color: ${(props) =>
    props.light ? "#8c8c8c" : props.color ? props.color : "#262626"};
`;

export const Body = styled.span`
  text-align: left;
  font-weight: 400;
  font-family: roboto;
  color: ${(props) => (props.light ? "#262626" : "black")};
`;

export const NavigationButton = styled(Button)`
  background-color: ${(props) => (props.active ? "#1890ff" : "inherit")};
  color: white;
  border: ${(props) =>
    props.active ? "1px solid #1890ff" : "1px solid white"};

  &:hover,
  &:focus {
    background-color: #1890ff;
    color: white;
    border: 1px solid #1890ff;
  }
`;

export const RequiredAsterisk = styled.span`
  color: #f5222d;
`;

export const FilterTag = styled.div`
  color: ${(props) =>
    props.color === "High"
      ? "#f5222d"
      : props.color === "Medium"
      ? "#fa8c16"
      : "#52c41a"};
  background-color: ${(props) =>
    props.color === "High"
      ? "#fff1f0"
      : props.color === "Medium"
      ? "#fff7e6"
      : "#f6ffed"};
  display: flex;
  align-contents: center;
  justify-contents: center;
  height: 32px;
  border: 1px solid
    ${(props) =>
      props.color === "High"
        ? "#f5222d"
        : props.color === "Medium"
        ? "#fa8c16"
        : "#52c41a"};
  border-radius: 4px;
  font-family: Roboto;
  box-shadow: 1px 1px 5px -4px #000000;

  :hover {
    cursor: pointer;
    box-shadow: 1px 1px 5px -3px #000000;
    transition: 0.5s ease;
  }
`;

export const TypeTag = styled.div`
  color: #262626;
  background-color: #f5f5f5;
  display: flex;
  align-contents: center;
  justify-contents: center;
  height: 32px;
  border-radius: 4px;
  font-family: Roboto;
  width: 60%;

  :hover {
    cursor: pointer;
    transition: 0.5s ease;
  }
`;

export const BorderlessTag = styled.div`
  color: ${(props) => (props.color ? props.color : "#262626")};
  background-color: ${(props) =>
    props.background ? props.background : "#f5f5f5"};
  display: flex;
  align-items: center;
  align-self: center;
  text-align: center;
  vertical-align: center;
  justify-content: center;
  height: ${(props) =>
    props.size === "large" ? "40px" : props.size === "small" ? "24px" : "32px"};
  border-radius: 4px;
  font-family: Roboto;
`;

export const CalendarTag = styled(BorderlessTag)`
  padding: 0px .75em;
  text-align: left;
  justify-content: flex-start;
  border: ${props => props.bordered ? "1px solid " + props.color : null};
  border-radius: 4px;
  font-family: Roboto;
`;

export const MiniBadge = styled.div`
  border-radius: 50%;
  background-color: ${(props) => (props.color ? props.color : COLORS.BLUE_M)};
  height: ${(props) => (props.size ? props.size : "5px")};
  width: ${(props) => (props.size ? props.size : "5px")};
`;

/**
 * B = Background
 * L = Light
 * M = Medium
 * D = Dark
 * GRAY_BLACK = Just a really dark gray
 */
export const COLORS = {
  BLUE_B: "#e6f7ff",
  BLUE_L: "#69c0ff",
  BLUE_M: "#1890ff",
  BLUE_D: "#0050b3",
  RED_B: "#fff1f0",
  RED_L: "#ff7875",
  RED_M: "#f5222d",
  RED_D: "#a8071a",
  VOLCANO_B: "#fff2e8",
  VOLCANO_L: "#ff9c6e",
  VOLCANO_M: "#fa541c",
  VOLCANO_D: "#ad2102",
  ORANGE_B: "#fff7e6",
  ORANGE_L: "#ffc069",
  ORANGE_M: "#fa8c16",
  ORANGE_D: "#ad4e00",
  GOLD_B: "#fffbe6",
  GOLD_L: "#ffd666",
  GOLD_M: "#faad14",
  GOLD_D: "#ad6800",
  YELLOW_B: "#feffe6",
  YELLOW_L: "#fff566",
  YELLOW_M: "#fadb14",
  YELLOW_D: "#ad8b00",
  LIME_B: "#fcffe6",
  LIME_L: "#d3f261",
  LIME_M: "#a0d911",
  LIME_D: "#5b8c00",
  GREEN_B: "#f6ffed",
  GREEN_L: "#95de64",
  GREEN_M: "#52c41a",
  GREEN_D: "#237804",
  CYAN_B: "#e6fffb",
  CYAN_L: "#5cdbd3",
  CYAN_M: "#13c2c2",
  CYAN_D: "#006d75",
  GEEKBLUE_B: "#f0f5ff",
  GEEKBLUE_L: "#85a5ff",
  GEEKBLUE_M: "#2f54eb",
  GEEKBLUE_D: "#10239e",
  PURPLE_B: "#f9f0ff",
  PURPLE_L: "#b37feb",
  PURPLE_M: "#722ed1",
  PURPLE_D: "#391085",
  MAGENTA_B: "#fff0f6",
  MAGENTA_L: "#ff85c0",
  MAGENTA_M: "#eb2f96",
  MAGENTA_D: "#9e1068",
  GRAY_B: "#fafafa",
  GRAY_L: "#f0f0f0",
  GRAY_M: "#bfbfbf",
  GRAY_D: "#595959",
  GRAY_BLACK: "#262626",
};
