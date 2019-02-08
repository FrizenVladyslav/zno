import { StyleSheet } from 'aphrodite/no-important'
import { centerAbsolute, bounceAnim, centerFlex } from 'assets/styles/mixins'

export default StyleSheet.create({
  header: {
    ':nth-child(1n) .header-content': {
      height: '100vh',
      minHeight: 500,
      position: 'relative',
      ':nth-child(1n) h1': {
        width: '100%',
        position: 'absolute',
        top: '30%',
        marginLeft: '20%',
        textAlign: 'center',
        fontSize: '65px',
        fontStyle: 'italic',
        textShadow: '1px 3px 0 #000, 1px 13px 5px #333',
        color: '#969696',
      },
    },
    ':nth-child(1n) > .header-logo': {
      position: 'absolute',
      zIndex: 40,
    },
    ':nth-child(1n) .arrow-bottom': {
      ...centerAbsolute,
      ...bounceAnim(2),
      top: '90%',
      fontSize: 35,
      color: '#fff',
      cursor: 'pointer',
    },
  },

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
    },
  },

  main: {
    minHeight: 500,
    padding: '50px 0',
  },

  descRow: {
    ':nth-child(1n) .description': {
      ...centerFlex,
      flexDirection: 'column',
      ':nth-child(1n) h4': {
        textAlign: 'center',
        fontSize: 25,
      },
      ':nth-child(1n) button': {
        width: '50%',
      },
    },
  },
})
