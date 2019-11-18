import React from "react"
import P from "prop-types";
import { Link } from "react-router-dom"
import { Layout, Icon, Tooltip, Menu, Dropdown } from "antd"

import "./index.less"
import "../../style/common.less"

const { Header } = Layout

export default class Heade extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  toggle = () => {
    this.props.onToggle()
  }
  render() {
    return (
      <Header className="header">
        <Tooltip
          placement="bottom"
          title={this.props.collapsed ? "展开菜单" : "收起菜单"}
        >
          <Icon
            className={
              this.props.collapsed
                ? "trigger flex-none"
                : "trigger flex-none fold"
            }
            type={"menu-unfold"}
            onClick={this.toggle}
          />
        </Tooltip>
        <div className="rightBox flex-auto flex-row flex-je flex-ac">
          <Dropdown overlay={
            <Menu>
              <Menu.Item>
                {/* <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  
                </a> */}
                <Link to="/login">退出登录</Link>
              </Menu.Item>
            </Menu>
          }>
            <span className="ant-dropdown-link">
              admin <Icon type="down" />
            </span>
          </Dropdown>
        </div>
      </Header>
    )
  }
}
Heade.propTypes = {
  onToggle: P.func, // 菜单收起与展开状态切换
  collapsed: P.bool // 菜单的状态
};