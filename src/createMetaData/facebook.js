import { getMediaImg, getMediaSrc, getQualifiedUrl, createQualifiedPath } from '..'

export default (sharePathPrefix, media, title, description) => {
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
