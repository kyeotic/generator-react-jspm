var port = process.env.PORT || 9000,
    ip = process.env.IP || "0.0.0.0",
    clientDir = __dirname + '/src/',
    assetDir = __dirname + '/assets',
    jspmConfigName = '/system.config.js',
    jspmConfig = __dirname + jspmConfigName,
    jspmDir = __dirname + '/jspm_packages/',
    express = require('express'),
    app = express();

//Configure
app.use('/jspm_packages', express.static(jspmDir));
app.use('/assets', express.static(assetDir));
app.use(express.static(clientDir));

app.get(jspmConfigName, function(req, res) {
	res.sendFile(jspmConfig);
});


//Index Route
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//For multi-hosting app
//module.exports =  app;

//Start Listening
app.listen(port, ip);
console.log('Express server listening on port %d in %s mode', port, app.settings.env);
