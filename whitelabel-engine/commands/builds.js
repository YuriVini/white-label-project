const copyDirectory = require('../tasks/copyDirectory')
const createModules = require('../tasks/createModules')
const createColors = require('../tasks/createColors')
const install = require('../tasks/install')
const setIcon = require('../tasks/setIcon')
const setId = require('../tasks/setId')
const setName = require('../tasks/setName')
const copyAssets = require('../tasks/copyAssets')

const build = (config, dirSrc, dirDst) => {
  copyDirectory(dirSrc, dirDst)
  createModules(dirDst, config.modules)
  createColors(dirDst, config.colors)
  copyAssets(config.iconsPath, dirDst)
  setId(dirDst, config.id)
  setName(dirDst, config.name)
  setIcon(dirDst, config.iconsPath)
  install(dirDst)
}

module.exports = build
