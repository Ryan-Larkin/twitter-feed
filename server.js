const app = require('express')();

const cors = require('cors')
const superagent = require('superagent');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

/*
twitter requests here maybe? or maybe split them up later
otherwise gotta move superagent to another file
*/

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Listening on ${port}`);
})
