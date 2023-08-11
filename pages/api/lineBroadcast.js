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
      text: `本月 特價商品 $ 清單如下：\n\n ${productString}`,
      emojis: [
        {
          index: 8, // index 代表 $ 符號所在的的位置，以上面為例：『本月 特價商品 $』 前字號位於第 8 個字元
          productId: '5ac2213e040ab15980c9b447', // Doc: https://developers.line.biz/en/docs/messaging-api/emoji-list/
          emojiId: '005',
        },
      ],
    })

    res.status(200).end()
  } else {
    res.status(405).end()
  }
}
