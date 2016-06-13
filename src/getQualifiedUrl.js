import { default as createQualifiedPath } from './createQualifiedPath'

export default function getQualifiedUrl (sharePathPrefix, { mediaId }) {
  return `${sharePathPrefix}${createQualifiedPath({ uuid: mediaId })}`
}
