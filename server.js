require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})
const jsonServer = require('json-server')
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(process.env.SERVER_PORT, () => {
  console.log('JSON Server is running')

})