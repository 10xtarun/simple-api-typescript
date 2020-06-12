import { Request, Response } from "express";
export class APIService {
    public getAllBookmarks(req: Request, res: Response){
        return res.status(200).send("Fetched All bookmarks");
        
        // return res.json({
        //     status: 200,
        //     message: "success",
        //     data: "List of bookmarks."
        // })
    }
}