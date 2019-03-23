import React from 'react'
import { Table, Button } from 'semantic-ui-react'

const ListItem = ({ item, onSelect, onEdit }) => {
  return (
    <>
      <Table.Row>
        <Table.Cell>{item.title}</Table.Cell>
        <Table.Cell textAlign="right">
          <Button.Group size="mini">
            <Button icon="arrow circle right" onClick={() => onSelect(item)} />
            <Button.Or text="або" />
            <Button icon="pencil" color="blue" onClick={() => onEdit(item)} />
          </Button.Group>
        </Table.Cell>
      </Table.Row>
    </>
  )
}

export default ListItem
