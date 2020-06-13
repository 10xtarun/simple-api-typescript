import { Request, Response } from "express";
import { MongooseDocument } from "mongoose";
//import model
import { Bookmark } from "../models/bookmark.model";
export class APIService {
    public getAllBookmarks(req: Request, res: Response){
        console.log("inside get all");
        Bookmark.find({}, (error: Error, data: MongooseDocument) => {
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
        });
    }

    public saveBookmark(req: Request, res: Response) {
        let name = req.body.name;
        let url = req.body.url;
        let newBookmark = new Bookmark({
            name: name,
            url: url,
        })

        newBookmark.save((err) => {
            if(err){
                return res.json({
                    status: 500,
                    success: false,
                    message: "Internal Server Error",
                })
            }
            res.json({
                status: 201,
                success: true,
                message: "Data saved successfully",
                data: newBookmark,
            })
        })

    }
}