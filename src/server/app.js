/**
  Nora Fossenier
  10/12/2021

  This will hold server side code for my book review site
 */
'use strict';
const express = require('express');
const app = express();
const multer = require("multer");
app.use(multer().none());
app.use(express.json());
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');



app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);