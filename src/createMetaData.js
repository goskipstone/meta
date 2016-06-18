import { getMediaImg, getMediaSrc, getPlayerUrl, getQualifiedUrl, createQualifiedPath } from '.'
import { flatten } from 'lodash'

export function buildTwitterMeta(sharePathPrefix, media, title, description, playerPath) {
    return [
        { name: 'twitter:card', content: 'player' },
        { name: 'twitter:site', content: 'skipstone' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: getMediaImg(media) },
        { name: 'twitter:url', content: getQualifiedUrl(sharePathPrefix, media) },
        { name: 'twitter:image:src', content: getMediaImg(media) },
        { name: 'twitter:player', content: getPlayerUrl(playerPath, media) },
        { name: 'twitter:player:height', content: 320 },
        { name: 'twitter:player:width', content: 480 },
        { name: 'twitter:player:stream', content: getMediaSrc(media) },
        { name: 'twitter:player:stream:content_type', content: 'video/mp4' }
    ]
}

export function buildGooglePlus(sharePathPrefix, media, title, description) {
    return [
        { itemprop: 'name', content: title },
        { itemprop: 'description', content: description },
        { itemprop: 'image', content: getMediaImg(media) }
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
            content: `Click To Watch ↗️: ${description}`
        }
    ]
}

export default (playerPath, sharePathPrefix, media) => {
    const { title, description } = media
    return flatten([
        buildGooglePlus(sharePathPrefix, media, title, description),
        buildTwitterMeta(sharePathPrefix, media, title, description, playerPath),
        buildFacebookMeta(sharePathPrefix, media, title, description)
    ])
}
