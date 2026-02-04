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
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
app.use((ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = "Hey, I'm here! Need help? Send the magic word with some tips.";
}));
app.listen(3000, () => {
    console.info("Hey AK! I am listening for your commands, ping me at 3000!");
    console.info("AK! It was a horrible experience, but don't worry—I found your data!");
});
