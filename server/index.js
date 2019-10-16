const express = require('express');
const request = require('request');
const chalk = require('chalk');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/words', (req, res) => {
  const { difficulty } = req.query;
  const query = difficulty ? `difficulty=${difficulty}` : '';
  const url = `http://app.linkedin-reach.io/words?${query}`;
  console.log(chalk.magenta('request to: ') +  chalk.underline.magenta(url))
  request({ url }, (err, resp, body) => {
    if (err || resp.statusCode !== 200) {
      return res.status(500).json({
        type: 'error',
        message: err.message
      });
    }

    const wordList = body.split('\n');
    const length = wordList.length;
    res.json({ wordList, length });
  })
});


app.listen(3001, () => console.log(chalk.bgBlack.white('listening to proxy server on port 3001')));
