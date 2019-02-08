export const bgImage = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}

export const resetList = {
  listStyleType: 'none',
  paddingLeft: 0,
}

export const centerAbsolute = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
}

export const centerFlex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const bounceAnim = duration => ({
  animationName: {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)',
    },
    '40%': {
      transform: 'translateY(-30px)',
    },
    '60%': {
      transform: 'translateY(-15px)',
    },
  },
  animationDuration: `${duration}s`,
  animationIterationCount: 'infinite',
})
