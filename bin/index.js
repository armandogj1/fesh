#!/usr/bin/env node

const axios = require('axios');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const getHandler = (argv) => {
  const url = argv._.slice(-1)[0];

  const query = argv.query
    ? {
        params: JSON.parse(argv.query),
      }
    : {};

  axios
    .get(url, query)
    .then((res) => {
      console.group('This response to GET request');
      console.log(res.status, res.statusText);
      console.table(res.headers);
      console.table(res.data);
      console.groupEnd();
    })
    .catch((err) => {
      console.group('This Error to GET request');
      if (err.response) {
        console.log(err.response.status, err.response.statusText);
        console.table(err.response.headers);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log('Error', err.message);
      }
      console.groupEnd();
    });
};

const postHandler = (argv) => {
  const url = argv._.slice(-1)[0];

  console.table(argv);
  const body = argv.body ? JSON.parse(argv.body) : {};

  axios
    .post(url, body)
    .then((res) => {
      console.group('This response to POST request');
      console.log(res.status, res.statusText);
      console.table(res.headers);
      console.table(res.data);
      console.groupEnd();
    })
    .catch((err) => {
      console.group('This Error to POST request');
      if (err.response) {
        console.log(err.response.status, err.response.statusText);
        console.table(err.response.headers);
        console.log(err.response.data);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log('Error', err.message);
      }
      console.groupEnd();
    });
};

// create commands
const argv = yargs(hideBin(process.argv))
  .command(
    ['GET', 'G'],
    'Make GET request',
    {
      query: {
        alias: 'q',
        describe: 'Query Parameters',
      },
    },
    getHandler
  )
  .command(
    ['POST', 'P'],
    'Make POST request',
    {
      body: {
        alias: 'b',
      },
    },
    postHandler
  )
  .help().argv;

// console.log(argv);
