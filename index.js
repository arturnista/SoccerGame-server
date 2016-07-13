var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var url = require('url')

app.set('views', __dirname + '')
app.engine('html', require('ejs').renderFile)

app.get('/', function (req, res) {
    res.render('index.html')
})

app.get('/:game', function (req, res) {
    var game = req.params.game
    res.render('app/' + game + '/views/index.html')
})

app.get('/:game/TemplateData/:arq', function (req, res) {
    var arq = req.params.arq
    var game = req.params.game
    res.sendFile(__dirname + "/app/" + game + "/views/TemplateData/" + arq)
})

app.get('/:game/Release/:arq', function (req, res) {
    var arq = req.params.arq
    var game = req.params.game
    res.sendFile(__dirname + "/app/" + game + "/views/Release/" + arq)
})

var port = (process.env.PORT || 5000)
app.listen(port, function () {
  console.log('Game listening on port ' + port + '!')
})

