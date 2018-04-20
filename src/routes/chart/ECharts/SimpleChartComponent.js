import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './theme/macarons.js'

const SimpleChartComponent = () => {
  const option = {
    title: {
      text: '销售走势图（万）',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['超市一周走势'],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '超市一周走势',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [10, 15, 18, 13, 14, 25, 28],
      },
    ],
  }
  let code = '<ReactEcharts \n' +
                    '    option={this.getOtion()} \n' +
                    "    style={{height: '350px', width: '100%'}}  \n" +
                    "    className='react_for_echarts' />"
  return (
    <div className="examples">
      <div className="parent">
        <label style={{marginTop:50}}></label>
        <ReactEcharts
          option={option}
          style={{ height: '350px', width: '100%' }}
          className="react_for_echarts"
          theme="macarons"
        />
      </div>
    </div>
  )
}


export default SimpleChartComponent
