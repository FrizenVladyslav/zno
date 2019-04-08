import React, { Component } from 'react'
import { Form, Button, Icon, Message } from 'semantic-ui-react'

import * as userActions from 'actions/user'

const passwordReg = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
const emailReg = new RegExp(/^[0-9a-z-_\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i)

class Register extends Component {
  state = {
    email: '',
    password: '',
    nick: '',
    error: false,
    erromMessage: '',
  }

  handleRegister = async () => {
    const { email, password, nick } = this.state

    try {
      await userActions.register(email, password, nick)
    } catch (e) {
      this.setState({ erromMessage: e.message || e })
    }
  }

  handleSetField = (field, { target: { value } }) => {
    this.setState({ [field]: value })
  }

  handleSubmit = () => {
    const { email, password, nick } = this.state

    if (
      !email.match(emailReg) ||
      !password.match(passwordReg) ||
      !nick.trim()
    ) {
      this.setState({ error: true, errorMessage: '' })
    } else {
      this.handleRegister()
    }
  }

  render() {
    const { error, errorMessage } = this.state

    return (
      <Form>
        {errorMessage && (
          <Message negative>
            <Message.Header>Не вдала реэстрація</Message.Header>
            <p>{errorMessage}</p>
          </Message>
        )}
        <Form.Input
          autoComplete="new-password"
          label="Нік-нейм"
          icon="user circle outline"
          onChange={e => this.handleSetField('nick', e)}
          error={error && !this.state.nick.trim()}
          placeholder="Сашко"
        />
        <Form.Input
          autoComplete="new-password"
          label="Email"
          icon="at"
          onChange={e => this.handleSetField('email', e)}
          error={error && !this.state.email.match(emailReg)}
          placeholder="mail@mail.com"
        />
        <Form.Input
          autoComplete="new-password"
          type="password"
          label="Пароль"
          icon="key"
          onChange={e => this.handleSetField('password', e)}
          error={error && !this.state.password.match(passwordReg)}
          placeholder="Пароль"
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

export default Register
