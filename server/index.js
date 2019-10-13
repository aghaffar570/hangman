const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/words', (req, res) => {
  const url = 'http://app.linkedin-reach.io/words'
  request({ url }, (err, resp, body) => {
    if (err || resp.statusCode !== 200) {
      return res.status(500).json({
        type: 'error',
        message: err.message
      });
    }

    const wordList = body.split('\n');
    const length = wordList.length;
    const data = JSON.stringify({ wordList, length });
    console.log(length);
    res.json(data);
  })
});


app.listen(3001, () => console.log('listening to proxy server on port 3001'));
