const childProcess = require('child_process')

const install = (dirDst) => {
  console.log(`Installing dependencies in ${dirDst}\n`)
  childProcess.execSync('npm install', { cwd: dirDst })
  console.log(`Installed dependencies in ${dirDst} 📦\n`)
}

module.exports = install
