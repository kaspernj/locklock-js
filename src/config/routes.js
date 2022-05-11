const {Routes} = require("velocious")
const routes = new Routes()

routes.draw((route) => {
  route.resources("locks", {only: []}, (route) => {
    route.post("lock", {on: "member"})
    route.post("unlock", {on: "member"})
  })
})

module.exports = {routes}
