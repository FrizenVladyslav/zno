import { StyleSheet } from 'aphrodite/no-important'

import { centerFlex } from 'assets/styles/mixins'

export default StyleSheet.create({
  // @ts-ignore
  loaderContainer: {
    ...centerFlex,
    minHeight: '80vh',
  },
})
