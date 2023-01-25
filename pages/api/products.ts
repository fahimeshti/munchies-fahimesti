// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import products from '../../data/products.json'
import { TApiAllProductsResponse } from '../../types'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiAllProductsResponse[]>
) {
  res.status(200).json(products)
}
