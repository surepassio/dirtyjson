const express = require('express');
const dJSON = require('dirty-json');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

PORT = 12345

function fix_json(input_string) {
  const r = dJSON.parse(input_string)
  //return JSON.stringify(r);
  return r
}

app.post('/', (req, res) => {
  return res.send(fix_json(req.body));
});

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);
