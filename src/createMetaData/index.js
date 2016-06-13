// export facebook from './facebook'
// export twitter from './twitter'

export default (sharePathPrefix, media) => {
    const { title, description } = media
    return _.flatten([
        buildTwitterMeta(sharePathPrefix, media, title, description),
        buildFacebookMeta(sharePathPrefix, media, title, description)
    ])
}
