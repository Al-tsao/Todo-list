// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
// 引用路由器
const routes = require('./routes')
const PORT = process.env.PORT || 3000

require('./config/mongoose')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// 將 request 導入路由器
app.use(routes)

// 設定應用程式監聽的埠號
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})