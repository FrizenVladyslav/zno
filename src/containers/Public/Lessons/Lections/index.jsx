import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Label } from 'semantic-ui-react'
import Loader from 'components/Loader'
import LectionItem from './LectionItem'

import * as lectionActions from 'actions/lection'

const Lections = props => {
  useLayoutEffect(
    () => {
      getLections()
      return () => {
        lectionActions.unset()
      }
    },
    [props.match.params]
  )

  async function getLections() {
    try {
      await lectionActions.get({
        section: props.match.params.sectionId,
        draft: false,
      })
    } catch (e) {
      toast.error(e.message || e)
    }
  }

  function getLectionInfo() {
    const { lessons, sections, match } = props
    const lesson = lessons.find(({ _id }) => _id === match.params.lessonId)
    const section = sections.find(({ _id }) => _id === match.params.sectionId)

    return { lesson, section }
  }

  return !props.lections || !props.sections || !props.lessons ? (
    <Loader height={200} />
  ) : (
    <>
      <div>
        <Label as={Link} tag to={`/lessons/${getLectionInfo().lesson._id}`}>
          {getLectionInfo().lesson.title}
        </Label>
        <Label color="red" tag>
          {getLectionInfo().section.title}
        </Label>
      </div>
      {props.lections.map(lection => (
        <LectionItem
          key={lection._id}
          lection={lection}
          lectionInfo={getLectionInfo()}
        />
      ))}
    </>
  )
}

export default withRouter(
  // @ts-ignore
  connect(({ lection, lesson, section }) => ({
    lections: lection.lections,
    lessons: lesson.lessons,
    sections: section.sections,
  }))(Lections)
)
