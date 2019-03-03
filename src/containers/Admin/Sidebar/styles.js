import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  sidebar: {
    padding: '20px',
    width: '100%',
  },

  logo: {
    marginBottom: 10,
    ':nth-child(1n) > a': {
      zoom: ' 120%',
    },
  },
})
