import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'

@CSSModules(styles)
class NotFound extends Component {
  render () {
    return (
      <div styleName='main'>
        404
        NotFound
      </div>
    )
  }
}

// export default CSSModules(NotFound, styles)
export default NotFound
