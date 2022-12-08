const express = require('express');
const app = express();

// Server Listening

const PORT = 3000;

app.listen(PORT, () =>
    console.log(`Server running on port:http://localhost:${PORT}`)
);