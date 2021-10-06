import { Request, Response } from 'express';
//Models
import User from '../models/Usuario'
//Encrypt Password
import bcryptjs from 'bcryptjs';
import Usuario from '../models/Usuario';


export const getUser = async(req: Request, res: Response) => {
  const {limit, since } = req.query;
  const query = {estado: true}

  const [total, users] = await Promise.all([
    User.countDocuments(query),
    User.find(query)
    .skip(Number(since) || 0)
    .limit(Number(limit) || 5)
  ]);
  res.json({
    total,
    users
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
export const putUser = async(req: Request, res: Response) => {
  const { id } = req.params;
  const { _id, password, byGoogle, email, ...resto } = req.body;
  //TODO: Validate with DB
  if (password) {
    const salt = bcryptjs.genSaltSync(10);
    resto.password = bcryptjs.hashSync(password, salt)
  }
  const user = await Usuario.findByIdAndUpdate(id, resto)
  res.json(user);
}
export const deleteUser = async(req: Request, res: Response) => {
  const {id} = req.params;
  //Delete 
  const user = await User.findByIdAndDelete(id)
  res.json(user);
}
export const patchUser = (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: "patch api",
  });
}


