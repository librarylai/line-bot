import { getSpecialProductsListBroadcast } from '@/src/services/lineBot'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    /* 透過  broadcast 對群裡所有人進行商品推波 */
    getSpecialProductsListBroadcast()
      .then((result) => res.status(200).end())
      .catch((err) => {
        console.log(err)
        res.status(500).end()
      })
  } else {
    res.status(405).end()
  }
}
