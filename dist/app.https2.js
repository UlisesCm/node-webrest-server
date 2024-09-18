"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http2_1 = __importDefault(require("http2"));
const server = http2_1.default.createSecureServer({
    key: fs_1.default.readFileSync("./keys/server.key"),
    cert: fs_1.default.readFileSync("./keys/server.crt"),
}, (req, res) => {
    if (req.url === "/") {
        const htmlFile = fs_1.default.readFileSync("./public/index.html", "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlFile);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end();
    }
});
server.listen(8080, () => {
    console.log("Server running on port 8080");
});
