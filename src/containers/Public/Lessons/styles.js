import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  item: {
    ':nth-child(1n) > a.header': {
      color: '#000',
      fontWeight: 700,
      fontSize: 17,
    },
  },
})
