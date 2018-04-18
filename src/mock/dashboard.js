import { color } from '../utils/theme'

const Mock = require('mockjs')
const config = require('../utils/config')

const { apiPrefix } = config

const Dashboard = Mock.mock({
  'sales|8': [
    {
      'name|+1': 1,
      'Clothes|200-1000': 1,
      'Food|180-400': 1,
      'Electronics|300-550': 1,
    },
  ],
  cpu: {
    'usage|10000-60000': 1,
    'space|10000-100000': 1,
    'cpu|1-100': 1,
    'data|20': [
      {
        'cpu|8-20': 1,
      },
    ],
  },
  browser: [
    {
      name: 'Google Chrome',
      percent: 43.3,
      status: 1,
    },
    {
      name: 'Mozilla Firefox',
      percent: 33.4,
      status: 2,
    },
    {
      name: 'Apple Safari',
      percent: 34.6,
      status: 3,
    },
    {
      name: 'Internet Explorer',
      percent: 12.3,
      status: 4,
    },
    {
      name: 'Opera Mini',
      percent: 3.3,
      status: 5,
    },
    {
      name: 'Chromium',
      percent: 2.53,
      status: 1,
    },
  ],

  'completed|12': [
    {
      'name|+1': 2008,
      'Task complete|200-1000': 1,
      'Cards Complete|200-1000': 1,
    },
  ],
  'recentSales|36': [
    {
      'id|+1': 1,
      'name|1-12': 1,
      'status|1-5': 1,
      date () {
        return `${Mock.Random.integer(2015, 2018)}-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
      },
      'price|10-50000.1-2': 1,
    },
  ],
  numbers: [
    {
      icon: 'pay-circle-o',
      color: color.green,
      title: '今日收益',
      number: 2781,
    }, {
      icon: 'team',
      color: color.blue,
      title: '招商投资人数',
      number: 3241,
    }, {
      icon: 'message',
      color: color.purple,
      title: '解惑答疑',
      number: 253,
    }, {
      icon: 'shopping-cart',
      color: color.red,
      title: '全国店铺',
      number: 4324,
    },
  ],
})

module.exports = {
  [`GET ${apiPrefix}/dashboard`] (req, res) {
    res.json(Dashboard)
  },
}
