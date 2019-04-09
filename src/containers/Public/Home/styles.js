import { StyleSheet } from 'aphrodite/no-important'
import {
  centerAbsolute,
  bounceAnim,
  centerFlex,
  responsive,
} from 'assets/styles/mixins'

export default StyleSheet.create({
  header: {
    ':nth-child(1n) .header-content': {
      height: '100vh',
      // minHeight: 500,
      position: 'relative',
      overflow: 'hidden',
      ':nth-child(1n) h1': {
        width: '100%',
        position: 'absolute',
        top: '30%',
        marginLeft: '20%',
        textAlign: 'center',
        fontSize: 65,
        fontStyle: 'italic',
        textShadow: '1px 3px 0 #000, 1px 13px 5px #333',
        color: '#969696',
        ...responsive(1200, {
          fontSize: 40,
        }),
        ...responsive(768, {
          position: 'static',
          marginTop: '40vh',
          marginLeft: 0,
        }),
        ...responsive(576, {
          fontSize: 25,
        }),
      },
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

  main: {
    minHeight: 500,
    padding: '50px 0',
  },

  descRow: {
    ':nth-child(1n) .description': {
      ...centerFlex,
      flexDirection: 'column',
      paddingBottom: '10%',
      ':nth-child(1n) h4': {
        textAlign: 'center',
        fontSize: 25,
      },
      ':nth-child(1n) button': {
        width: '50%',
      },
    },
    ...responsive(992, {
      ':nth-child(1n) .description': {
        order: 3,
        ':nth-child(1n) > h4': {
          margin: '40px 0',
          fontSize: 20,
        },
      },
    }),
  },
})
