const express = require("express"),
      stringFormatter = require('./Formatter').stringFormatter;
const app = express();

//app.use(bodyParser.json())
app.use((req, res, next) => {
    req['rawBody'] = '';
    req.on('data', (chunk) => (req['rawBody'] += chunk));
    req.on('end', () => {
        req.body = JSON.parse(req['rawBody']);
        next();
    });
});

app.post("/",  (req, res) => {
  const body = req.body;
  res.send(JSON.stringify(stringFormatter(body)))
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
