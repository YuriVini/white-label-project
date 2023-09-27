const fs = require('fs-extra')
const replaceStringInFile = require('../utils/replaceStringInFile')

const setId = (dirDst, idNew) => {
  console.log('Setting new Id')
  const idOld = 'com.whitelabel'
  const packagePathOld = idOld.replace(/\./g, '/')
  const packagePathNew = idNew.replace(/\./g, '/')
  const packageRootOld = packagePathOld.split('/')[0]

  replaceStringInFile(`${dirDst}/android/app/build.gradle`, idOld, idNew)

  replaceStringInFile(
    `${dirDst}/android/app/src/main/AndroidManifest.xml`,
    idOld,
    idNew
  )

  replaceStringInFile(
    `${dirDst}/android/app/src/debug/java/${packagePathOld}/ReactNativeFlipper.java`,
    idOld,
    idNew
  )

  replaceStringInFile(
    `${dirDst}/android/app/src/release/java/${packagePathOld}/ReactNativeFlipper.java`,
    idOld,
    idNew
  )

  replaceStringInFile(
    `${dirDst}/android/app/src/main/AndroidManifest.xml`,
    idOld,
    idNew
  )

  replaceStringInFile(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/MainApplication.java`,
    idOld,
    idNew
  )

  replaceStringInFile(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/MainActivity.java`,
    idOld,
    idNew
  )

  replaceStringInFile(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/MainActivity.java`,
    idOld.split('.')[1],
    idNew.split('.')[2]
  )

  replaceStringInFile(
    `${dirDst}/ios/whitelabel.xcodeproj/project.pbxproj`,
    idOld,
    idNew
  )

  console.log(
    `Move ${`${dirDst}/android/app/src/debug/java/${packagePathOld}/ReactNativeFlipper.java`}`
  )
  console.log(
    `  to ${`${dirDst}/android/app/src/debug/java/${packagePathNew}/ReactNativeFlipper.java`}`
  )
  fs.moveSync(
    `${dirDst}/android/app/src/debug/java/${packagePathOld}/ReactNativeFlipper.java`,
    `${dirDst}/android/app/src/debug/java/${packagePathNew}/ReactNativeFlipper.java`
  )

  console.log(
    `Move ${`${dirDst}/android/app/src/release/java/${packagePathOld}/ReactNativeFlipper.java`}`
  )
  console.log(
    `  to ${`${dirDst}/android/app/src/release/java/${packagePathNew}/ReactNativeFlipper.java`}`
  )
  fs.moveSync(
    `${dirDst}/android/app/src/release/java/${packagePathOld}/ReactNativeFlipper.java`,
    `${dirDst}/android/app/src/release/java/${packagePathNew}/ReactNativeFlipper.java`
  )

  console.log(
    `Move ${`${dirDst}/android/app/src/main/java/${packagePathOld}/MainActivity.java`}`
  )
  console.log(
    `  to ${`${dirDst}/android/app/src/main/java/${packagePathNew}/MainActivity.java`}`
  )
  fs.moveSync(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/MainActivity.java`,
    `${dirDst}/android/app/src/main/java/${packagePathNew}/MainActivity.java`
  )

  console.log(
    `Move ${`${dirDst}/android/app/src/main/java/${packagePathOld}/MainApplication.java`}`
  )
  console.log(
    `  to ${`${dirDst}/android/app/src/main/java/${packagePathNew}/MainApplication.java`}`
  )
  fs.moveSync(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/MainApplication.java`,
    `${dirDst}/android/app/src/main/java/${packagePathNew}/MainApplication.java`
  )

  console.log(
    `Move ${dirDst}/app.json from 'whitelabel' to ${idNew.split('.')[2]}`
  )
  replaceStringInFile(`${dirDst}/app.json`, 'whitelabel', idNew.split('.')[2])

  console.log(
    `Move ${dirDst}/android/settings.gradle from 'whitelabel' to ${
      idNew.split('.')[2]
    }`
  )
  replaceStringInFile(
    `${dirDst}/android/settings.gradle`,
    'whitelabel',
    idNew.split('.')[2]
  )

  console.log(
    `Remove ${dirDst}/android/app/src/main/java/${packageRootOld}/whitelabel\n`
  )
  fs.removeSync(
    `${dirDst}/android/app/src/main/java/${packageRootOld}/whitelabel`
  )
  console.log(
    `Remove ${dirDst}/android/app/src/debug/java/${packageRootOld}/whitelabel\n`
  )
  fs.removeSync(
    `${dirDst}/android/app/src/debug/java/${packageRootOld}/whitelabel`
  )
  console.log(
    `Remove ${dirDst}/android/app/src/release/java/${packageRootOld}/whitelabel\n`
  )
  fs.removeSync(
    `${dirDst}/android/app/src/release/java/${packageRootOld}/whitelabel`
  )

  console.log('Setted new Id 🃟\n')
}

module.exports = setId
