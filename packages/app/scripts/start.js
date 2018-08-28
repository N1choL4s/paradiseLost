/* eslint-disable */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express =  require('express');
var cors = require('cors');
var chalk = require('chalk');
var cors = require('cors');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var historyApiFallback = require('connect-history-api-fallback');
var execSync = require('child_process').execSync;
var opn = require('opn');
var http = require('@cerebral/http');
var poxy = require('http-proxy-middleware');
var httpProxy = require('http-proxy');

var config = require('../config/webpack.dev');
var path = require('../config/paths');

var DEFAULT_PORT = process.env.PORT || 3000;
var compiler;
var handleComiple;

function clearConsole(){
    // This seems to work best on Windows and other systems.
    // The intention is to clear the output so you can focus on most recent build.
    process.stdout.write('\x1bc')
}

function setupCompiler(port, protocol){
    //'Compiler' is a low-level interface to Webpack
    // It lets us listen to some events and provide our own custom messages.
    try {
        compiler = webpack(config, handleComiple);
    }catch (e) {
        console.log(chalk.red('Failed to compile.'));
        console.log();
        console.log(e.message || e);
        console.log();
        process.exit(1);
    }
    // "invalid" event fires when you have changed a file, and Webpack is
    // recompiling a bundle. WebpackDevServer takes care to pause serving the
    // bundle, so if you refresh, it'll wait instead of serving the old one.
    // "invalid" is short for "bundle invalidated", it doesn't imply any errors.
    compiler.hooks.invalid.tap('invalid', function(){
       clearConsole();
       console.log('compiling...');
    });
}

function run(port) {
    var protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    setupCompiler(port, protocol);
    runDevServer(port, protocol, '/app.html');

    if (process.env.LOCAL_SERVER) {
        const proxy = httpProxy.createProxyServer({});
        http
            .createServer(function(req, res) {
                if (req.url.includes('.js')) {
                    proxy.web(req, res, { target: 'http://localhost:3000' });
                } else {
                    proxy.web(req, res, {
                        target: 'http://localhost:3000/frame.html',
                        ignorePath: true,
                    });
                }
            })
            .listen(3002);
    }
}

run(DEFAULT_PORT);


