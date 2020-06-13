import { Application } from 'express';
import { APIService } from '../services/api.service';

export class Controller {
    private apiService: APIService;

    constructor(private app: Application){
        this.apiService = new APIService();
        this.routes();
    }

    public routes() {
        //@GET /bookmarks   get all bookmarks
        this.app.route('/bookmarks').get(this.apiService.getAllBookmarks);
        //@POST /bookmarks  save a bookmark
        this.app.route('/bookmarks').post(this.apiService.saveBookmark);
        //@DELETE /bookmarks/delete/:id     delete a bookmark 
        this.app.route('/bookmarks/delete/:id').delete(this.apiService.deleteBookmark);
    }
}