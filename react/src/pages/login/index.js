import React from 'react'
import { Form, Input, Button, Icon, Checkbox, message } from 'antd'
import './index.less'

export default class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log('Received values of form: ', values)
        return
      }
      let obj = JSON.stringify({
        username: values.username,
        password: values.password
      })

      localStorage.setItem("userInfo", obj)
      alert(localStorage.getItem("userInfo"))
      if (localStorage.getItem("userInfo")) {
        this.props.history.replace("/")
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form
    return (
      <div className="page-login">
        <div className="box">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="admin"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="123456"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住密码</Checkbox>)}
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
Login = Form.create({})(Login)