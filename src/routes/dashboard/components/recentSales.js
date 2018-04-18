import React from 'react'
import PropTypes from 'prop-types'
import { Table, Tag } from 'antd'
import { color } from 'utils'
import styles from './recentSales.less'

const status = {
  1: {
    color: color.green,
    text: '80%',
  },
  2: {
    color: color.yellow,
    text: '50%',
  },
  3: {
    color: color.red,
    text: '30%',
  },
  4: {
    color: color.blue,
    text: '100%',
  },
  5: {
    color: color.gray,
    text: '0%',
  },
}

const superA = {
  1:{
    text:'碳酸饮料'
  },
  2:{
    text:'香烟'
  },
  3:{
    text:'烟酒年节礼盒 '
  },
  4:{
    text:'冲调食品'
  },
  5:{
    text:'营养保健'
  },
  6:{
    text:'糖果/巧克力'
  },
  7:{
    text:'季节性休闲食品'
  },
  8:{
    text:'南北干货'
  },
  9:{
    text:'外购面包'
  },
  10:{
    text:'鱼'
  },
  11:{
    text:'生 鲜 海产'
  },
  12:{
    text:'加工肉品'
  }
}

function RecentSales ({ data }) {
  const columns = [
    {
      title: '商品名称',
      dataIndex: 'name',
      render: text => <span>{superA[text].text}</span>
    }, {
      title: '剩余状态',
      dataIndex: 'status',
      render: text => <Tag color={status[text].color}>{status[text].text}</Tag>,
    }, {
      title: '截止时间',
      dataIndex: 'date',
      render: text => new Date(text).format('yyyy-MM-dd HH:mm:ss'),
    }, {
      title: '商品库存总价',
      dataIndex: 'price',
      render: (text, it) => <span style={{ color: status[it.status].color }}>{text}</span>,
    },
  ]
  return (
    <div className={styles.recentsales}>
      <Table pagination={false} columns={columns} rowKey={(record, key) => key} dataSource={data.filter((item, key) => key < 20)} />
    </div>
  )
}

RecentSales.propTypes = {
  data: PropTypes.array,
}

export default RecentSales
