import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader } from 'antd'
import city from '../../utils/city'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  item = {},
  okText="确认",
  canceText="取消",
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      data.address = data.address.join(' ')
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="名字" hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,message: '名字必需'
              },
            ],
          })(<Input placeholder="请输入名字" disabled={!!item.name}/>)}
        </FormItem>
        <FormItem label="性别" hasFeedback {...formItemLayout}>
          {getFieldDecorator('isMale', {
            initialValue: item.isMale,
            rules: [
              {
                required: true,
                type: 'boolean',
                message: '性别必需'
              },
            ],
          })(<Radio.Group>
            <Radio value>男</Radio>
            <Radio value={false}>女</Radio>
          </Radio.Group>)}
        </FormItem>
        <FormItem label="年龄" hasFeedback {...formItemLayout}>
          {getFieldDecorator('age', {
            initialValue: item.age,
            rules: [
              {
                required: false,
                type: 'number',
                message: '请输入年龄',
              },
            ],
          })(<InputNumber placeholder="请输入年龄" min={18} max={100} />)}
        </FormItem>
        <FormItem label="手机号码" hasFeedback {...formItemLayout}>
          {getFieldDecorator('phone', {
            initialValue: item.phone,
            rules: [
              {
                required: true,
                pattern: /^1[3578]\d{9}$/,
                message: '请输入有效的手机号',
              },
            ],
          })(<Input placeholder="请输入手机号码" />)}
        </FormItem>
        <FormItem label="E-mail" hasFeedback {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: item.email,
            rules: [
              {
                required: true,
                pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                message: '请输入有效的邮箱',
              },
            ],
          })(<Input placeholder="请输入邮箱" />)}
        </FormItem>
        <FormItem label="地址" hasFeedback {...formItemLayout}>
          {getFieldDecorator('address', {
            initialValue: item.address && item.address.split(' '),
            rules: [
              {
                required: true,
                message: '请输入地址',
              },
            ],
          })(<Cascader
            style={{ width: '100%' }}
            options={city}
            placeholder="请输入地址"
          />)}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
