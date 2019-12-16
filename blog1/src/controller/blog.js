const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author=${author} `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc`
  //  返回promise
  return exec(sql)

}
const getDetail = (id) => {
  let sql = `select * from blogs where 1=1 `
  if (id) {
    sql += `and id=${id} `
  }
  sql += `order by createtime desc`
  //  返回promise
  return exec(sql).then(rows => {
    return rows[0]
  })
  // return {
  //   id: 1,
  //   title: '标题1',
  //   content: '内容1',
  //   createTime: 1576380028519,
  //   author: '张三'
  // }
}
const newBlog = (blogData = {}) => {
  // console.log(blogData, 'blogData')
  const title = blogData.title
  // console.log('title is', title)
  const content = blogData.content
  const author = blogData.author
  const createTime = Date.now()

  const sql = `
      insert into blogs (title, content, createtime, author)
      values ('${title}', '${content}', ${createTime}, '${author}');
  `

  return exec(sql).then(insertData => {
    // console.log('insertData is ', insertData)
    return {
      id: insertData.insertId
    }
  })


}
const updateBlog = (id, blogData = {}) => {
  // console.log( id,blogData,'update')
  const title = blogData.title
  const content = blogData.content
  // console.log(id)
  let sql = `
  update blogs set title='${title}', content='${content}' where id='${id}';
  `
  return exec(sql).then(updateData => {
    // console.log('updateData is ', updateData)
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}
const delBlog = (id, author) => {
  // id 就是要删除博客的id
  // return true
  const sql = `delete from blogs where id='${id}' and author='${author}';`
  return exec(sql).then(delData => {
      // console.log('delData is ', delData)
      if (delData.affectedRows > 0) {
          return true
      }
      return false
  })
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}