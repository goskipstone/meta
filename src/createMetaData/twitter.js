import { getMediaImg, getMediaSrc } from 'utils/mediaPathCreator'
import { getQualifiedUrl, createQualifiedPath } from 'utils/routeHelpers'

export default (sharePathPrefix, media, title, description) => {
    return [
        { name: 'twitter:card', content: 'player' },
        { name: 'twitter:site', content: 'skipstone' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: getMediaImg(media) },
        { name: 'twitter:url', content: getQualifiedUrl(sharePathPrefix, media) },
        { name: 'twitter:image:src', content: getMediaImg(media) },
        { name: 'twitter:player', content: getQualifiedUrl(sharePathPrefix, media) },
        { name: 'twitter:player:height', content: 320 },
        { name: 'twitter:player:width', content: 480 },
        { name: 'twitter:player:stream', content: getMediaSrc(media) },
        { name: 'twitter:player:stream:content_type', content: 'video/mp4' }
    ]
}
