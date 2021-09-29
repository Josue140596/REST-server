import { Request, Response } from 'express';

export const getUser = ((req: Request, res: Response) => {
    const query = req.query;
    res.json({
      ok: true,
      msg: "get api",
      query
    });
})
export const postUser = ((req: Request, res: Response) => {
    const body = req.body
    res.json({
      ok: true,
      msg: "post api",
      body
    });
    
})
export const putUser = ((req: Request, res: Response) => {
    const {id} = req.params;
    res.json({
      ok: true,
      msg: "put api",
      id
    });
})
export const deleteUser = ((req: Request, res: Response) => {
    res.json({
      ok: true,
      msg: "delete api",
    });
})
export const patchUser = ((req: Request, res: Response) => {
    res.json({
      ok: true,
      msg: "patch api",
    });
})


