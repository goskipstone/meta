import { default as createQualifiedPath } from './createQualifiedPath'

export default function getPlayerUrl (playerUrl, { mediaId }) {
  return `${playerUrl}${createQualifiedPath({ uuid: mediaId })}`
}
