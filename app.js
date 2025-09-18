const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const conn = require('./db');
const session = require('express-session');