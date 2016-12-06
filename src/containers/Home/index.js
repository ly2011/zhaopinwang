import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './style.scss'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleTagBlockMouseEnter = this.handleTagBlockMouseEnter.bind(this)
    this.handleTagBlockMouseLeave = this.handleTagBlockMouseLeave.bind(this)
  }
  handleTagBlockMouseEnter (event) {
    let oldTarget = event.target
    let tagList = oldTarget.querySelector('[class*="tag-list__"]')
    let tagListActive = oldTarget.querySelector('[class*="tag-list--active___"]')
    if (!!tagList && !!tagListActive) {
      tagList.style.display = 'none'
      tagListActive.style.display = 'flex'
    }
  }
  handleTagBlockMouseLeave (event) {
    let oldTarget = event.target
    let tagList = oldTarget.querySelector('[class*="tag-list__"]')
    let tagListActive = oldTarget.querySelector('[class*="tag-list--active___"]')
    if (!!tagList && !!tagListActive) {
      tagList.style.display = 'flex'
      tagListActive.style.display = 'none'
    }
  }
  render () {
    let jobItems = ''
    jobItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
      return <JobItem key={item} />
    })
    let tagItems = [
      {
        title: '技术',
        items: ['PHP', 'Python', 'Java', 'Ruby', 'iOS', 'Andriod', 'JavaScript', 'C/C++', 'C#', 'Linux', 'Web 前端', '构架师', '高级工程师', '运维', '测试']
      },
      {
        title: '设计',
        items: ['UI', 'UE', '交互', '平面', '视觉', '设计师']
      },
      {
        title: '产品',
        items: ['移动产品经理', '产品经理', '产品专员']
      },
      {
        title: '运营',
        items: ['运营专员', '产品运营', '策划', '编辑']
      },
      {
        title: '市场/销售',
        items: ['销售', '商务', '市场', 'BD']
      }
    ]

    let tagBlocks = tagItems.map((item, index) => {
      return <TagBlock item={item} key={index} handleTagBlockMouseEnter={this.handleTagBlockMouseEnter} handleTagBlockMouseLeave={this.handleTagBlockMouseLeave} />
    })
    return (
      <div>
        <div className={styles.welcome}>
          <div className={styles.wrapper}>
            <div className={styles.filter}>
              <div className={styles['filter-container']}>
                <div className={classNames(styles['container-head'], styles['clearfix'])}>
                  <a className={styles['container-head-more']} href='javascript:void(0);'>
                  浏览全部
                  <span className={classNames(styles['container-head-icon'])}>></span>
                  </a>
                  <h2 className={styles['container-head-title']}>职位分类</h2>
                </div>
                <div className={styles['container-body']}>
                  {tagBlocks}
                </div>
              </div>
            </div>

            <div className={styles.branding}>
              <div className={styles['branding-logo']} />
              <a className={classNames(styles['branding-action'], styles['blue-btn'])}>下载客户端</a>
            </div>
          </div>
        </div>

        <div className={classNames(styles['jobs'])}>
          <div className={styles['jobs-inner']}>
            <div className={styles['jobs-top']}>
              <div className={classNames(styles['jobs-top-more-wrapper'], styles['clearfix'])}>
                <a className={styles['jobs-top-more']} href='javascript;'>
                  <span>更多职位</span>
                </a>
                <h2 className={classNames(styles['jobs-top-more-title'])}>精选职位</h2>
              </div>
            </div>
            <ul className={classNames(styles['jobs-list'], styles['clearfix'])}>
              <li className={classNames(styles['jobs-category'], styles['hot'], styles['active'], styles['clearfix'])}>
                <ul>
                  {jobItems}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles['usher']}>
          <a className={classNames(styles['usher-more'])} href='javascript:void(0);'>更多职位</a>
        </div>

        <div className={styles.footer}>
          <div className={styles['footer-inner']}>
            <span className={styles['copyright']}>© 2016 哪上班・京ICP备14012794</span>
            <ul className={classNames(styles['links'], styles['clearfix'])}>
              <li className={styles['link-item']}>
                <a className={styles['link-item-title']} href='javascript:void(0)'>博客</a>
              </li>
              <li className={styles['link-item']}>
                <a className={styles['link-item-title']} href='javascript:void(0)'>关于我们</a>
              </li>
              <li className={styles['link-item']}>
                <a className={styles['link-item-title']} href='javascript:void(0)'>用户协议</a>
              </li>
              <li className={styles['link-item']}>
                <a className={styles['link-item-title']} href='javascript:void(0)'>合作伙伴</a>
              </li>
              <li className={styles['link-item']}>
                <a className={styles['link-item-title']} href='javascript:void(0)'>意见反馈</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const JobItem = (props) => {
  return (
    <li className={classNames(styles['job-item'])}>
      <a className={classNames(styles['job-link'], styles['clearfix'])} href='javascript:void(0);'>
        <div className={styles['job-main']}>
          <div className={styles['job-name']}>
            PHP工程师
          </div>
          <div className={styles['job-company-info']}>
            <span className={classNames(styles['icon'], styles['job-company-icon'], 'iconfont', 'icon-house')} />
            <span className={styles['job-company-name']}>
              <span className={styles['job-company-tag']}>(移动互联网, 教育)</span>
            </span>
          </div>

          <div className={styles['job-company-desc']}>
            <span className={classNames(styles['icon'], styles['location'], 'iconfont', 'icon-location')} />
            <span className={styles['job-company-address']}>北京</span>
            <span className={classNames(styles['icon'], styles['money'], 'iconfont', 'icon-money')} />
            <span className={styles['job-price']}>2000 起</span>
          </div>
        </div>
        <div className={styles['job-logo-wrapper']}>
          <div className={styles['job-logo']} />
        </div>
      </a>
    </li>
  )
}

const TagBlock = (props) => {
  let tagItems = ''
  // let items = ['PHP', 'Python', 'Java', 'Ruby', 'iOS', 'Andriod']
  let {title, items} = props.item
  let {handleTagBlockMouseEnter, handleTagBlockMouseLeave} = props
  tagItems = items.map((item, index) => {
    return <TagListItem item={item} key={index} />
  })
  // console.log('handleTagBlockMouseEnter >>>', handleTagBlockMouseEnter)
  return (
    <div className={classNames(styles['tag-block'])} onMouseEnter={handleTagBlockMouseEnter} onMouseLeave={handleTagBlockMouseLeave}>
      <div className={classNames(styles['block-title'])}>
        {title}
      </div>
      <div className={styles['tag-list']}>
        {tagItems}
      </div>

      <div className={styles['tag-list--active']}>
        {tagItems}
      </div>
    </div>
  )
}

const TagListItem = (props) => {
  const {item} = props
  return (
    <a className={classNames(styles['tag-list-item'])} href='javascript:void(0);'>{item}</a>
  )
}

export default Home
