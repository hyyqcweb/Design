import React from 'react'
import PropTypes from 'prop-types'
import { color } from 'utils'
import CountUp from 'react-countup'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import styles from './cpu.less'

const countUpProps = {
  start: 0,
  duration: 2.75,
  useEasing: true,
  useGrouping: true,
  separator: ',',
}

function Cpu ({
  usage, space, cpu, data,
}) {
  return (<div className={styles.cpu}>
    <div className={styles.number}>
      <div className={styles.item}>
        <p>昨日收益</p>
        <p><CountUp
          end={usage}
          suffix="元"
          {...countUpProps}
        /></p>
      </div>
      <div className={styles.item}>
        <p>今日收益</p>
        <p><CountUp
          end={space}
          suffix="元"
          {...countUpProps}
        /></p>
      </div>
      <div className={styles.item}>
        <p>同比增长</p>
        <p><CountUp
          end={cpu}
          suffix="%"
          {...countUpProps}
        /></p>
      </div>
    </div>
    <ResponsiveContainer minHeight={300}>
      <LineChart data={data} margin={{ left: 0 }}>
        <XAxis dataKey="name" axisLine={{ stroke: color.borderBase, strokeWidth: 1 }} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <CartesianGrid vertical={false} stroke={color.borderBase} strokeDasharray="3 3" />
        <Line type="monotone" connectNulls dataKey="cpu" stroke={color.blue} fill={color.blue} />
      </LineChart>
    </ResponsiveContainer>
  </div>)
}

Cpu.propTypes = {
  data: PropTypes.array,
  usage: PropTypes.number,
  space: PropTypes.number,
  cpu: PropTypes.number,
}

export default Cpu
