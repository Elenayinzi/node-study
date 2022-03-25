"use strict";
//需求，希望有一个服务，可以依据请求的接口内容返回相应的数据
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const list_json_1 = __importDefault(require("./list.json"));
console.log(data_1.DataStore);
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    //res.end('11111')
    res.json(list_json_1.default);
});
app.listen(8080, () => {
    console.log('服务已经开启了');
});
