const express = require('express');
const proxyMiddleWare = require("http-proxy-middleware");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname,'./public')));

//反向代理配置

//api.use('/**',proxyMiddleWare(option))   可配置多个

// option = {
//     target: 'http://***',               // 目标主机
//     changeOrigin: true,                 // 需要虚拟主机站点
//     ws: true,                           // 是否代理websocket
//     pathRewrite: {
//         '^/api/old-path' : '/api/new-path',   //请求地址是/api/new-path    
//         '^/api/remove/path' : '/path',        //请求地址是/path          
//         '^/api/auth/login':'/path'            //请求地址是/path
//     }
// }

// app.use("/api",proxyMiddleWare({
//     target: '目标主机',
//     changeOrigin: true, 
// }))

// 请求URL                            服务接输入结果
// 127.0.0.1:3000/api/test          请求地址是/api/test
// 127.0.0.1:3000/test              不转发
// 127.0.0.1:3000/api               请求地址是/api
// 127.0.0.1:3000/test              不转发

app.get('*',function(req,res){
    req.sendFile(path.resolve(__dirname,'./public/','index.html'));
})

app.listen(PORT,function(){
    console.log('启动服务')
})