const jsonServer = require('json-server')
const cors = require('cors')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(middlewares)
server.use(router)

server.get('/user', (req, res) => {
   const { email } = req.query
   const user = db.users.find(user => user.email === email)
   res.json({ user })
})

export default api

server.listen(3000, () => {
   console.log('JSON Server is running')
})
