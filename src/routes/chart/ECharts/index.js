import React from 'react'
import { Radio } from 'antd'
import { Page } from 'components'
import EchartsComponent from './EchartsComponent'
import styles from './index.less'

const RadioGroup = Radio.Group

const chartList = [
  {
    label: '销售走势',
    value: 'simple',
  },
  {
    label: '全国店铺预览',
    value: 'airport',
  },
]

class Chart extends React.Component {
  constructor () {
    super()
    this.state = {
      type: '',
    }
    this.handleRadioGroupChange = this.handleRadioGroupChange.bind(this)
  }
  handleRadioGroupChange (e) {
    this.setState({
      type: e.target.value,
    })
  }
  render () {
    return (<Page inner id="EChartsMain">
      <RadioGroup options={chartList} defaultValue="airport" onChange={this.handleRadioGroupChange} />
      <div className={styles.chart}>
        <EchartsComponent type={this.state.type} />
      </div>
    </Page>)
  }
}


export default Chart
