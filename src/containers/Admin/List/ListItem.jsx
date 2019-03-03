import React from 'react'
import { Table, Button } from 'semantic-ui-react'

const ListItem = ({ item, onSelect, onEdit }) => {
  return (
    <>
      <Table.Cell>{item.title}</Table.Cell>
      <Table.Cell textAlign="right">
        <Button.Group size="mini">
          <Button icon="arrow circle right" onClick={onSelect} />
          <Button.Or text="або" />
          <Button icon="pencil" color="blue" onClick={onEdit} />
        </Button.Group>
      </Table.Cell>
    </>
  )
}

export default ListItem
