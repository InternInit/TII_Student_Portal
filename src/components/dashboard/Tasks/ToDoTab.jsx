import React, { useState } from "react";
import { Row, Col } from "antd";
import { TabContainer, Caption, COLORS } from "../../Styled/FundamentalComponents";
import { useSpring, animated } from "react-spring";
import { FaCheck } from "react-icons/fa";

const ToDoTab = (props) => {
  const findColor = (status) => {
    switch (status) {
      case "Applying":
        return COLORS.VOLCANO_M;
      case "Submitted":
        return COLORS.GREEN_M;
      case "Intern":
        return COLORS.BLUE_M;
      default:
        return COLORS.BLUE_M;
    }
  };

  const colorCode = findColor(props.status);

  const [finished, setFinished] = useState(false);
  const [checkHover, setCheckHover] = useState(false);
  const [isShortened, setShortened] = useState(props.truncate);

  const checkStyling = useSpring({
    opacity: finished ? 1 : 0,
    fontSize: finished ? "12px" : "10px",
    color: COLORS.GREEN_M,
    config: {
      duration: 50,
    },
  });
  const containerStyling = useSpring({
    border: finished
      ? `2px solid ${COLORS.GREEN_M}`
      : checkHover
      ? `2px solid ${COLORS.GRAY_D}`
      : `2px solid ${COLORS.GRAY_M}`,
    marginTop: "2px",
    config: {
      duration: 30,
    },
  });
  const captionStyling = useSpring({
    color: finished ? `${COLORS.GREEN_M}` : `black`,
    config: {
      duration: 30,
    },
  });

  const Checkmark = animated(FaCheck);
  const ToDoCaption = animated(Caption);

  return (
    <TabContainer
      className="py-1 px-1-5 mb-point-75 responsive-tab-container todo-tab"
      style={{ borderLeft: `5px solid ${colorCode}` }}
    >
      <Row>
        <Col
          flex="1"
          className="universal-top"
          onClick={() => setFinished(true)}
        >
          <animated.div
            className="universal-middle universal-center todo-tab-empty-check"
            onMouseEnter={() => setCheckHover(true)}
            onMouseLeave={() => setCheckHover(false)}
            style={{ ...containerStyling }}
          >
            <Checkmark style={{ ...checkStyling }} />
          </animated.div>
        </Col>
        <Col
          flex="30"
          className={isShortened ? "todo-tab-truncate pl-point-5" : "pl-point-5"}
          onClick={() => {
            if (props.truncate) {
              setShortened(!isShortened);
            }
          }}
        >
          <ToDoCaption className="sixteenFont" style={{ ...captionStyling }}>
            {props.task}
          </ToDoCaption>
        </Col>
      </Row>
    </TabContainer>
  );
};

export default ToDoTab;
