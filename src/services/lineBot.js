import { MOCK_SPECIAL_PRODUCTS_DATA } from '@/src/constants/products'
import { LINE_CONFIG } from '@/src/constants/line'
import { Client, middleware } from '@line/bot-sdk'
export const client = new Client(LINE_CONFIG)

export const lineMiddleware = middleware(LINE_CONFIG)

export const getRandomSpecialProductsMessage = async (event) => {
  const randomProduct = MOCK_SPECIAL_PRODUCTS_DATA[Math.floor(Math.random() * MOCK_SPECIAL_PRODUCTS_DATA.length)]
  return client.replyMessage(event.replyToken, [
    {
      type: 'text',
      text: `特價商品 $ 清單如下：\n\n ${randomProduct.name} 金額＄ ${randomProduct.price}`,
      emojis: [
        {
          index: 5,
          productId: '5ac21a8c040ab15980c9b43f',
          emojiId: '067',
        },
      ],
    },
    {
      type: 'image',
      originalContentUrl: randomProduct.img,
      previewImageUrl: randomProduct.img,
    },
  ])
}

export const getSpecialProductsListBroadcast = async () => {
  const productString = MOCK_SPECIAL_PRODUCTS_DATA.map((product) => `${product.name} 金額＄ ${product.price}`).join(`\n`)
  return client.broadcast({
    type: 'text',
    text: `本月 特價商品 $ 清單如下：\n\n${productString}`,
    emojis: [
      {
        index: 8, // index 代表 $ 符號所在的的位置，以上面為例：『本月 特價商品 $』 前字號位於第 8 個字元
        productId: '5ac2213e040ab15980c9b447', // Doc: https://developers.line.biz/en/docs/messaging-api/emoji-list/
        emojiId: '005',
      },
    ],
  })
}
