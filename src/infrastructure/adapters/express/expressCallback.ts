import { Request, Response } from 'express'

export const expressCallback = (controller: any) => {
  return async (req: Request, res: Response) => {
    const httpRequest = {
      body: req.body,
      params: req.params,
      headers: {
        'Content-Type': req.get('Content-Type'),
      },
    }
    console.log({body: req.body})
    const httpResponse = await controller(httpRequest)

    if (httpResponse.headers) {
      res.set(httpResponse.headers)
    }
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
