import React from 'react'
import { Grid, Segment, Menu, Table, Button } from 'semantic-ui-react'

import ListItem from './ListItem'

const List = props => {
  return (
    <Grid.Column>
      <Menu attached="top">
        <Menu.Menu position="left">
          <Segment basic>
            <Button
              icon="plus"
              size="mini"
              color="green"
              onClick={props.onAdd}
            />
            {props.title}
          </Segment>
        </Menu.Menu>
        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input className="prompt" type="text" placeholder="Search..." />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
        </Menu.Menu>
      </Menu>
      <Segment attached="bottom">
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">Назва</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.list &&
              props.list.map(item => (
                <ListItem
                  key={item.id}
                  item={item}
                  onSelect={props.onSelect}
                  onEdit={props.onEdit}
                />
              ))}
          </Table.Body>
        </Table>
      </Segment>
    </Grid.Column>
  )
}

export default List
