#!/usr/bin/env node

const axios = require('axios');
const chalk = require('chalk');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// import Handlers
const getHandler = require('../lib/handlers/getHandler.js');
const postHandler = require('../lib/handlers/postHandler.js');
const putHandler = require('../lib/handlers/putHandler.js');

// create commands
const argv = yargs(hideBin(process.argv))
  .usage('<METHOD> [options] url wrapped in quotes if it contains queries')
  .command(
    ['GET', 'G'],
    'Make GET request',
    {
      query: {
        alias: 'q',
        describe: 'Query Parameters',
      },
      headers: {
        alias: 'h',
        describe: 'Set Request Headers',
      },
      verbose: {
        alias: 'v',
        describe: 'Show Headers',
        type: 'boolean',
        default: false,
      },
    },
    getHandler
  )
  .command(
    ['POST', 'P'],
    'Make POST request',
    {
      query: {
        alias: 'q',
        describe: 'Query Parameters',
      },
      body: {
        alias: 'b',
        describe: 'Stringified JSON object containing request body',
      },
      headers: {
        alias: 'h',
        describe: 'Set Request Headers',
      },
      verbose: {
        alias: 'v',
        describe: 'Show Headers',
        type: 'boolean',
        default: false,
      },
    },
    postHandler
  )
  .command(
    ['PUT', 'U'],
    'Make PUT request',
    {
      query: {
        alias: 'q',
        describe: 'Query Parameters',
      },
      body: {
        alias: 'b',
        describe: 'Stringified JSON object containing request body',
      },
      headers: {
        alias: 'h',
        describe: 'Set Request Headers',
      },
      verbose: {
        alias: 'v',
        describe: 'Show Headers',
        type: 'boolean',
        default: false,
      },
    },
    putHandler
  )
  .help().argv;

// console.log(argv);
