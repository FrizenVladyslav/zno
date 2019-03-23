import React from 'react'
import PropTypes from 'prop-types'
import { Loader as SemanticLoader } from 'semantic-ui-react'
import { css } from 'aphrodite/no-important'

import styles from './styles'

const Loader = props => {
  return (
    <div
      className={css(styles.loaderContainer)}
      style={{ minHeight: props.height }}
    >
      <SemanticLoader active inline="centered" />
    </div>
  )
}

Loader.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Loader
