// @ts-nocheck
import React from 'react'
import { shallow } from 'enzyme'
import { StyleSheetTestUtils } from 'aphrodite'
import { Footer } from 'components/Footer'

describe('footer', () => {
  afterEach(() => {
    return new Promise(resolve => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
      return process.nextTick(resolve)
    })
  })

  let lessons = [
    {
      _id: '1',
      title: 'title1',
    },
    {
      _id: '2',
      title: 'title2',
    },
  ]
  const footer = shallow(<Footer lessons={lessons} />)

  it('renders properly', () => {
    expect(footer).toMatchSnapshot()
  })

  it('renders 2 lessons', () => {
    expect(
      footer
        .find('ul')
        .first()
        .children()
    ).toHaveLength(3)
  })

  describe('correct render first lesson link', () => {
    const link = footer
      .find('ul')
      .first()
      .find('Link')
      .at(0)

    it('title', () => {
      expect(link.props().children).toBe(lessons[0].title)
    })

    it('path', () => {
      expect(link.props().to).toBe(`/lessons/${lessons[0]._id}`)
    })
  })
})
