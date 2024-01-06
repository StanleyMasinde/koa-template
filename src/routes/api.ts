import KoaRouter from "@koa/router"

const router = new KoaRouter()

/**
 * Routes go here
 */
router.get("/", (ctx) => {
	ctx.body = "Hello, world"
})


export const apiRoutes = router.routes()
export const apiMethods = router.allowedMethods()
