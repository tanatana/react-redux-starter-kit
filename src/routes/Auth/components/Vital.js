import React from 'react'

export default class Vital extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor (props, context) {
    super(props, context)
    console.log('Vital#constructor')
  }

  componentWillMount () {
    console.log('componentWillMount')
    console.log(this.context)
    this.guestWillTransfer(this.props, this.context.router);
  }

  componentWillUpdate (nextProps) {
    console.log('componentWillUpdate')
    console.log(this.context)
    this.guestWillTransfer(nextProps, this.context.router);
  }

  guestWillTransfer (props, router) {
    const authorized = props.auth;
    console.log(authorized);
    if (authorized === undefined) {
      router.replace("/auth");
    }
    if (authorized === false) {
      router.replace("/");
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Vital.propTypes = {
  auth   : React.PropTypes.bool
}
