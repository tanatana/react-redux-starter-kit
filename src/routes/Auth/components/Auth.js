import React from 'react'

export const Auth = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Auth: {props.auth.toString()}</h2>
    <button className='btn btn-default' onClick={props.login}>
      login
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.logout}>
      logout
    </button>
  </div>
)

Auth.propTypes = {
  auth   : React.PropTypes.bool.isRequired,
  login  : React.PropTypes.func.isRequired,
  logout : React.PropTypes.func.isRequired
}

export default Auth
