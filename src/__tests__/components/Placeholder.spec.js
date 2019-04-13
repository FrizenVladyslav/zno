// @ts-nocheck
import React from 'react'
import { shallow } from 'enzyme'
import Placeholder from 'components/Placeholder'

describe('placeholder ', () => {
  const placeholder = shallow(<Placeholder paragraphs={[3, 5]} />)

  it('render properly', () => {
    expect(placeholder).toMatchSnapshot()
  })

  it('render paragraphs', () => {
    expect(
      placeholder
        .find('PlaceholderParagraph')
        .first()
        .children()
    ).toHaveLength(3)
    expect(
      placeholder
        .find('PlaceholderParagraph')
        .last()
        .children()
    ).toHaveLength(5)
  })
})
