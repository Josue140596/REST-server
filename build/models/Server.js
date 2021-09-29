"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
//CORS
const cors_1 = __importDefault(require("cors"));
//Rutas
const users_route_1 = __importDefault(require("../routes/users.route"));
class Server {
    //constructors
    constructor() {
        this.app = (0, express_1.default)();
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
        this.app.use((0, cors_1.default)());
        // Reading and parse body
        this.app.use(express_1.default.json());
        // Public
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.usersPath, users_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`=>Server is running at ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map