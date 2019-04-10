import * as React from 'react'
import embed from 'embed-video'
import { css } from 'aphrodite'
import WysiwygEditor from 'components/WysiwygEditor'

import * as fileActions from 'actions/file'

import styles from './styles'

const Editor = props => {
  const [fixed, toggleFixed] = React.useState(false)
  const toolbarOptions = {
    link: {
      popupClassName: css(styles.linkPopup),
      trailingWhitespace: false,
    },
    image: {
      uploadCallback,
      previewImage: true,
    },
    embedded: {
      embedCallback: link => {
        if (
          link.indexOf('www.youtube.com') !== -1 ||
          link.indexOf('vimeo.com') !== -1
        ) {
          const detectedSrc = /<iframe.*? src="(.*?)"/.exec(embed(link))
          return (detectedSrc && detectedSrc[1]) || link
        }
      },
    },
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onWindowScroll)
    return () => {
      window.removeEventListener('scroll', onWindowScroll)
    }
  })

  async function uploadCallback(file) {
    let image = await fileActions.uploadImage(file)
    let urlImage = await fileActions.getPhoto(image.filePath)

    return await new Promise(async (resolve, reject) => {
      await resolve({ data: { link: urlImage } })
    })
  }

  function onWindowScroll() {
    console.log('window', window.scrollY, window.innerHeight, fixed)
    if (window.scrollY >= 200 && !fixed) {
      toggleFixed(true)
    } else if (window.scrollY < 200 && fixed) {
      toggleFixed(false)
    }
  }

  return (
    <WysiwygEditor
      editorState={props.content}
      editorClassName={css(styles.editor)}
      onEditorStateChange={props.onChange}
      placeholder="Вміст..."
      toolbar={toolbarOptions}
      toolbarClassName={css(fixed && styles.toolbarFixed)}
    />
  )
}

export default Editor
