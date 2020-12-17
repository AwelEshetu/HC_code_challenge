const express = require("express"),
      stringFormatter = require('./codeChallenge').stringFormatter
const app = express(),
      bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use((req, res, next) => {
    req['rawBody'] = '';
    req.on('data', (chunk) => (req['rawBody'] += chunk));
    req.on('end', () => {
        req.body = req['rawBody'];
        next();
    });
});
app.post("/sananmuunnos/",  (req, res) => {
  const body = req.body;
  console.log('body is ',body)
  console.log('type of body is ', typeof(body))
  
  res.send('hello world')
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
