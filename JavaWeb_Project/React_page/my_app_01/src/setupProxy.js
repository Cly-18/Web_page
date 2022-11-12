const { createProxyMiddleware } = require("http-proxy-middleware");


module.exports = function (app) {
    app.use(

        "/api", createProxyMiddleware({
            //目标地址
            target: "http://voice.baidu.com",
            changeOrigin: true,
            // pathRewrite:{"^/api":""}
        })
    );
};
