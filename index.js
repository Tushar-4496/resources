const http = require("http");
const data = require("../node/data");
const host = 'localhost';
const port = 8000;


// console.log(JSON.stringify(data));

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(data));
    // console.log("\n\nDATA 0 : ", data);
    // res.setHeader("Content-Type", "text/html");
    // res.writeHead(200);
    // res.end(`<html><body>
    // <h1>Meme API</h1>
    //     <img src={'${data[0]}'} alt="not" />
    // </body></html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
