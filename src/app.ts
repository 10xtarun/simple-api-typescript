//basic express app
import express, {Application} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
//import controller-router
import { Controller } from './controllers/main.controller';

class App {
    public app: Application;
    //declare the controller
    public apiController: Controller;

    constructor(){
        this.app = express();
        this.setConfig();

        //instantiate the controller wrt this app
        this.apiController = new Controller(this.app);
    }

    private setConfig(){
        //set-up body parser middleware
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        //allow cors
        this.app.use(cors());
    }
}
export default new App().app;