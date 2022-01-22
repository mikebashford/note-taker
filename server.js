const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});