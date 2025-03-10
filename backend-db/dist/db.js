"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client(CONNECTION_STRING);
pgClient.connect();
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const Query = `INSERT INTO users (username,email,password) VALUES ('${1}','${2}','${3}')`;
        const response = yield pgClient.query(Query, [username, email, password]);
        res.json({
            message: "You have signed up"
        });
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
