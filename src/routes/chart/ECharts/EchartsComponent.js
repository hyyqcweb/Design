import React from 'react'
import PropTypes from 'prop-types'

import SimpleChartComponent from './SimpleChartComponent'
import AirportCoordComponent from './AirportCoordComponent'

const EchartsComponent = ({ type }) => {
  if (type === 'simple') return (<SimpleChartComponent />)
  if (type === 'airport') return (<AirportCoordComponent />)
  return (<AirportCoordComponent />)
}

EchartsComponent.propTypes = {
  type: PropTypes.string,
}

export default EchartsComponent
