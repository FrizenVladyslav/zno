import { StyleSheet } from 'aphrodite/no-important'

const shadowStyle = {
  color: '#333',
  background: '#333',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  backgroundClip: 'text',
  textShadow: '0px 3px 3px rgba(255,255,255,0.5)',
}

export default StyleSheet.create({
  logo: {
    width: 150,
    ':nth-child(1n) > h2': {
      fontStyle: 'oblique',
      marginTop: 0,
      ...shadowStyle,
    },
    ':nth-child(1n) > i': {
      marginLeft: '20px',
      ...shadowStyle,
    },
  },
})
