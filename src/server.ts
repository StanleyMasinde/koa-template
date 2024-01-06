import { createServer } from "node:http"
import app from "./app"

let port: number = 3000
if (process.env.APP_PORT) {
	port = +process.env.APP_PORT
} else {
	port = 3000
}

const server = createServer(app.callback())
server.listen(port)
server.on("listening", () => {
	console.log(`Server running on http://localhost:${port}`)
})
