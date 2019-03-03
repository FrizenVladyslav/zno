import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  sidebar: {
    height: '100vh',
    width: 'calc(15% - 20px)',
    padding: '10px',
    position: 'fixed',
    zIndex: 2,
  },

  logo: {
    marginBottom: 10,
    ':nth-child(1n) > a': {
      zoom: ' 120%',
    },
  },
})
