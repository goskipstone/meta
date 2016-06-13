import { getMediaImg, getMediaSrc, getQualifiedUrl, createQualifiedPath } from '.'
import { flatten } from 'lodash'

export function buildTwitterMeta(sharePathPrefix, media, title, description) {
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

export function buildFacebookMeta(sharePathPrefix, media, title, description) {
    return [
        { name: 'og:title', content: title },
        { name: 'og:site_name', content: 'Skipstone!' },
        { name: 'og:url', content: getQualifiedUrl(sharePathPrefix, media) },
        { name: 'og:image', content: getMediaImg(media) },
        { name: 'og:type', content: 'video.other' },
        {
            name: 'og:description',
            content: `️To watch this skipstone, click here!↗️ Description: ${description}`
        }
    ]
}

export default (sharePathPrefix, media) => {
    const { title, description } = media
    return flatten([
        buildTwitterMeta(sharePathPrefix, media, title, description),
        buildFacebookMeta(sharePathPrefix, media, title, description)
    ])
}
