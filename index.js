const {Application} = require("velocious")

this.application = new Application({
  databases: {
    default: {
      host: "mysql",
      username: "user",
      password: ""
    }
  },
  debug: false,
  directory: __dirname,
  httpServer: {port: 6001}
})

this.application.start()
