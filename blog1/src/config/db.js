const env = process.env.NODE_ENV;

let MYSQL_CONF;
let REDIS_CONF;

if (env === 'dev') {
  // mysql 配置
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'zhanghao',
    port: '3306',
    database: 'myblog'
  }
  REDIS_CONF = {
    host: '127.0.0.1',
    port: '6379',
  }
}
if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'zhanghao',
    port: '3306',
    database: 'myblog'
  }
  REDIS_CONF = {
    host: '127.0.0.1',
    port: '6379',
  }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}