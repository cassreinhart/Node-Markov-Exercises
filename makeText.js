/** Command-line tool to generate Markov text. */

import fs from 'fs';
import axios from 'axios';
const markov = require('./markov');
import process from 'process';


function generateText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText());
}

function makeText(path) {
    fs.readFile(path, "utf8", function cb(err, data) {
      if (err) {
        console.error(`Cannot read file: ${path}: ${err}`);
        process.exit(1);
      } else {
        generateText(data);
      }
    });
  
} 

async function makeURLText(url) {
    let resp;
  
    try {
      resp = await axios.get(url);
    } catch (err) {
      console.error(`Cannot read URL: ${url}: ${err}`);
      process.exit(1);
    }
    generateText(resp.data)
}
  