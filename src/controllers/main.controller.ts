import { Application } from 'express';
import { APIService } from '../services/api.service';

export class Controller {
    private apiService: APIService;

    constructor(private app: Application){
        this.apiService = new APIService();
        this.routes();
    }

    public routes() {
        this.app.route('/bookmarks').get(this.apiService.getAllBookmarks);
        this.app.route('/bookmarks').post(this.apiService.saveBookmark);
    }
}