import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'auth',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Auth = require('./containers/AuthContainer').default
      const reducer = require('./modules/auth').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'auth', reducer })

      /*  Return getComponent   */
      cb(null, Auth)

    /* Webpack named bundle   */
    }, 'auth')
  }
})
