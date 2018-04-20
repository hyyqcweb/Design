import React from 'react'
import { Table,Popconfirm } from 'antd'
import styles from './List.less'

const superA = {
  1:{
    text:'大米'
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

const imageA = {
  1 : {
    text : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220341122&di=0fc48134c3714de848cd4a36a7f4f922&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Dddde8dd95c2c11dfcadcb7630a5f07bc%2F6a63f6246b600c33384394f2114c510fd9f9a1d6.jpg'
  },
  2 : {
    text : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220341122&di=67e70b4befe274c18f2304160e6ff4c2&imgtype=0&src=http%3A%2F%2Fd.youth.cn%2Fsk%2F201705%2FW020170530631168220485.png'
  }, 3 : {
    text : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220341122&di=67e70b4befe274c18f2304160e6ff4c2&imgtype=0&src=http%3A%2F%2Fd'
  }, 4 : {
    text : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220341122&di=67e70b4befe274c18f2304160e6ff4c2&imgtype=0&src=http%3A%2F%2Fd'
  }, 5 : {
    text : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220341121&di=a9acc5aa09e5f663dcd33c136c656e3e&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D1e7c7e5d5d4e9258b2398eaef5fab434%2Ff9dcd100baa1cd1165d4e419b212c8fcc3ce2dac.jpg'
  }, 6 : {
    text : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220341121&di=682756d2756a7c5bc9f390798368250a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D8f10aae57dc6a7efad2ba0669482ca3d%2F6d81800a19d8bc3ed93409f0898ba61ea8d345cf.jpg'
  }, 7 : {
    text : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220341122&di=67e70b4befe274c18f2304160e6ff4c2&imgtype=0&src=http%3A%2F%2Fd.youth.cn%2Fsk%2F201705%2FW020170530631168220485.png'
  }, 8 : {
    text : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220341122&di=67e70b4befe274c18f2304160e6ff4c2&imgtype=0&src=http%3A%2F%2Fd.youth.cn%2Fsk%2F201705%2FW020170530631168220485.png'
  }, 9 : {
    text : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220341122&di=67e70b4befe274c18f2304160e6ff4c2&imgtype=0&src=http%3A%2F%2Fd.youth.cn%2Fsk%2F201705%2FW020170530631168220485.png'
  }, 10 : {
    text : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220341122&di=67e70b4befe274c18f2304160e6ff4c2&imgtype=0&src=http%3A%2F%2Fd.youth.cn%2Fsk%2F201705%2FW020170530631168220485.png'
  }, 11 : {
    text : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220341122&di=67e70b4befe274c18f2304160e6ff4c2&imgtype=0&src=http%3A%2F%2Fd.youth.cn%2Fsk%2F201705%2FW020170530631168220485.png'
  }, 12 : {
    text : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220341122&di=67e70b4befe274c18f2304160e6ff4c2&imgtype=0&src=http%3A%2F%2Fd.youth.cn%2Fsk%2F201705%2FW020170530631168220485.png'
  }
}
// debugger
const List = ({ ...tableProps,onDeleteItem }) => {
  let parse = parseInt(Math.random()*12);
  console.log(parse);
  // debugger
  const columns = [
    {
      title: '图片',
      dataIndex: 'image',
      render: id => <img src={imageA[1].text} width={100} height={100} alt=""/>
    }, {
      title: '名字',
      dataIndex: 'author',
      render: text => <span>{superA[1].text}</span>
    },  {
      title: '保质期',
      dataIndex: 'tags',
    }, {
      title: '生产地址',
      dataIndex: 'visibility',
    }, {
      title: '店家联系方式',
      dataIndex: 'comments',
    },{
      title: '入库时间',
      dataIndex: 'date',
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
