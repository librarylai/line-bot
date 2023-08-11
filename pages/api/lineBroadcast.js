import { Client } from '@line/bot-sdk'
import { LINE_CONFIG } from '@/src/constants/line'

// 模擬 特價商品資料
const MOCK_SPECIAL_PRODUCTS_DATA = [
  {
    id: 1,
    name: '魔方戀柱',
    price: 10000,
  },
  {
    id: 2,
    name: '魔方善意',
    price: 13000,
  },
]

let client = new Client(LINE_CONFIG)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    /* 透過  broadcast 對群裡所有人進行商品推波 */
    const productString = MOCK_SPECIAL_PRODUCTS_DATA.map((product) => `${product.name} 金額＄ ${product.price}`).join(`\n`)
    client.broadcast({
      type: 'text',
      text: `本月即將過期商品清單如下：\n\n ${productString}`,
    })

    res.status(200).end()
  } else {
    res.status(405).end()
  }
}
