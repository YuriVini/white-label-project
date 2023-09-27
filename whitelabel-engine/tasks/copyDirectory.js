const fs = require('fs-extra')
const glob = require('globby')

const copyDirectory = (dirSrc, dirDst) => {
  console.log(`Copy ${dirSrc} to ${dirDst}\n`)
  fs.removeSync(dirDst)
  const files = glob.sync(`${dirSrc}/**/*`, {
    gitignore: true,
    dot: true,
    deep: true,
  })
  files.forEach((file) => fs.copySync(file, file.replace(dirSrc, dirDst)))
  console.log('Project created 📲\n')
}

module.exports = copyDirectory
