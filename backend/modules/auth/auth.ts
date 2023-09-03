import {
  IUser,
  IBaseUser,
  IUserSchema,
  IUserForgotPasswordTokenObj
} from '../../types/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';

interface IUserVerify extends Request {
  user: IBaseUser;
}

export const comparePassword = (password, hashedPassword): boolean => {
  return bcrypt.compare(password, hashedPassword);
};

export const hashPassword = (password): string => {
  return bcrypt.hash(password, 8);
};

export const createJwtToken = (user: IUser): string => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_TOKEN
  );
  return token;
};

export const createForgotPasswordToken = (user: IUserSchema): string => {
  const token = jwt.sign(
    {
      email: user.email,
      username: user.username,
      ttl: Date.now() + 10 * 60 * 1000
    },
    process.env.JWT_TOKEN
  );
  console.log('Token created ', token);
  return token;
};

export const getForgotPasswordToken = (
  token: string
): IUserForgotPasswordTokenObj => {
  const user = jwt.verify(token, process.env.JWT_TOKEN);
  return user;
};

export const validateRequest = (
  req: IUserVerify,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.json({
      message: 'Unauthorized'
    });
    return;
  }
  const [, token] = bearer.split(' ');
  if (!token) {
    res.status(401);
    res.json({
      message: 'Not valid token'
    });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = user;
    next();
  } catch (err) {
    res.status(401);
    res.json({
      message: 'Unauthorized user'
    });
    return;
  }
};
