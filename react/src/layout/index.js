import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout, message } from "antd";
import Header from "../layout/header";
import Menu from "../layout/menu";
import Footer from "../layout/footer";
// import Bread from "../layout/Bread";
// import Loading from "../layout/loading";
import WcCustomerManage from "../pages/wcCustomerManage";
import WcChatRecord from "../pages/wcChatRecord";
import WcBind from "../pages/wcBind";
import NoFound from '../pages/404'

import './index.less'

const { Content } = Layout
class Common extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false // 侧边栏是否收起
    }
  }
  onToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    return (
      <Layout className="page-basic">
        <Menu 
          collapsed={this.state.collapsed}
        />
        <Layout>
          <Header 
            onToggle={this.onToggle}
            collapsed={this.state.collapsed}
          />
          <Content className="content">
            <Switch>
              <Redirect exact from="/" to="/micro/wcBind" />
              <Redirect exact from="/micro" to="/micro/wcBind" />
              <Route
                path="/micro/wcBind"
                component={WcBind}
              />
              <Route
                path="/micro/wcChatRecord"
                component={WcChatRecord}
              />
              <Route
                path="/micro/wcCustomerManage"
                component={WcCustomerManage}
              />
              <Route component={NoFound} />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

export default Common