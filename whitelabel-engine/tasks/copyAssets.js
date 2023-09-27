const fs = require('fs-extra')
const glob = require('globby')

const copyAssets = (assetsPath, dirDst) => {
  console.log(`Copy ${assetsPath} to ${dirDst}\n`)

  // const files = glob.sync(`${assetsPath}/**/*`, {
  //   gitignore: true,
  //   dot: true,
  //   deep: true,
  // })
  // files.forEach((file) =>
  //   fs.copySync(file, file.replace(assetsPath, `${dirDst}/assets`))
  // )
  fs.copySync(`${assetsPath}/images`, `${dirDst}/assets/images/`, {
    overwrite: true,
  })
  console.log('New images created 🌄\n')
}

module.exports = copyAssets
