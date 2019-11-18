const menus = [
  // {key: '/micro/index', title: '首页', icon: '', component: 'aaa'},
  { 
    key: '/micro',
    title: '微控',
    icon: '',
    children: [
      { key: '/micro/wcBind', title: '微信号绑定', icon: '', component: 'WcBind' },
      { key: '/micro/wcCustomerManage', title: '微信客户管理', icon: '', component: 'WcCustomerManage' },
      { key: '/micro/wcChatRecord', title: '聊天记录查询', icon: '', component: 'WcChatRecord' }
    ]
  }
]

export default menus