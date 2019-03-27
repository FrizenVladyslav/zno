import { convertToRaw, EditorState, ContentState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'

export function getEditorLength(editorState) {
  let editorLength = 0
  let blocks = convertToRaw(editorState.getCurrentContent()).blocks

  blocks.forEach(({ text }) => {
    if (text.length) {
      editorLength += text.length
    }
  })

  editorLength += blocks.length - 1
  return editorLength
}

export function convertDraftToHtml(editorState) {
  const rawContentState = convertToRaw(editorState.getCurrentContent())

  return draftToHtml(rawContentState)
}

export function convertHtmlToDraft(markup) {
  const blocksFromHtml = htmlToDraft(markup)
  const { contentBlocks, entityMap } = blocksFromHtml
  const contentState = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap
  )

  return EditorState.createWithContent(contentState)
}

export function getLengthOfSelectedText(editorState) {
  const currentSelection = editorState.getSelection()
  const isCollapsed = currentSelection.isCollapsed()

  let length = 0

  if (!isCollapsed) {
    const currentContent = editorState.getCurrentContent()
    const startKey = currentSelection.getStartKey()
    const endKey = currentSelection.getEndKey()
    const startBlock = currentContent.getBlockForKey(startKey)
    const isStartAndEndBlockAreTheSame = startKey === endKey
    const startBlockTextLength = startBlock.getLength()
    const startSelectedTextLength =
      startBlockTextLength - currentSelection.getStartOffset()
    const endSelectedTextLength = currentSelection.getEndOffset()
    const keyAfterEnd = currentContent.getKeyAfter(endKey)

    if (isStartAndEndBlockAreTheSame) {
      length +=
        currentSelection.getEndOffset() - currentSelection.getStartOffset()
    } else {
      let currentKey = startKey

      while (currentKey && currentKey !== keyAfterEnd) {
        if (currentKey === startKey) {
          length += startSelectedTextLength + 1
        } else if (currentKey === endKey) {
          length += endSelectedTextLength
        } else {
          length += currentContent.getBlockForKey(currentKey).getLength() + 1
        }

        currentKey = currentContent.getKeyAfter(currentKey)
      }
    }
  }

  return length
}

export function replaceWithoutTags(html) {
  return html
    .replace(/<\/?[^>]+>/g, '')
    .replace(/&nbsp;/g, '')
    .replace(/\u21b5/g, '')
}
