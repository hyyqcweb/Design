import React from 'react'
import { Table,Popconfirm } from 'antd'
import styles from './List.less'

const List = ({ ...tableProps,onDeleteItem }) => {
  const columns = [
    {
      title: '头像',
      dataIndex: 'image',
      className: styles.image,
      width: 64,
      render: text => <img alt="Feture" width={26} src={text} />,
    }, {
      title: '名字',
      dataIndex: 'author',
    }, {
      title: '性别',
      dataIndex: 'categories',
      render: text => (<span>{text
        ? '男'
        : '女'}</span>),
    }, {
      title: '年龄',
      dataIndex: 'tags',
    }, {
      title: '住址',
      dataIndex: 'visibility',
    }, {
      title: '联系方式',
      dataIndex: 'comments',
    }, {
      title: '权限',
      dataIndex: 'views',
    }, {
      title: '操作',
      dataIndex: 'date',
      render: (text, record) => <span>
         <Popconfirm title="你是否要删除?" okText="是" cancelText="否" onConfirm={() => onDeleteItem(record._id)}>
           <a>删除</a>
        </Popconfirm>
      </span>
    },
  ]

  return (
    <div>
      <Table
        {...tableProps}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        className={styles.table}
        rowKey={record => record.id}
      />
    </div>
  )
}

export default List
