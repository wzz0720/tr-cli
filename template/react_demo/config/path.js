const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    appDist: resolveApp('dist'),
    appPublic: resolveApp('public'),
    appIndexJs: resolveApp('src/App.js'),
    appBuild: resolveApp('build'),
    appServer: resolveApp('server/'),
    appHtml: resolveApp('public/index.html'),
};