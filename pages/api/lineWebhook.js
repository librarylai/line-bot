import { Client, middleware } from '@line/bot-sdk'
import { LINE_CONFIG } from '@/app/apis/lineWebhook/constants'
/**
 * 這邊使用 Next.js 12 版本的 API Routes
 * 因為在 Next13 API Route Handlers 的 req.headers 會是 HeaderList 而不是 Object，因此導致 line.middleware 內的 req.headers[Types.LINE_SIGNATURE_HTTP_HEADER_NAME] 取不到值
 * 因此這邊沿用 Next.js 12 的 API Routes 寫法
 */
export const config = {
  api: {
    bodyParser: false, // Necessary for line.middleware
  },
}

/* Reference: https://zenn.dev/pinalto/articles/79dc21060a8c95 */
async function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      return result instanceof Error ? reject(result) : resolve(result)
    })
  })
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('in22222222')
    // Validate request
    await runMiddleware(req, res, middleware(LINE_CONFIG))

    // Handle events
    const events = req.body.events
    console.log('events', events)
    res.status(200).json({ name: 'John Doe' })
  } else {
    res.status(405).end()
  }
}
