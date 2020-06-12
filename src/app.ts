//basic express app
import express, {Application} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

class App {
    public app: Application;

    constructor(){
        this.app = express();
        this.setConfig();
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