const replaceStringInFile = require('../utils/replaceStringInFile')

const setName = (dirDst, nameNew) => {
  console.log('Setting new name\n')
  const nameOld = 'whitelabel'
  replaceStringInFile(
    `${dirDst}/android/app/src/main/res/values/strings.xml`,
    nameOld,
    nameNew
  )
  replaceStringInFile(`${dirDst}/ios/${nameOld}/Info.plist`, nameOld, nameNew)

  console.log('New name 🪪\n')
}

module.exports = setName
