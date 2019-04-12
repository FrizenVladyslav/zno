import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { toast } from 'react-toastify'

import * as userActions from 'actions/user'

class Users extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    this.onInit()
  }

  onInit = async () => {
    try {
      let users = await userActions.getAllUsers()
      this.setState({ users })
    } catch (e) {
      toast.error(e.message || e)
    }
  }

  render() {
    return (
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Пошта</Table.HeaderCell>
            <Table.HeaderCell>Ім'я</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.users.map(user => (
            <Table.Row key={user._id}>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.nick}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

export default Users
