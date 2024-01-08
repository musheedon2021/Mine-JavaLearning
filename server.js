const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3500;


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, 'public')));