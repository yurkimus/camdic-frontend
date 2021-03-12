import { createWriteStream } from 'fs'
import { resolve } from 'path'
import archiver from 'archiver'

function archive(dist, filename) {
  if (!dist || !filename) throw Error('arguments required')

  const archive = archiver('zip')

  archive.pipe(createWriteStream(`${resolve(filename)}`))

  archive.directory(dist, false)

  archive.finalize()
}

archive('build', 'build.zip')
