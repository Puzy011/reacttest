import React from "react"
import MenuConfig from '../../router/config.js' 
import { Layout, Icon, Menu } from "antd"
import P from "prop-types";
import { Link } from "react-router-dom"
import "./index.less"

const { Sider } = Layout
const { SubMenu, Item } = Menu

export default class Menus extends React.Component {
  static propTypes = {
    collapsed: P.bool // 菜单咱开还是收起
  }
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount () {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
  renderMenu = (data) => {
    return data.map((item)=> {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <Link to={item.key}>{item.title}</Link>
      </Menu.Item>
    })
  }
  render() {
    return (
      <Sider
        width={256}
        className="sider"
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <div className={this.props.collapsed ? "logo hide" : "logo"}>
          <img src="/assets/logo192.png" alt=""/>
          <h1>Imooc MS</h1>
        </div>
        <Menu 
          theme="dark"
          mode="inline"
          >
          {this.state.menuTreeNode}
        </Menu>
      </Sider>
    )
  }
}