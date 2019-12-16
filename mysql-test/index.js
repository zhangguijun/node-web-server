const mysql = require('mysql')

// 创建链接对象
const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'zhanghao',
  port: '3306',
  database: 'myblog'
})

// 链接
connect.connect();

//  执行sql 语句
const sql = 'select * from users'

connect.query(sql, (err, result)=>{
  if(err){
    console.log(err)
    return
  }
    console.log(result)
  
})

//  关闭连接

connect.end()