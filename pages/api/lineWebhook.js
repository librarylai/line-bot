import { Client, middleware } from '@line/bot-sdk'
import { LINE_CONFIG } from '@/src/constants/line'
/**
 * 這邊使用 Next.js 12 版本的 API Routes
 * 因為在 Next13 API Route Handlers 的 req.headers 會是 HeaderList（new Map 結構） 而不是 Object，因此導致 line.middleware 內的 req.headers[Types.LINE_SIGNATURE_HTTP_HEADER_NAME] 取不到值
 * 因此這邊沿用 Next.js 12 的 API Routes 寫法
 */
export const config = {
  api: {
    bodyParser: false, // Necessary for line.middleware
  },
}

let client = new Client(LINE_CONFIG)

/* Reference: https://zenn.dev/pinalto/articles/79dc21060a8c95 */
async function validateLineSignMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      return result instanceof Error ? reject(result) : resolve(result)
    })
  })
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Validate request
    await validateLineSignMiddleware(req, res, middleware(LINE_CONFIG))

    // Handle events
    const events = req.body.events
    console.log('events', events)
    res.status(200).json({ name: 'John Doe' })
  } else {
    res.status(405).end()
  }
}
