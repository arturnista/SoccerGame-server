var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var url = require('url')

app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)


app.get('/', function (req, res) {
    res.render('index.html')
})

app.get('/TemplateData/:arq', function (req, res) {
    var arq = req.params.arq
    res.sendFile(__dirname + "/views/TemplateData/" + arq)
})

app.get('/Release/:arq', function (req, res) {
    var arq = req.params.arq
    res.sendFile(__dirname + "/views/Release/" + arq)
})


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

