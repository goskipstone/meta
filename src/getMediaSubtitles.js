import { default as constructPath } from './constructPath'
import { AWS_STORAGE_TYPES } from './constants'

export function getMediaSubtitles(media, organizationId) {
  return constructPath(media, AWS_STORAGE_TYPES.Subtitle, organizationId)
}
