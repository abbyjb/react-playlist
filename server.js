
const jsonServer = require('json-server')
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
require('dotenv-flow').config();

server.use(middlewares)
server.use(router)
server.listen(process.env.SERVER_PORT, () => {
  console.log(`JSON Server is running at ${process.env.SERVER_PORT}`)

})