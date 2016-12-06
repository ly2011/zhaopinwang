import React from 'react'
import classNames from 'classnames'
import NavBar from 'COMPONENTS/NavBar'
// import BarTab from 'COMPONENTS/BarTab'
// import BarNav from 'COMPONENTS/BarNav'
// import BarTab from 'COMPONENTS/BarTab'
// import NavLink from 'COMPONENTS/NavLink'

import styles from './style.scss'
// class App extends Component {
//   render () {
//     const pageClassNames = classNames(styles.page, styles.pageCurrent)
//     return (
//       <div className={pageClassNames}>
//         <BarNav {...this.props} />
//         <BarTab {...this.props} />

//         <div className="content">
//           {this.props.children}
//         </div>
//       </div>
//     )
//   }
// }

const pageClassNames = classNames(styles.page, styles.pageCurrent)

// 无状态(stateless) 组件, 一个简单的容器,react-router会根据 route规则匹配到的组件作为 `props.children` 传入
const App = (props) => {
  return (
    <div className={pageClassNames}>
      <NavBar {...props} />
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}

export default App
