import koa from "koa"

// Local app imports
import { apiRoutes, apiMethods } from "./routes/api"

// Start of app
const app = new koa()
app.use(apiRoutes)
	.use(apiMethods)


// Export the app to be used to create server.
// The server is not created here because this 
// Will be used for testing
export default app