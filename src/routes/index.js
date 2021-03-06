/*
 * @Author: fengyun2
 * @Date:   2016-10-22 14:39:34
 * @Last Modified by: fengyun2
 * @Last Modified time: 2016-12-11 13:34:57
 */

/**
 * 绝对路径 or 相对路径
 * bug: 想不明白为啥 NotFound 懒加载就出错(解决了)
 */
export default [{
  path: '/',
  // component: require('CONTAINERS/App').default,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('CONTAINERS/App').default)
    })
  },
  indexRoute: { // 默认路径
    // component: require('CONTAINERS/Note').default

    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('CONTAINERS/Home').default)
      })
    }

  },
  childRoutes: [{
    path: 'home',
    // component: require('CONTAINERS/Brand').default
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('CONTAINERS/Home').default)
      })
    }
  }, {
    // path: 'cell',
    // // component: require('CONTAINERS/Product').default
    // getComponent(nextState, cb) {
    //   require.ensure([], (require) => {
    //     cb(null, require('CONTAINERS/CellDemo').default)
    //   })
    // }
  }, {
    // path: 'nav',
    // // component: require('CONTAINERS/Category/add').default
    // getComponent(nextState, cb) {
    //   require.ensure([], (require) => {
    //     cb(null, require('CONTAINERS/NavBarDemo').default)
    //   })
    // }
  }, {
    // path: 'add_user',
    // // component: require('CONTAINERS/Category/add').default
    // getComponent(nextState, cb) {
    //   require.ensure([], (require) => {
    //     cb(null, require('CONTAINERS/UserDemo/add').default)
    //   })
    // }
  }, {
      // path: 'user_list',
      // // component: require('CONTAINERS/Category/add').default
      // getComponent(nextState, cb) {
      //   require.ensure([], (require) => {
      //     cb(null, require('CONTAINERS/UserDemo').default)
      //   })
      // }
  }, {
      // path: 'add_article',
      // // component: require('CONTAINERS/Note').default,
      // onEnter(nextState, replaceState) { // nextState 表示要进入的下一个路径 replaceState 表示替换路由状态的方法
      //   console.log('enter article component')
      //     // replaceState(null, `/brand/${nextState.params.id}`)
      // },
      // onLeave(prevState) {
      //   console.log('leave article component')
      // },
      // getComponent(nextState, cb) {
      //   require.ensure([], (require) => {
      //     cb(null, require('CONTAINERS/ArticleDemo/add').default)
      //   })
      // }
    },
    {
      // path: 'articles',
      // // component: require('CONTAINERS/Note').default,
      // onEnter(nextState, replaceState) { // nextState 表示要进入的下一个路径 replaceState 表示替换路由状态的方法
      //   console.log('enter articles component')
      //     // replaceState(null, `/brand/${nextState.params.id}`)
      // },
      // onLeave(prevState) {
      //   console.log('leave articles component')
      // },
      // getComponent(nextState, cb) {
      //   require.ensure([], (require) => {
      //     cb(null, require('CONTAINERS/ArticleDemo').default)
      //   })
      // }
    },
    {
      // path: 'add_comment',
      // // component: require('CONTAINERS/Note').default,
      // onEnter(nextState, replaceState) { // nextState 表示要进入的下一个路径 replaceState 表示替换路由状态的方法
      //   console.log('enter comment component')
      //     // replaceState(null, `/brand/${nextState.params.id}`)
      // },
      // onLeave(prevState) {
      //   console.log('leave comment component')
      // },
      // getComponent(nextState, cb) {
      //   require.ensure([], (require) => {
      //     cb(null, require('CONTAINERS/CommentDemo/add').default)
      //   })
      // }
    },
    {
      path: '*',
      // component: require('CONTAINERS/NotFound').default
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('CONTAINERS/NotFound').default)
        })
      }
    }]
}]
