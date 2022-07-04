import Env from '@ioc:Adonis/Core/Env'
import { DriveConfig } from '@ioc:Adonis/Core/Drive'
import Application from '@ioc:Adonis/Core/Application'

const driveConfig: DriveConfig = {
  disk: Env.get('DRIVE_DISK'),

  disks: {
    local: {
      driver: 'local',
      visibility: 'public',
      root: Application.tmpPath('uploads'),
      serveFiles: true,
      basePath: '/uploads',
    },

    s3: {
      driver: 's3',
      visibility: 'private',
      key: Env.get('S3_KEY'),
      secret: Env.get('S3_SECRET'),
      region: Env.get('S3_REGION'),
      bucket: Env.get('S3_BUCKET'),
      endpoint: Env.get('S3_ENDPOINT'),
    },
  },
}

export default driveConfig
