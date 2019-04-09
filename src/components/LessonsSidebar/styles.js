import { StyleSheet } from 'aphrodite/no-important'
import { responsive } from 'assets/styles/mixins'

export default StyleSheet.create({
  sidebar: {
    padding: 10,
    minHeight: '50vh',
    maxHeight: '100vh',
    marginLeft: 10,
    ...responsive(768, {
      height: 200,
      maxHeight: 200,
      minHeight: 100,
      width: '100%',
      overflow: 'auto',
      ':nth-child(1n) > .item': {
        textAlign: 'center',
      },
    }),
  },
})
