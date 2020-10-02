var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var url = require('url')

app.set('views', __dirname + '')
app.engine('html', require('ejs').renderFile)

app.get('/', function (req, res) {
    res.render('./public/index.html')
})
app.get('/css/:filename', function (req, res) {
    var filename = req.params.filename
    res.sendFile(__dirname + "/public/css/" + filename)
})
app.get('/img/:filename', function (req, res) {
    var filename = req.params.filename
    res.sendFile(__dirname + "/public/img/" + filename)
})
app.get('/img/:path/:filename', function (req, res) {
    var path = req.params.path
    var filename = req.params.filename
    res.sendFile(`${__dirname}/public/img/${path}/${filename}`)
})

app.get('/games/:game', function (req, res) {
    var game = req.params.game
    res.render('public/games/' + game + '/index.html')
})

app.get('/games/:game/TemplateData/:arq', function (req, res) {
    var arq = req.params.arq
    var game = req.params.game
    res.sendFile(__dirname + "/public/games/" + game + "/TemplateData/" + arq)
})

app.get('/games/:game/Release/:arq', function (req, res) {
    var arq = req.params.arq
    var game = req.params.game
    res.sendFile(__dirname + "/public/games/" + game + "/Release/" + arq)
})

app.get('/games/:game/Build/:arq', function (req, res) {
    var arq = req.params.arq
    var game = req.params.game
    res.sendFile(__dirname + "/public/games/" + game + "/Build/" + arq)
})

var port = (process.env.PORT || 5000)
app.listen(port, function () {
  console.log('Game listening on port ' + port + '!')
})
