import Api from './api'

const endpoint = 'upload'

export async function uploadImage(file) {
  const body = new FormData()
  body.append('file', file)

  let res = await Api.uploadFile(`${endpoint}/image`, body)
  if (res.status !== 200) throw new Error('Error image upload')

  return res.data
}

export function getPhoto(path) {
  return `${Api.host}${encodeURI(path)}`
}
