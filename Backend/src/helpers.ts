import { Request, Response } from 'express';
const bcryptjs = require('bcryptjs');

class HashUser {

    public encryptPassword ( req: Request, res: Response ) {
        async (password: any) => {
            const salt = await bcryptjs.genSalt(10);
            const hash = await bcryptjs.hash(password, salt);
            return hash;
        };
    }

    public matchPassword () {
        async (password: any, savedPassword: any) => {
            try{
                await bcryptjs.compare(password, savedPassword);
            }catch(e){
                console.log(e);
            }
        };
    }

}

export const hashUser = new HashUser();

export default HashUser;
