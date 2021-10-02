import { Request, Response } from 'express';
//Models
import User from '../models/Usuario'
//Encrypt Password
import bcryptjs from 'bcryptjs';
import { isEmailValid } from '../helpers/db-validators';


export const getUser = (req: Request, res: Response) => {
  const query = req.query;
  const t = req.body;
  res.json({
    ok: true,
    msg: "get api",
    query,
    t
  });
}
export const postUser = async(req: Request, res: Response)  => {
  const {name, email, password, rol} = req.body
  const user = new User({name, email, password, rol});
  //Encript Password
    //How many salts do you want?
  const salt = bcryptjs.genSaltSync(10);
  user.password = bcryptjs.hashSync(password, salt)
  //Save in DB
  await user.save();
  res.json({
    user
  });

}
export const putUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    ok: true,
    msg: "put api",
    id
  });
}
export const deleteUser = (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: "delete api",
  });
}
export const patchUser = (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: "patch api",
  });
}


