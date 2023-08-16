import { getExpireProductsListBroadcast } from '@/src/services/lineBotService'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    /* 透過  broadcast 對群裡所有人進行商品到期通知 */
    getExpireProductsListBroadcast()
      .then((result) => res.status(200).end())
      .catch((err) => {
        console.log(err)
        res.status(500).end()
      })
  } else {
    res.status(405).end()
  }
}
