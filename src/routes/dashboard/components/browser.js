import React from 'react'
import PropTypes from 'prop-types'
import { Table, Tag } from 'antd'
import { color } from 'utils'
import styles from './browser.less'

const status = {
  1: {
    color: color.green,
  },
  2: {
    color: color.red,
  },
  3: {
    color: color.blue,
  },
  4: {
    color: color.yellow,
  },
  5: {
    color: color.gray
  }
}

function Browser ({ data }) {
  const columns = [
    {
      title:'tit',
      dataIndex:'tit'
    },
    {
      title: 'name',
      dataIndex: 'name',
      className: styles.name,
    }, {
      title: 'percent',
      dataIndex: 'percent',
      className: styles.percent,
      render: (text, it) => <Tag color={status[it.status].color}>{text}%</Tag>,
    },
  ]
  return <Table title={() => `快售罄商品`} pagination={false} showHeader={false} columns={columns} rowKey={(record, key) => key} dataSource={data} />
}

Browser.propTypes = {
  data: PropTypes.array,
}

export default Browser
