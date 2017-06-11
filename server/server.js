const express = require('express');
const app = express();

const path = require('path');

const publicPath = path.join('__dirname', '../public');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.GET('/', () => {
	console.log('hello');
});

app.listen(port, () => {
	console.log(`listening on ${port});
});


