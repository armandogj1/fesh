const axios = require('axios');
const chalk = require('chalk');

const putHandler = (argv) => {
  const url = argv._.slice(-1)[0];

  const body = argv.body ? JSON.parse(argv.body) : {};

  const headers = argv.headers
    ? {
        headers: JSON.parse(argv.headers),
      }
    : {};

  const query = argv.query
    ? {
        params: JSON.parse(argv.query),
      }
    : {};

  const config = { ...query, ...headers };

  axios
    .put(url, body, config)
    .then((res) => {
      console.group(chalk.underline.bgGreen('This response to PUT request'));
      console.log(res.status, res.statusText);
      if (argv.verbose) {
        console.table(res.headers);
      }
      console.dir(res.data);
      console.groupEnd();
    })
    .catch((err) => {
      console.group(chalk.underline.bgRed('This Error to PUT request'));
      if (err.response) {
        console.log(err.response.status, err.response.statusText);
        if (argv.verbose) {
          console.table(err.response.headers);
        }
        console.log(err.response.data);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log('Error', err.message);
      }
      console.groupEnd();
    });
};

module.exports = putHandler;
