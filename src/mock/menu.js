const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'dashboard',
    name: '首页',
    route: '/dashboard',
  },
  {
    id: '2',
    bpid: '1',
    name: '员工管理',
    icon: 'user',
    route: '/user',
  },
  {
    id: '7',
    bpid: '1',
    name: '商品查看',
    icon: 'pie-chart',
    route: '/post',
  },
  {
    id: '21',
    mpid: '-1',
    bpid: '2',
    name: '员工详情',
    route: '/user/:id',
  },
  {
    id: '3',
    bpid: '1',
    name: '模拟请求',
    icon: 'api',
    route: '/request',
  },
  // {
  //   id: '4',
  //   bpid: '1',
  //   name: 'UI Element',
  //   icon: 'camera-o',
  // },
  // {
  //   id: '41',
  //   bpid: '4',
  //   mpid: '4',
  //   name: 'IconFont',
  //   icon: 'heart-o',
  //   route: '/UIElement/iconfont',
  // },
  // {
  //   id: '42',
  //   bpid: '4',
  //   mpid: '4',
  //   name: 'DataTable',
  //   icon: 'database',
  //   route: '/UIElement/dataTable',
  // },
  // {
  //   id: '43',
  //   bpid: '4',
  //   mpid: '4',
  //   name: 'DropOption',
  //   icon: 'bars',
  //   route: '/UIElement/dropOption',
  // },
  // {
  //   id: '44',
  //   bpid: '4',
  //   mpid: '4',
  //   name: 'Search',
  //   icon: 'search',
  //   route: '/UIElement/search',
  // },
  // {
  //   id: '45',
  //   bpid: '4',
  //   mpid: '4',
  //   name: '56pxor',
  //   icon: 'edit',
  //   route: '/UIElement/editor',
  // },
  // {
  //   id: '46',
  //   bpid: '4',
  //   mpid: '4',
  //   name: 'layer (Function)',
  //   icon: 'credit-card',
  //   route: '/UIElement/layer',
  // },
  {
    id: '5',
    bpid: '1',
    name: '图表',
    icon: 'code-o',
  },
  {
    id: '51',
    bpid: '5',
    mpid: '5',
    name: '图表展示',
    icon: 'line-chart',
    route: '/chart/ECharts',
  },
  {
    id: '6',
    bpid: '1',
    name: '测试导航',
    icon: 'smile',
  },
  {
    id: '61',
    bpid: '6',
    mpid: '6',
    name: '403页',
    icon: 'ellipsis',
    route: '/exception/403',
  },
  {
    id: '62',
    bpid: '6',
    mpid: '6',
    name: '404页',
    icon: 'ellipsis',
    route: '/exception/404',
  },
  {
    id: '63',
    bpid: '6',
    mpid: '6',
    name: '500页',
    icon: 'ellipsis',
    route: '/exception/500',
  },
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
