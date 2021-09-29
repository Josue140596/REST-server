import dotenv from 'dotenv';
//Server Class
import { Server } from './models/Server';

dotenv.config();
const server = new Server();
server.listen();