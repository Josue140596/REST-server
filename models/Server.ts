import express, { Request, Response } from "express";

export class Server {
  //Attributes
  app: any;
  port: any;
  //constructors
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //Middlewares
    this.middlewares();
    //Routes app
    this.routes();
  }
  //Methods
  middlewares() {
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.get("/api", (req: Request, res: Response) => {
      res.json({
        ok: true,
        msg: "get api",
      });
    });
    this.app.put("/api", (req: Request, res: Response) => {
      res.json({
        ok: true,
        msg: "put api",
      });
    });
    this.app.post("/api", (req: Request, res: Response) => {
      res.json({
        ok: true,
        msg: "post api",
      });
    });
    this.app.delete("/api", (req: Request, res: Response) => {
      res.json({
        ok: true,
        msg: "delete api",
      });
    });
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`=>Server is running at ${this.port}`);
    });
  }
}
