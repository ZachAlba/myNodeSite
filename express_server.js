const express = require('express');

const app = express();
const dir = __dirname + '/public';
const PORT = 1337;

app.use(express.static(dir));
app.use(express.static(dir+'/css'));
app.use(express.static(dir+'/images'));
app.use(express.static(dir+'/js'));


app.get('*', (req, res) => {
    res.sendFile(dir+'/404.html');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});