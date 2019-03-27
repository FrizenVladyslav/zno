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
  },

  linkPopup: {
    left: -228,
  },
})
