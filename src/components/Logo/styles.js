import { StyleSheet } from 'aphrodite/no-important'

const shadowStyle = {
  color: 'transparent',
  background: '#666666',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  backgroundClip: 'text',
  textShadow: '0px 3px 3px rgba(255,255,255,0.5)',
}

export default StyleSheet.create({
  logo: {
    width: 150,
    fontStyle: 'oblique',
    marginTop: -15,
    ':nth-child(1n) > h2': {
      fontSize: 14,
      marginTop: -10,
      marginLeft: 13,
      ...shadowStyle,
    },
    ':nth-child(1n) > i': {
      marginLeft: '20px',
      fontSize: 40,
      ...shadowStyle,
    },
  },
})
