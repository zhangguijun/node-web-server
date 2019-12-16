const mysql = require('mysql')

const { MYSQL_CONF } = require('../config/db')

const con = mysql.createConnection(MYSQL_CONF)

//  开始连接

con.connect()

function exec(sql) {

  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        console.log(err)
        reject(err)

        return
      }
      resolve(result)

    })
  })
  return promise

}

module.exports = {
  exec
}