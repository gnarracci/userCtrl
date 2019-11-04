import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const SECRET_KEY = "secret_user_ctrl";

interface IPayload {
    id: string,
    iat: number,
    exp: number
}

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({message: 'Access Denied!'});
    const payload = jwt.verify(token, SECRET_KEY) as IPayload;
    req.userId = payload.id;
    next();
}