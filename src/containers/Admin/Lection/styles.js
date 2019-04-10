import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  buttonGroup: {
    marginTop: 17,
  },

  editor: {
    padding: 30,

    ':nth-child(1n) .public-DraftStyleDefault-ltr': {
      textAlign: 'inherit',
    },

    ':nth-child(1n) .public-DraftStyleDefault-block': {
      margin: 0,
      marginBottom: 10,
    },

    ':nth-child(1n) img': {
      maxWidth: '100%',
    },
  },

  linkPopup: {
    left: -228,
  },

  toolbarFixed: {
    position: 'fixed',
    maxWidth: 1140,
    zIndex: 999,
    opacity: 1,
    top: 0,
    backgroundColor: '#fff',
  },
})
