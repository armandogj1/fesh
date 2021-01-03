const axios = require('axios');
const chalk = require('chalk');

const postHandler = (argv) => {
  const url = argv._.slice(-1)[0];

  const body = argv.body ? JSON.parse(argv.body) : {};

  const headers = argv.headers
    ? {
        headers: JSON.parse(argv.headers),
      }
    : {};

  axios
    .post(url, body, headers)
    .then((res) => {
      console.group(chalk.underline.bgGreen('This response to POST request'));
      console.log(res.status, res.statusText);
      if (argv.verbose) {
        console.table(res.headers);
      }
      console.dir(res.data);
      console.groupEnd();
    })
    .catch((err) => {
      console.group(chalk.underline.bgRed('This Error to POST request'));
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

module.exports = postHandler;
