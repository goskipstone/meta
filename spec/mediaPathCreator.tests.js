import { default as expect } from 'expect'
import constructPath from '../src/constructPath'
import { AWS_STORAGE_TYPES } from '../src/constants'

const media = {
    Storage: {
        1: {
            HLSFile: 'bztmjc5mowa2x1or.m3u8',
            HLSPath: 'bztmjc5mowa2x1or',
            HLSVersions: [3, 4],
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: '720p',
            mediaFilePath: 'bztmjc5mowa2x1or.mp4',
            mediaFileTypeId: '1',
            storageTypeId: '2',
        },
        2: {
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: 'm21bb2ip86h41jor.png',
            mediaFileTypeId: '2',
            storageTypeId: '2'
        },
        3: {
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: 'ildzas5m2ts7zaor.png',
            mediaFileTypeId: '3',
            storageTypeId: '2'
        },
        4: {
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: 'bztmjc5mowa2x1or.vtt',
            mediaFileTypeId: '4',
            storageTypeId: '2'
        }
    },
    description: 'Company Demo Version',
    duration: '204',
    languageId: '1',
    mediaId: 'd37776c75fe8971103bfca44ce63a7ab',
    mediaTypeId: '1',
    organizationId: '1',
    shareURL: null,
    statusCode: '1',
    title: 'A Day in The Life With Skipstone'
}

const mediaWithoutHostName = {
    Storage: {
        1: {
            HLSFile: 'bztmjc5mowa2x1or.m3u8',
            HLSPath: 'bztmjc5mowa2x1or',
            HLSVersions: [3, 4],
            awsCloudFrontHostname: null,
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: '720p',
            mediaFilePath: 'bztmjc5mowa2x1or.mp4',
            mediaFileTypeId: '1',
            storageTypeId: '2',
        },
        2: {
            awsCloudFrontHostname: '',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: 'm21bb2ip86h41jor.png',
            mediaFileTypeId: '2',
            storageTypeId: '2'
        },
        3: {
            awsCloudFrontHostname: null,
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: 'ildzas5m2ts7zaor.png',
            mediaFileTypeId: '3',
            storageTypeId: '2'
        },
        4: {
            awsCloudFrontHostname: '',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: 'bztmjc5mowa2x1or.vtt',
            mediaFileTypeId: '4',
            storageTypeId: '2'
        }
    },
    description: 'Company Demo Version',
    duration: '204',
    languageId: '1',
    mediaId: 'd37776c75fe8971103bfca44ce63a7ab',
    mediaTypeId: '1',
    organizationId: '1',
    shareURL: null,
    statusCode: '1',
    title: 'A Day in The Life With Skipstone'
}

const mediaWithoutFilePath = {
    ...media,
    Storage: {
        1: {
            HLSFile: 'bztmjc5mowa2x1or.m3u8',
            HLSPath: 'bztmjc5mowa2x1or',
            HLSVersions: [3, 4],
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: '720p',
            mediaFilePath: null,
            mediaFileTypeId: '1',
            storageTypeId: '2',
        },
        2: {
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: '',
            mediaFileTypeId: '2',
            storageTypeId: '2'
        },
        3: {
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: null,
            mediaFileTypeId: '3',
            storageTypeId: '2'
        },
        4: {
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: '',
            mediaFileTypeId: '4',
            storageTypeId: '2'
        }
    }
}

const mediaWithoutTranscoderFormat = {
    ...media,
    Storage: {
        1: {
            HLSFile: 'bztmjc5mowa2x1or.m3u8',
            HLSPath: 'bztmjc5mowa2x1or',
            HLSVersions: [3, 4],
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: 'bztmjc5mowa2x1or.mp4',
            mediaFileTypeId: '1',
            storageTypeId: '2',
        },
        2: {
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: 'm21bb2ip86h41jor.png',
            mediaFileTypeId: '2',
            storageTypeId: '2'
        },
        3: {
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: 'ildzas5m2ts7zaor.png',
            mediaFileTypeId: '3',
            storageTypeId: '2'
        },
        4: {
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: 'bztmjc5mowa2x1or.vtt',
            mediaFileTypeId: '4',
            storageTypeId: '2'
        }
    }
}

const mediaWithoutOrgId = {
    Storage: {
        2: {
            awsCloudFrontHostname: 'dyni7ict46y3r.cloudfront.net',
            awsTranscoderBucket: 'demo-1-test-video-uploads',
            awsTranscoderFormat: null,
            mediaFilePath: 'skipstone talent 2-thumbnail.png',
            mediaFileTypeId: '2',
            storageTypeId: '2'
        }
    },
    description: 'Company Demo Version Question 2',
    duration: '21',
    languageId: '1',
    mediaId: 'c1b505d003be64fed29735d94b9cbc7c',
    shareURL: null,
    title: 'Can I upload this to Youtube?'
}

describe('constructPath', () => {
    it('returns null when arguments are invalid', () => {
        expect(constructPath(null, null)).toEqual(null)
        expect(constructPath({}, null)).toEqual(null)
        expect(constructPath(media, null)).toEqual(null)
        expect(constructPath(media, AWS_STORAGE_TYPES.Poster)).toNotEqual(null)
    })

    it('returns null when media object is malformed or missing key data', () => {
        expect(constructPath(mediaWithoutHostName, AWS_STORAGE_TYPES.Poster)).toEqual(null)
        expect(constructPath(mediaWithoutHostName, AWS_STORAGE_TYPES.Media)).toEqual(null)
        expect(constructPath(mediaWithoutHostName, AWS_STORAGE_TYPES.Thumbnail)).toEqual(null)
        expect(constructPath(mediaWithoutHostName, AWS_STORAGE_TYPES.Subtitle)).toEqual(null)

        expect(constructPath(mediaWithoutFilePath, AWS_STORAGE_TYPES.Poster)).toEqual(null)
        expect(constructPath(mediaWithoutFilePath, AWS_STORAGE_TYPES.Media)).toEqual(null)
        expect(constructPath(mediaWithoutFilePath, AWS_STORAGE_TYPES.Thumbnail)).toEqual(null)
        expect(constructPath(mediaWithoutFilePath, AWS_STORAGE_TYPES.Subtitle)).toEqual(null)

        expect(constructPath(mediaWithoutTranscoderFormat, AWS_STORAGE_TYPES.Media)).toEqual(null)
    })

    it('returns path based on storage type', () => {
        expect(constructPath(media, AWS_STORAGE_TYPES.Poster)).toInclude('/images/')
        expect(constructPath(media, AWS_STORAGE_TYPES.Media)).toInclude('/transcoded/')
        expect(constructPath(media, AWS_STORAGE_TYPES.Thumbnail)).toInclude('/images/')
        expect(constructPath(media, AWS_STORAGE_TYPES.Subtitle)).toInclude('/images/')
    })

    it('accepts organizationId as a third argument to handle in a case where a media does not have org id', () => { // eslint-disable-line max-len
        expect(constructPath(mediaWithoutOrgId, AWS_STORAGE_TYPES.Thumbnail)).toEqual(null) // eslint-disable-line max-len
        expect(constructPath(mediaWithoutOrgId, AWS_STORAGE_TYPES.Thumbnail, '1')).toInclude('/images/') // eslint-disable-line max-len
    })
})
