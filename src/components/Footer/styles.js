import { StyleSheet } from 'aphrodite/no-important'
import { responsive } from 'assets/styles/mixins'

export default StyleSheet.create({
  // @ts-ignore
  footer: {
    borderLeft: 'none',
    borderRight: 'none',
    marginTop: '100px !important',
    overflow: 'hidden !important',
    ':nth-child(1n) > .container': {
      display: 'flex',
      alignItems: 'flex-start',
      ':nth-child(1n) > div': {
        alignSelf: 'flex-end',
        ':nth-child(1n) > p': {
          whiteSpace: 'nowrap',
        },
      },
    },

    ':nth-child(1n) ul': {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      minWidth: 200,
      maxHeight: 150,
      marginLeft: 200,
      paddingTop: 19,
      listStyleType: 'none',
      ':nth-child(1n) > li': {
        marginRight: 20,
        ':first-child': {
          fontWeight: 700,
          marginTop: -19,
        },
        ':nth-child(1n) > a': {
          color: '#333',
          ':hover': {
            color: '#333',
            textDecoration: 'underline',
          },
        },
      },
    },
    ...responsive(992, {
      ':nth-child(1n) ul': {
        marginLeft: 100,
      },
    }),
    ...responsive(768, {
      ':nth-child(1n) ul': {
        marginLeft: 50,
      },
    }),
    ...responsive(600, {
      ':nth-child(1n) > .container': {
        ':nth-child(1n) > div': {
          display: 'none',
        },

        ':nth-child(1n) > ul': {
          margin: 0,
          marginTop: -50,
          paddingLeft: 30,
          minWidth: 100,
          height: 'auto',
          flexWrap: 'nowrap',
        },
      },
    }),
  },
})
