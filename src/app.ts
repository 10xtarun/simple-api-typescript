//basic express app
import express, {Application} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
//import constants
import { MONGO_URI } from './constants/api.constants';
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
    //method to set basic configuration for express setup
    private setConfig(){
        //set-up body parser middleware
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        //allow cors
        this.app.use(cors());
    }
    //method to connect with MongoDB 
    private setMongoConfig(){
        mongoose.Promise = global.Promise;
        mongoose.connect( MONGO_URI ,{
            useNewUrlParser: true,
        },(err) => {
            console.log(err);
        })
    }
}
export default new App().app;