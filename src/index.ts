import koa from "koa";
import parser from "koa-bodyparser";
import cors from "@koa/cors";
import { Client } from "pg";
import * as dotenv from 'dotenv';

const app = new koa();

app.use(cors());
app.use(parser());

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "local") {
    dotenv.config({ path: './config/\.env.local'});
} else {
    dotenv.config({ path: './config/\.env.development'});
}

console.log("PORT", process.env.PORT);

const client = new Client({
    user: 'idgital',
    host: 'localhost',
    database: 'local_db_new',
    password: 'Test1234',
    port: 5432,
});

app.use(async ctx => {
    ctx.body = "Hello World";
});

client.connect()
    .then(() => {
        console.log('Hurray, Connected to Database.');
        app.listen(PORT, () => {
            console.log(`Ex-tracker is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Oops! Database connection error!', err.stack));
