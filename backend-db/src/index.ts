
import express from 'express';
//writing a dummy server to send request to postgress database
import { Client } from 'pg';
import { config } from 'dotenv';
config();
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const app = express();
app.use(express.json());

const pgClient = new Client(CONNECTION_STRING);
pgClient.connect();

app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const Query = `INSERT INTO users (username,email,password) VALUES ('${1}','${2}','${3}')`;
        const response = await pgClient.query(Query, [username, email, password]);
        
        res.json({
            message:"You have signed up"
        });
    }
    catch (error :any) {
        res.json({
            message: error.message
        });
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})