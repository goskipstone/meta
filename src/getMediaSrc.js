import { AWS_STORAGE_TYPES } from './constants'
import { default as constructPath } from './constructPath'

export default function getMediaSrc(media, organizationId) {
  return constructPath(media, AWS_STORAGE_TYPES.Media, organizationId)
}
