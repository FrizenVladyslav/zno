import React from 'react'
import PropTypes from 'prop-types'
import { Placeholder } from 'semantic-ui-react'

const PlaceholderGenerator = ({ paragraphs }) => {
  return (
    <Placeholder>
      {paragraphs.map((line, index) => (
        <Placeholder.Paragraph key={index}>
          {[...Array(line)].map((l, index) => (
            <Placeholder.Line key={index} />
          ))}
        </Placeholder.Paragraph>
      ))}
    </Placeholder>
  )
}

PlaceholderGenerator.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.number),
}

export default PlaceholderGenerator
