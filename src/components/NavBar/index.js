import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './style.scss'
class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <header className={styles.header}>
        <div className={styles['header-inner']}>
          <div className={styles['head-body']}>
            <div className={styles['head-logo-wrapper']}>
              <a href='javascript:void(0);' className={classNames(styles['head-logo'], styles.icon)} />
            </div>
            <nav className={classNames(styles['head-nav'], styles.clearfix)}>
              <a className={styles['nav-item']} href='javascript:void(0);'>首页</a>
              <a className={styles['nav-item']} href='javascript:void(0);'>全部职位</a>
            </nav>
            <nav className={classNames(styles['head-right'], styles.clearfix)}>
              <div className={styles['head-search-wrapper']}>
                <div className={styles['head-search']}>
                  <span className={classNames(styles['search-icon'], 'iconfont', 'icon-search')} />

                  <input
                    className={styles.search}
                    type='text'
                    name='search'
                    placeholder='搜索公司 或 职位'
                    value='' />
                  <button className={classNames(styles['search-btn'], styles['green-btn'])} type='button'>
                    搜索
                  </button>
                </div>
              </div>
              <nav className={styles['head-nav']}>
                <a className={styles['nav-item']} href='javascript:void(0);'>登录</a>
                <a className={styles['nav-item']} href='javascript:void(0);'>注册</a>
              </nav>
              <div className={styles['head-publish']}>
                <a className={styles['blue-btn']} href='javascript'>发布职位</a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default NavBar
