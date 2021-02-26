import React, { useState, createRef } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  Tooltip,
  DatePicker,
  TimePicker,
  Form,
  Select,
  Dropdown,
  Divider,
} from "antd";
import { Header, Caption, COLORS } from "../../Styled/FundamentalComponents";
import { AiOutlinePlus } from "react-icons/ai";
import { PlusOutlined } from "@ant-design/icons";
// import { CirclePicker } from "react-color";

import _ from "lodash";

// Redux
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const { Option } = Select;

const tagColors = [
  COLORS.BLUE_L,
  COLORS.CYAN_L,
  COLORS.GEEKBLUE_L,
  COLORS.GOLD_L,
  COLORS.GRAY_M,
  COLORS.MAGENTA_L,
  COLORS.ORANGE_L,
  COLORS.PURPLE_L,
  COLORS.RED_L,
  COLORS.VOLCANO_L,
];

const AddTagButton = (props) => {
  const items = _.countBy(props.todos, (todo) => todo.tag.type);

  return (
    <Tooltip title="Add Tag">
      <Dropdown overlay={<AddTagOverlay items={items} />} trigger={["click"]}>
        <div className="manage-applicants-icon-add">
          <AiOutlinePlus className="manage-applicants-icon" />
        </div>
      </Dropdown>
    </Tooltip>
  );
};

const AddTagOverlay = (props) => {
  const [tagColor, setTagColor] = useState(COLORS.BLUE_L);

  return (
    <div className="p-1 add-tag-overlay-container">
      <Form>
        <Row className="mb-point-5">
        <Header className="sixteenFont" bolded>Tag Name</Header>
        </Row>
        <Form.Item>
          <Select
            style={{ width: "100%" }}
            placeholder="Pick Tag"
            dropdownRender={(menu) => (
              <div>
                {menu}
                <Divider style={{ margin: "4px 0" }} />
                <div
                  style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}
                >
                  <Input size="small" />
                  <a className="add-tag-overlay-add-tag-button">
                    <PlusOutlined /> New Tag
                  </a>
                </div>
              </div>
            )}
          >
            {_.keys(props.items).map((item) => (
              <Option key={item}>{_.startCase(item)}</Option>
            ))}
          </Select>
        </Form.Item>
        <Row>
          {/* <CirclePicker
            color={tagColor}
            colors={tagColors}
            onChange={(color) => setTagColor(color.hex)}
          /> */}
        </Row>
        <Row className="mt-1-5" justify="end">
          <Button htmlType="submit" type="primary" style={{width: "100%"}}>Add Tag</Button>
        </Row>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps)(AddTagButton);
