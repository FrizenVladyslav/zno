import React, { Component } from 'react'
import { Form, Button, Icon, Message } from 'semantic-ui-react'

import * as userActions from 'actions/user'

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: false,
    errorMessage: '',
  }

  handleLogin = async () => {
    const { email, password } = this.state

    try {
      await userActions.login(email, password)
    } catch (e) {
      this.setState({ errorMessage: e.message || e })
    }
  }

  handleSetField = (field, { target: { value } }) => {
    this.setState({ [field]: value })
  }

  handleSubmit = () => {
    const { email, password } = this.state

    if (!email.trim() || !password.trim()) {
      this.setState({ error: true, errorMessage: '' })
    } else {
      this.handleLogin()
    }
  }

  render() {
    const { error, errorMessage } = this.state

    return (
      <Form>
        {errorMessage && (
          <Message negative>
            <Message.Header>Не вдалий вхід</Message.Header>
            <p>{errorMessage}</p>
          </Message>
        )}
        <Form.Input
          label="Email"
          icon="at"
          onChange={e => this.handleSetField('email', e)}
          error={error && !this.state.email.trim()}
        />
        <Form.Input
          type="password"
          label="Пароль"
          icon="key"
          onChange={e => this.handleSetField('password', e)}
          error={error && !this.state.password.trim()}
        />
        <Button animated="vertical" primary onClick={this.handleSubmit}>
          <Button.Content visible>Увійти</Button.Content>
          <Button.Content hidden>
            <Icon name="sign-in" />
          </Button.Content>
        </Button>
      </Form>
    )
  }
}

export default Login
