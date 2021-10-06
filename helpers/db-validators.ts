//Models
import User from "../models/Usuario";
import Role from "../models/Role";
//Express
import { Response } from "express";

export const isRolValid = async (rol: any) => {
  const existRole = await Role.findOne({ rol });
  if (!existRole) {
    throw new Error(`${rol} is not valids`);
  }
};
export const isEmailValid = async (email: any) => {
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    throw new Error(`This ${email} already exist`);
  }
};
export const existId = async (id: any) => {
  const existId = await User.findById(id);
  if (!existId) {
    throw new Error(`This ID:${id} does not exist`);
  }
};
