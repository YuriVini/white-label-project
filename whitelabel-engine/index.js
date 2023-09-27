const commander = require('commander')
const build = require('./commands/builds')
const parseConfig = require('./utils/parseConfig')

commander
  .command('build')
  .option('-c, --config-path <config>', 'Configuration file')
  .option('-s, --source <source>', 'Source directory')
  .option('-d, --destination <destination>', 'Destination directory')
  .action((options) => {
    const { configPath, source, destination } = options
    if (!configPath) {
      console.error("missing mandatory option '-c'")
      return
    }
    if (!source) {
      console.error("missing mandatory option '-s'")
      return
    }
    if (!destination) {
      console.error("missing mandatory option '-d'")
      return
    }
    const config = parseConfig(configPath)
    build(config, source, destination)

    console.log('Your app is ready! 🥳\n')
    console.log(`Access ${destination} and use! 🤳`)
  })

commander.parse(process.argv)
