/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const bodyParser = require('webpack-body-parser')

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let toDos = [
  {
    id: uid(),
    title: "Task 1",
    createAt: new Date()
  },
  {
    id: uid(),
    title: "Task 2",
    createAt: new Date()
  },
  {
    id: uid(),
    title: "Task 3",
    createAt: new Date()
  }
];

function uid() {
  return Math.random().toString(36).substring(7);
}

app.get('/api/to-dos', (req, res) => {
  res.json(toDos);
});

app.post('/api/to-dos', (req, res) => {

  const { title } = req.body;

  const toDo = {
    id: uid(),
    title: title,
    createAt: new Date()
  }

  toDos.push(toDo);

  res.json(toDo);

});

app.get('/api/to-dos/:id/delete', (req, res) => {

  const { id } = req.params;

  toDos = toDos.filter(toDo => toDo.id.toString() !== id.toString());

  res.send(200);

});

if (isDeveloping) {

  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);

  app.use(webpackHotMiddleware(compiler));

  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });

} else {

  app.use(express.static(__dirname + '/dist'));

  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
