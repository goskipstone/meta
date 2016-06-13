import { AWS_STORAGE_TYPES } from './constants'
import { default as constructPath } from './constructPath'

export default function getMediaImg(media, organizationId) {
  return (
    constructPath(media, AWS_STORAGE_TYPES.Poster, organizationId)
    || constructPath(media, AWS_STORAGE_TYPES.Thumbnail, organizationId)
  )
}
