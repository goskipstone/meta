import { AWS_STORAGE_TYPES } from './constants'

export default function constructPath(media = {}, recordType = '', organizationId = '') {
    if (!media || !media.Storage || !recordType) {
        return null
    }

    const orgId = media.organizationId || organizationId
    if (!orgId) {
        return null
    }

    const storageRecord = media.Storage[recordType]
    if (!storageRecord) {
        return null
    }

    const {
        awsCloudFrontHostname,
        awsTranscoderFormat,
        mediaFilePath,
        mediaFileTypeId
      } = storageRecord

    if (!awsCloudFrontHostname || !mediaFilePath) {
        return null
    }

    if (mediaFileTypeId === AWS_STORAGE_TYPES.Media
        && !awsTranscoderFormat) {
        return null
    }

    const param = mediaFileTypeId === AWS_STORAGE_TYPES.Media
        ? `/transcoded/${awsTranscoderFormat}/`
        : `/images/${orgId}/`

    return `https://${awsCloudFrontHostname}${param}${mediaFilePath}`
}
