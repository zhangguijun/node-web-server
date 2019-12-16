const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1',
      createTime: 1576380028519,
      author: '张三'
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2',
      createTime: 1576380028519,
      author: '李四'
    }
  ]
}
const getDetail = (id) => {
  return {
    id: 1,
    title: '标题1',
    content: '内容1',
    createTime: 1576380028519,
    author: '张三'
  }
}
const newBlog = (blogData = {}) => {
  // console.log(blogData, 'blogData')
  return {
    id: 3
  }
}
const updateBlog = (id, blogData = {}) => {
  // console.log( id,blogData,'update')
  return true
}
const delBlog = (id) => {
  // id 就是要删除博客的id
  return true
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog
}