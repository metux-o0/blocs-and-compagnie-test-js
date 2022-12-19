const express = require('express');
const cors = require('cors');
const config = require('config')

const app = express();


const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '500kb' }));
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
