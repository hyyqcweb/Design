import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Popover, Layout,Avatar,Tooltip,Badge,Divider } from 'antd'
import classnames from 'classnames'
import { config } from 'utils'
import styles from './Header.less'
import Menus from './Menu'
import * as Screenfull from 'screenfull'

const { SubMenu } = Menu

const Header = ({
  user, logout, switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, changeOpenKeys, menu,
}) => {
  let handleClickMenu = e => e.key === 'logout' && logout()
  const menusProps = {
    menu,
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys,
  }
  return (
    <Layout.Header className={styles.header}>
      {isNavbar
        ? <Popover placement="bottomLeft" onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName={styles.popovermenu} trigger="click" content={<Menus {...menusProps} />}>
          <div className={styles.button}>
            <Icon type="bars" />
          </div>
        </Popover>
        : <div
          className={styles.button}
          onClick={switchSider}
        >
          <Icon type={classnames({ 'menu-unfold': siderFold, 'menu-fold': !siderFold })} />
        </div>}
      <div className={styles.rightWarpper}>
        <span className={styles.arrows} onClick={() => {
          if (Screenfull.enabled) {
            Screenfull.request();
            if (true) {
              Screenfull.exit();
            }
          }
        }}>
           <Tooltip title="点击全屏">
          <Icon type="arrows-alt"/>
           </Tooltip>
        </span>
        <span className={styles.action}>
             <Tooltip title="使用文档完善中">
              <a
                target="_blank"
                href="javascript:;"
                rel="noopener noreferrer"
              >
              <Icon type="question-circle-o"/>
            </a>
             </Tooltip>
           </span>
        <span className={styles.notice}>
          <Tooltip title="提醒通知事项等，开发中...">
            <Badge count={3}><Icon type="bell"/></Badge>
          </Tooltip>
        </span>
        <div className={styles.button}>
          <Tooltip title="查看邮件">
            <a
              target="_blank"
              href="http://junjie_hyyqc@163.com"
            >
              <Icon type="mail" style={{color:'none'}} />
            </a>
          </Tooltip>
        </div>
        <Menu mode="horizontal" style={{paddingTop:4}} onClick={handleClickMenu}>
          <SubMenu
            style={{
              float: 'right',
            }}
            title={<span>
              <Avatar size="small" className={styles.avatar} src={config.logo}/>
              {user.username}
            </span>}
          >

            <Menu.Item key="reset">
              <Icon type="logout"/>个人设置
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="logout">
              <Icon type="poweroff" /> 退出登录
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Layout.Header>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
  user: PropTypes.object,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: PropTypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
}

export default Header
