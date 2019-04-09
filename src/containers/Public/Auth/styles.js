import { StyleSheet } from 'aphrodite/no-important'
import { responsive } from 'assets/styles/mixins'

export default StyleSheet.create({
  divider: {
    ...responsive(992, {
      display: 'none',
    }),
  },
})
