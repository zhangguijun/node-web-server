const handleUserRouter = (req, res) => {
  const method = req.method

  //  登录接口
  if (method === 'POST' && req.path === '/api/user/login') {
    return {
      msg: '这是登录接口'
    }
  }

}

module.exports =  handleUserRouter