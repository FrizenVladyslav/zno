import { StyleSheet } from 'aphrodite/no-important'
import { responsive } from 'assets/styles/mixins'

const shadowStyle = {
  color: '#333',
  background: '#333',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  backgroundClip: 'text',
  textShadow: '0px 3px 3px rgba(255,255,255,0.5)',
}

export default StyleSheet.create({
  navMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
    position: 'absolute',
    zIndex: 40,
    width: '100%',
    ':nth-child(1n) > ul': {
      display: 'flex',
      listStyleType: 'none',
      paddingLeft: 0,
      ':nth-child(1n) > li': {
        margin: '0 20px',
        fontSize: 25,
        ':nth-child(1n) a': {
          color: '#333',
          fontWeight: 700,
          transition: 0.4,
          ':hover': {
            textDecoration: 'underline',
          },
        },
      },
      ...responsive(576, {
        ':nth-child(1n) > li': {
          fontSize: 15,
        },
      }),
    },
    ':nth-child(1n) > .header-logo': {
      ':nth-child(1n) a': {
        ':nth-child(1n) > h2': {
          marginTop: 0,
          fontSize: '1.71428571rem',
          ...shadowStyle,
        },
        ':nth-child(1n) > i': {
          marginLeft: '20px',
          fontSize: '4em',
          ...shadowStyle,
        },
      },
      ...responsive(576, {
        ':nth-child(1n) > a': {
          width: 100,
          ':nth-child(1n) > h2': {
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
            marginLeft: 5,
          },
          ':nth-child(1n) > i': {
            marginLeft: '10px',
            fontSize: '2.5em',
          },
        },
      }),
    },
  },
})
