"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
app.listen(3000, () => {
    console.info("Hey AK! I am listening for your commands, ping me at 3000!");
    console.info("AK! it was a horrible experience. But don't worry, I found your data!");
});
