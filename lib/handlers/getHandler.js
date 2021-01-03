const axios = require('axios');
const chalk = require('chalk');

const getHandler = (argv) => {
  const url = argv._.slice(-1)[0];

  const query = argv.query
    ? {
        params: JSON.parse(argv.query),
      }
    : {};

  const headers = argv.headers
    ? {
        headers: JSON.parse(argv.headers),
      }
    : {};

  const config = { ...query, ...headers };

  axios
    .get(url, config)
    .then((res) => {
      console.group(chalk.underline.bgGreen('This response to GET request'));
      console.log(res.status, res.statusText);
      if (argv.verbose) {
        console.table(res.headers);
      }
      console.dir(res.data);
      console.groupEnd();
    })
    .catch((err) => {
      console.group(chalk.underline.bgRed('This Error to GET request'));
      if (err.response) {
        console.log(err.response.status, err.response.statusText);
        if (argv.verbose) {
          console.table(err.response.headers);
        }
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log('Error', err.message);
      }
      console.groupEnd();
    });
};

module.exports = getHandler;
