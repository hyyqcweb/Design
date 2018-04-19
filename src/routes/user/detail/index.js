import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'

const Detail = ({ userDetail }) => {
  const { data } = userDetail
  const content = []
  // debugger
  for (let key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      content.push(<div key={key} className={styles.item}>
        <div>{key}</div>
        <div>{String(data[key])}</div>
      </div>)
    }
  }
  return (<div className="content-inner">
      <ul className={styles.container}>
        <li>序号:<span>{data.id}</span></li>
        <li>是否成功: <span>{data.statusCode}</span></li>
        <li>名字: <span>{data.name}</span></li>
        <li>年龄: <span>{data.age}</span></li>
        <li>电话号码: <span>{data.phone}</span></li>
        <li>邮箱: <span>{data.email}</span></li>
        <li>地址: <span>{data.address}</span></li>
        <li>创建时间: <span>{data.createTime}</span></li>
      </ul>

  </div>)
}


Detail.propTypes = {
  userDetail: PropTypes.object,
}

export default connect(({ userDetail, loading }) => ({ userDetail, loading: loading.models.userDetail }))(Detail)
