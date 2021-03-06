/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from 'components'
import { Form, Button, Row, Col, DatePicker, Input, Cascader, Switch ,LocaleProvider } from 'antd'
import city from '../../utils/city'

const { Search } = Input
const { RangePicker } = DatePicker
const FormItem = Form.Item;
const dateFormat = 'YYYY/MM/DD';

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },

}
const size = "large"

const TwoColProps = {
  ...ColProps,
  xl: 96,
}

const Filter = ({
  onAdd,
  isMotion,
  switchIsMotion,
  onFilterChange,
  filter,
  form: {
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue,
  },
}) => {
  const handleFields = (fields) => {
    const { createTime } = fields
    if (createTime.length) {
      fields.createTime = [createTime[0].format('YYYY-MM-DD'), createTime[1].format('YYYY-MM-DD')]
    }
    return fields
  }

  const handleSubmit = () => {
    let fields = getFieldsValue()
    fields = handleFields(fields)
    onFilterChange(fields)
  }

  const handleReset = () => {
    const fields = getFieldsValue()
    for (let item in fields) {
      if ({}.hasOwnProperty.call(fields, item)) {
        if (fields[item] instanceof Array) {
          fields[item] = []
        } else {
          fields[item] = undefined
        }
      }
    }
    setFieldsValue(fields)
    handleSubmit()
  }

  const handleChange = (key, values) => {
    let fields = getFieldsValue()
    fields[key] = values
    fields = handleFields(fields)
    onFilterChange(fields)
  }
  const { name, address } = filter

  let initialCreateTime = []
  if (filter.createTime && filter.createTime[0]) {
    initialCreateTime[0] = moment(filter.createTime[0])
  }
  if (filter.createTime && filter.createTime[1]) {
    initialCreateTime[1] = moment(filter.createTime[1])
  }

  return (
    <Row gutter={24}>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('name', { initialValue: name })(<Search placeholder="搜索名字" size="large" onSearch={handleSubmit} />)}
      </Col>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }} id="addressCascader">
        {getFieldDecorator('address', { initialValue: address })(<Cascader
          style={{ width: '100%' }}
          size="large"
          options={city}
          placeholder="请选择地址"
          onChange={handleChange.bind(null, 'address')}
          getPopupContainer={() => document.getElementById('addressCascader')}
        />)}
      </Col>
      <Col {...ColProps} xl={{span: 6}} md={{span: 8}} sm={{span: 12}} id="createTimeRangePicker">
        <FormItem>
          {getFieldDecorator('createTime', {initialValue: initialCreateTime})(
            <RangePicker style={{width: '100%'}}
                         size="large"
                         onChange={handleChange.bind(null, 'createTime')}/>
          )}
        </FormItem>
      </Col>
      <Col {...TwoColProps} xl={{ span: 10 }} md={{ span: 24 }} sm={{ span: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <Button type="primary" className="margin-right" size={size} onClick={handleSubmit}>搜索</Button>
            <Button size={size} onClick={handleReset}>重置</Button>
          </div>
          <div className="flex-vertical-center">
            <Button type="ghost" size={size} onClick={onAdd}>增加</Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

Filter.propTypes = {
  onAdd: PropTypes.func,
  isMotion: PropTypes.bool,
  switchIsMotion: PropTypes.func,
  form: PropTypes.object,
  filter: PropTypes.object,
  onFilterChange: PropTypes.func,
}

export default Form.create()(Filter)
