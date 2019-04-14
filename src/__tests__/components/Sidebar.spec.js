// @ts-nocheck
import React from 'react'
import { shallow } from 'enzyme'
import { Sidebar } from 'components/LessonsSidebar'
import { StyleSheetTestUtils } from 'aphrodite'

describe('sidebar', () => {
  afterEach(() => {
    return new Promise(resolve => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
      return process.nextTick(resolve)
    })
  })

  const lessons = [
    {
      _id: '1',
      title: 'title1',
    },
    {
      _id: '2',
      title: 'title2',
    },
  ]
  const sidebar = shallow(<Sidebar activeLesson={'2'} lessons={lessons} />)

  describe('without lessons', () => {
    const sidebar = shallow(<Sidebar activeLesson={null} lessons={[]} />)

    it('render properly', () => {
      expect(sidebar).toMatchSnapshot()
    })

    it('not have excess items', () => {
      expect(sidebar.find('MenuItem')).toHaveLength(1)
    })
  })

  describe('with lessons', () => {
    it('render properly', () => {
      expect(sidebar).toMatchSnapshot()
    })

    it('renders all items', () => {
      expect(sidebar.find('MenuItem')).toHaveLength(3)
    })

    describe('item render correctly', () => {
      const propsItem = sidebar
        .find('MenuItem')
        .last()
        .props()

      it('name', () => {
        expect(propsItem.name).toBe(lessons[1].title)
      })

      it('link path', () => {
        expect(propsItem.to).toBe(`/lessons/${lessons[1]._id}`)
      })

      it('item active', () => {
        expect(propsItem.active).toBeTruthy()
      })
    })
  })
})
