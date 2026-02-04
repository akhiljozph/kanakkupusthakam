import * as Koa from "koa";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();

app.use(async ctx => {
    ctx.body = "Hey, I'm here! Need help? Send the magic word with some tips."
})

app.listen(3000, () => {
    console.info("Hey AK! I am listening for your commands, ping me at 3000!");
    console.info("AK! It was a horrible experience, but don't worry—I found your data!");
});