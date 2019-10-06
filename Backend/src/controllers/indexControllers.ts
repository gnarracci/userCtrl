import { Request, Response} from 'express';

class IndexControllers {

    public index (req: Request, res: Response) {
        res.json({text: 'API works Successfully!!! /'});
    }
}

export const indexController = new IndexControllers();