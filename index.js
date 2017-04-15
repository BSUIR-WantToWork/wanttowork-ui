const koa = require('koa');
const serve = require('koa-static');
const history = require('koa-connect-history-api-fallback');

(new koa())
    .use(history())
    .use(serve('dist'))
    .listen(process.env.PORT || 3000);
