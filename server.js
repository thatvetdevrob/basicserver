/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

const express = require('express');


require('dotenv').config();


const app = express();

app.use(express.static('./public'));

const PORT = process.env.PORT;

// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

//turns on server

app.listen(PORT, () => {

  console.log(`listening on ${PORT}`);

});
