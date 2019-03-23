import React, { useState } from 'react'
import { Grid, Segment, Menu, Table, Button } from 'semantic-ui-react'
import { css } from 'aphrodite/no-important'

import styles from './styles'
import Placeholder from 'components/Placeholder'
import ListItem from './ListItem'

const List = props => {
  const [search, setSearch] = useState('')
  const list = props.list
    ? props.list.filter(({ title }) => title.indexOf(search) !== -1)
    : props.list

  return (
    <Grid.Column>
      <Menu attached="top">
        <Menu.Menu position="left">
          <Segment basic>
            <Button
              icon="plus"
              size="mini"
              color="green"
              disabled={props.disabledAddButton}
              onClick={props.onAdd}
            />
            {props.title}
          </Segment>
        </Menu.Menu>
        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search..."
                onChange={({ target: { value } }) => setSearch(value)}
              />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
        </Menu.Menu>
      </Menu>
      <Segment attached="bottom" className={css(styles.list)}>
        {!list ? (
          <Placeholder paragraphs={[5, 4]} />
        ) : (
          <Table striped>
            <Table.Body>
              {!!list.length &&
                list.map(item => (
                  <ListItem
                    key={item._id}
                    item={item}
                    onSelect={props.onSelect}
                    onEdit={props.onEdit}
                  />
                ))}
            </Table.Body>
          </Table>
        )}
      </Segment>
    </Grid.Column>
  )
}

export default List
