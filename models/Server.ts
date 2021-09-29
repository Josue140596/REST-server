import express from "express";
//CORS
import cors from 'cors';
//Rutas
import router from '../routes/users.route';

export class Server {
  //Attributes
  app: any;
  port: any;
  usersPath: string;
  //constructors
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users'; 
    //Middlewares
    this.middlewares();
    //Routes app
    this.routes();
  }
  //Methods
  middlewares() {
    //CORS
    this.app.use(cors());
    // Reading and parse body
    this.app.use(express.json());
    // Public
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.usersPath, router)
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`=>Server is running at ${this.port}`);
    });
  }
}
