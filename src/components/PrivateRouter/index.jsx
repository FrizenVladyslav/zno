import React from 'react'
import { Route, Redirect } from 'react-router'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const PrivateRoute = props => {
  let allow = false

  // here private logic ...
  allow = props.roles.includes(props.role)

  // show a notification
  if (!allow) toast.info(props.message || `You have not access to this page`)

  return allow ? (
    <Route {...props} />
  ) : (
    <Redirect to={props.redirectTo ? props.redirectTo : '/'} />
  )
}

PrivateRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  message: PropTypes.string,
  redirectTo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

// @ts-ignore
export default connect(({ user }) => ({ role: user.role }))(PrivateRoute)
