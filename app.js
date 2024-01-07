const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const path = require("path")
const bodyParser = require('body-parser')
const sequelize = require('./config/db')
const Router = require('./router/index')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.json())

// (async function() {
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.sync({ force: false });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  // });
  app.use('/',Router)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})