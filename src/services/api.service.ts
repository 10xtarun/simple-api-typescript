import { Request, Response } from "express";
import { MongooseDocument } from "mongoose";
//import model
import { Bookmark } from "../models/bookmark.model";
export class APIService {
    public getAllBookmarks(req: Request, res: Response){
        console.log("inside get all");
        Bookmark.find({}, (error: Error, data: MongooseDocument) => {
            console.log("inside find")
            if(error){
                return res.json({
                    status: 404,
                    success: false,
                    message: "Not Found!",
                })
            }
            res.json({
                status: 200,
                success: true,
                data: data,
            })
        })
    }
}