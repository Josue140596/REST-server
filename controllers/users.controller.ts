import { Request, Response } from 'express';
//Models
import User from '../models/Usuario'
//Encrypt Password
import bcryptjs from 'bcryptjs';

export const getUser = (req: Request, res: Response) => {
  const query = req.query;
  res.json({
    ok: true,
    msg: "get api",
    query
  });
}
export const postUser = async(req: Request, res: Response)  => {
  const {name, email, password, rol} = req.body
  const user = new User({name, email, password, rol});
  //Validations
    //is There email?
  const existEmail = await User.findOne({email})
  if (existEmail){
    return res.status(400).json({
      msg: 'This email already exist'
    })
  } 
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


